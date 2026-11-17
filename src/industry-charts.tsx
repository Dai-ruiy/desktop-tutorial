import React from 'react'
import { createRoot, type Root } from 'react-dom/client'
import { createChart, LineSeries, ColorType, CrosshairMode, LineStyle, type Time, type IChartApi } from 'lightweight-charts'

type Point=[string,number]
type Series={group:string;name:string;start:string;end:string;current:number;high:number;highDate:string;drawdown:number;return1y:number;daily:Point[]}
type Payload={start:string;asOf:string;series:Series[]}
const color=['#37886a','#c9944a','#5086b0','#aa6d8a','#8879b1','#a7b5aa']
const number=(n:number)=>n.toLocaleString('zh-CN',{maximumFractionDigits:2})
const pct=(n:number)=>(n>0?'+':'')+n.toFixed(1)+'%'
const chartOptions={layout:{background:{type:ColorType.Solid,color:'#ffffff'},textColor:'#84958b',fontFamily:'-apple-system, BlinkMacSystemFont, PingFang SC, sans-serif',fontSize:11,attributionLogo:true},grid:{vertLines:{color:'#f4f7f3'},horzLines:{color:'#edf2ed'}},crosshair:{mode:CrosshairMode.Normal},rightPriceScale:{borderVisible:false,scaleMargins:{top:.15,bottom:.12}},timeScale:{borderVisible:false,rightOffset:2},handleScroll:{mouseWheel:false,pressedMouseMove:true,horzTouchDrag:true,vertTouchDrag:false},handleScale:{mouseWheel:true,pinch:true,axisPressedMouseMove:true}} as const
const dateText=(time:unknown)=>{if(typeof time==='string')return time;if(typeof time==='object'&&time!==null&&'year' in time){const t=time as {year:number;month:number;day:number};return `${t.year}-${String(t.month).padStart(2,'0')}-${String(t.day).padStart(2,'0')}`}return ''}
function average(rows:Point[],size=20):Point[]{let sum=0;return rows.map(([d,v],i)=>{sum+=v;if(i>=size)sum-=rows[i-size][1];return [d,sum/Math.min(size,i+1)]})}
function fitOnResize(element:HTMLElement,chart:IChartApi){
 let width=-1, pending=0
 const observer=new ResizeObserver(entries=>{const next=Math.round(entries[0].contentRect.width);if(next===width||next<=0)return;width=next;cancelAnimationFrame(pending);pending=requestAnimationFrame(()=>chart.timeScale().fitContent())})
 observer.observe(element)
 return ()=>{observer.disconnect();cancelAnimationFrame(pending)}
}
function Credit(){return <a className="ic-credit" href="https://www.tradingview.com/" target="_blank" rel="noopener noreferrer">TradingView Lightweight Charts™ · © 2025 TradingView, Inc. ↗</a>}
function Range({value,onChange}:{value:string;onChange:(x:string)=>void}){return <div className="ic-range" role="group" aria-label="图表时间范围">{[['60','60日'],['120','120日'],['all','一年']].map(([v,label])=><button type="button" key={v} aria-pressed={value===v} onClick={()=>onChange(v)}>{label}</button>)}</div>}
function Detail({item,asOf}:{item:Series;asOf:string}){
  const [range,setRange]=React.useState('all');const [hover,setHover]=React.useState<{date:string;value:number;ma:number}|null>(null);const el=React.useRef<HTMLDivElement>(null)
  const bars=range==='all'?item.daily:item.daily.slice(-Number(range));const mas=average(item.daily);const available=mas.slice(-bars.length)
  React.useEffect(()=>{
    if(!el.current)return
    const chart=createChart(el.current,{...chartOptions,autoSize:true,height:310})
    const line=chart.addSeries(LineSeries,{color:color[0],lineWidth:2,lastValueVisible:true,priceLineVisible:false,title:'收盘',crosshairMarkerVisible:true})
    const ma=chart.addSeries(LineSeries,{color:color[1],lineWidth:2,lineStyle:LineStyle.Dashed,lastValueVisible:false,priceLineVisible:false,crosshairMarkerVisible:true})
    line.setData(bars.map(([time,value])=>({time:time as Time,value})));ma.setData(available.map(([time,value])=>({time:time as Time,value})));chart.timeScale().fitContent()
    const values=new Map(bars.map(([d,v],i)=>[d,{date:d,value:v,ma:available[i][1]}]))
    chart.subscribeCrosshairMove(e=>setHover(values.get(dateText(e.time))??null))
    const disposeResize=fitOnResize(el.current,chart)
    return ()=>{disposeResize();chart.remove()}
  },[item,range])
  const display=hover??{date:asOf,value:item.current,ma:available.at(-1)?.[1]??0}
  return <div className="ic-detail"><div className="ic-detail-head"><div><div className="ic-caption">INDUSTRY TREND</div><h3>{item.name} <span>{range==='all'?'一年日线':`近 ${range} 个交易日`}</span></h3><div className="ic-selected">{display.date} <span>收盘 <b>{number(display.value)}</b></span><span>20日均线 <b>{number(display.ma)}</b></span></div></div><Range value={range} onChange={setRange}/></div><div className="ic-summary"><div><small>最新收盘</small><strong>{number(item.current)}</strong></div><div><small>一年最高收盘</small><strong>{number(item.high)}</strong><span>{item.highDate}</span></div><div><small>距一年高点</small><strong className="ic-loss">{pct(item.drawdown)}</strong></div><div><small>一年涨跌</small><strong className={item.return1y>=0?'ic-up':'ic-loss'}>{pct(item.return1y)}</strong></div></div><div className="ic-plot" ref={el} role="img" aria-label={`${item.name}日收盘和20日均线图，可拖动和缩放`}/><div className="ic-footer"><div className="ic-key"><span><i style={{background:color[0]}}/>日收盘</span><span><i style={{background:color[1]}}/>20日均线</span><span>拖动或缩放 · 数据截至 {asOf}</span></div><Credit/></div></div>
}
function Group({group,items,benchmark,asOf}:{group:string;items:Series[];benchmark:Series;asOf:string}){
 const [hidden,setHidden]=React.useState<string[]>([]);const [focus,setFocus]=React.useState<{date:string;values:Record<string,number>}|null>(null);const el=React.useRef<HTMLDivElement>(null)
 React.useEffect(()=>{
  if(!el.current)return
  const chart=createChart(el.current,{...chartOptions,autoSize:true,height:220,layout:{...chartOptions.layout,fontSize:10},rightPriceScale:{...chartOptions.rightPriceScale,scaleMargins:{top:.12,bottom:.1}}})
  const all=[...items,benchmark];const lines=all.map((item,i)=>{if(hidden.includes(item.name))return null;const line=chart.addSeries(LineSeries,{color:color[i],lineWidth:i===5?1:2,lineStyle:i===5?LineStyle.Dashed:LineStyle.Solid,lastValueVisible:false,priceLineVisible:false,crosshairMarkerVisible:true,priceFormat:{type:'price',precision:1,minMove:.1}});line.setData(item.daily.map(([time,value])=>({time:time as Time,value:value/item.daily[0][1]*100})));return line})
  chart.timeScale().fitContent();const maps=all.map(item=>new Map(item.daily.map(([date,value])=>[date,value/item.daily[0][1]*100])))
  chart.subscribeCrosshairMove(e=>{const date=dateText(e.time);if(!date){setFocus(null);return}const values:Record<string,number>={};all.forEach((item,i)=>{const v=maps[i].get(date);if(v!==undefined&&!hidden.includes(item.name))values[item.name]=v});setFocus({date,values})})
  const disposeResize=fitOnResize(el.current,chart)
  return ()=>{lines.length;disposeResize();chart.remove()}
 },[items,benchmark,hidden])
 const toggle=(name:string)=>setHidden(h=>h.includes(name)?h.filter(x=>x!==name):[...h,name])
 return <section className="ic-group"><div className="ic-group-head"><div><div className="ic-caption">SECTOR COMPARISON</div><h3>{group}</h3><p>起点 = 100 · 同期比较</p></div><span className="ic-chip">一年走势</span></div><div className="ic-group-readout">{focus?`${focus.date} · ${Object.entries(focus.values).map(([name,value])=>`${name} ${value.toFixed(1)}`).join('  /  ')}`:'移动至图表查看当日指数 · 点击图例显示或隐藏'}</div><div className="ic-group-plot" ref={el} role="img" aria-label={`${group}五个行业与沪深300的近一年标准化走势，可拖动和缩放`}/><div className="ic-legend">{[...items,benchmark].map((item,i)=><button key={item.name} type="button" className={hidden.includes(item.name)?'is-muted':''} aria-pressed={!hidden.includes(item.name)} onClick={()=>toggle(item.name)}><i style={{background:color[i]}}/><span>{item.name}</span><b>{pct(item.return1y)}</b></button>)}</div><div className="ic-group-foot"><span>图例涨跌为完整一年 · {asOf} 收盘</span><Credit/></div></section>
}
const styles=`
.ic-detail,.ic-group{color:#244235;font-family:-apple-system,BlinkMacSystemFont,"PingFang SC",sans-serif}.ic-detail *,.ic-group *{box-sizing:border-box}.ic-detail-head,.ic-group-head{display:flex;justify-content:space-between;align-items:flex-start;gap:14px}.ic-caption{font-size:10px;letter-spacing:.12em;font-weight:700;color:#91a99a}.ic-detail h3,.ic-group h3{margin:5px 0!important;font-size:19px!important;color:#244534}.ic-detail h3 span{font-size:12px;font-weight:500;color:#95a59b}.ic-selected{display:flex;flex-wrap:wrap;gap:6px 14px;color:#899d90;font-size:11px}.ic-selected b{font-variant-numeric:tabular-nums;color:#4c6959}.ic-range{display:flex;gap:2px;border-radius:9px;background:#eff4ef;padding:3px;white-space:nowrap}.ic-range button{border:0;background:transparent;border-radius:7px;color:#819388;padding:7px 11px;font-family:inherit;font-size:12px;font-weight:600;line-height:1.2;cursor:pointer}.ic-range button[aria-pressed=true]{background:#fff;color:#28664a;box-shadow:0 1px 4px #163f221a}.ic-range button:focus-visible,.ic-legend button:focus-visible{outline:2px solid #398a61;outline-offset:2px}
.ic-summary{display:grid;grid-template-columns:repeat(4,1fr);gap:0;margin:19px 0 8px;padding:14px 0;border-top:1px solid #eef2ee;border-bottom:1px solid #eef2ee}.ic-summary>div{padding:0 16px;border-right:1px solid #edf2ed;min-width:0}.ic-summary>div:first-child{padding-left:0}.ic-summary>div:last-child{border:0}.ic-summary small,.ic-summary span{display:block;color:#9aaba0;font-size:10px}.ic-summary strong{display:block;color:#294b39;font-size:18px;line-height:1.5;font-variant-numeric:tabular-nums}.ic-summary .ic-loss{color:#b16156}.ic-summary .ic-up{color:#387f5a}
.ic-plot{height:310px;width:100%;min-width:0}.ic-footer,.ic-group-foot{display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;margin-top:10px;font-size:11px;color:#98a99d}.ic-key{display:flex;align-items:center;flex-wrap:wrap;gap:9px 15px}.ic-key span{white-space:nowrap}.ic-key i,.ic-legend i{display:inline-block;width:14px;height:3px;border-radius:3px;margin:0 6px 3px 0}.ic-credit{color:#91a69a!important;text-decoration:none;font-size:10px}.ic-credit:hover{text-decoration:underline}
.trend-grid .ic-group{padding:18px!important;background:#fff!important;border:1px solid #e7eee7;border-radius:12px;min-width:0;overflow:hidden}.ic-group h3{font-size:16px!important}.ic-group-head p{margin:0;color:#92a497;font-size:11px}.ic-chip{border-radius:20px;padding:4px 9px;background:#f1f7f1;color:#71937c;font-size:10px;white-space:nowrap}.ic-group-readout{min-height:30px;display:flex;align-items:center;margin-top:9px;color:#92a397;font-size:10px;line-height:1.5}.ic-group-plot{height:220px;min-width:0;width:100%}.ic-legend{display:flex;flex-wrap:wrap;gap:6px;margin-top:12px}.ic-legend button{display:inline-flex;align-items:center;gap:4px;max-width:100%;border:1px solid #e5eee6;background:#f8fbf8;border-radius:7px;padding:5px 7px;color:#587163;font-family:inherit;font-size:11px;font-weight:500;line-height:1.3;cursor:pointer}.ic-legend i{width:10px;height:3px;margin:0;flex:none}.ic-legend b{color:#617e6d;font-size:10px;font-variant-numeric:tabular-nums}.ic-legend button.is-muted{opacity:.43;background:#fff}.ic-group-foot{padding-top:10px;border-top:1px solid #f0f3f0}.trend-grid .ic-group::after,#detail-chart::after{content:none!important}#detail-chart{overflow:visible!important}#detail-chart .ic-detail svg,.trend-grid .ic-group svg{min-width:0!important;max-width:100%!important}
@media(max-width:720px){.ic-detail-head{flex-wrap:wrap}.ic-range{width:100%;justify-content:space-between}.ic-range button{flex:1}.ic-summary{grid-template-columns:1fr 1fr;row-gap:12px}.ic-summary>div:nth-child(2){border-right:0}.ic-summary>div:nth-child(3){padding-left:0}.ic-summary strong{font-size:16px}.ic-plot{height:310px}.ic-group-plot{height:220px}.ic-group-readout{min-height:40px}.ic-legend button{padding:6px 7px}.trend-grid .ic-group{overflow:hidden!important}}
`
export function mountIndustryCharts(frame:HTMLIFrameElement){
 const doc=frame.contentDocument;if(!doc)return
 const script=Array.from(doc.querySelectorAll('script')).find(node=>node.textContent?.includes('const payload = '))
 const match=script?.textContent?.match(/const payload = (\{[^\n]*\});/);if(!match)return
 let payload:Payload;try{payload=JSON.parse(match[1])}catch{return}
 const selector=doc.querySelector<HTMLSelectElement>('#sector-select'),detail=doc.querySelector<HTMLElement>('#detail-chart'),grid=doc.querySelector<HTMLElement>('#trend-grid'),benchmark=payload.series.find(s=>s.group==='基准')
 if(!selector||!detail||!grid||!benchmark||!payload.series.length)return
 const style=doc.createElement('style');style.textContent=styles;doc.head.append(style)
 let detailRoot:Root|undefined
 function updateDetail(){const item=payload.series.find(s=>s.name===selector!.value);if(!item)return;detailRoot?.unmount();detail!.replaceChildren();detailRoot=createRoot(detail!);detailRoot.render(<Detail key={item.name} item={item} asOf={payload.asOf}/>)}
 updateDetail();selector.addEventListener('change',event=>{event.stopImmediatePropagation();updateDetail()},true)
 const groups=['科技','先进制造','消费医药','资源金融'];grid.replaceChildren();const groupRoot=createRoot(grid);groupRoot.render(<>{groups.map(group=><Group key={group} group={group} items={payload.series.filter(s=>s.group===group)} benchmark={benchmark} asOf={payload.asOf}/>)}</>)
 const main=doc.getElementById('industry-drawdown-vis');if(main){const resize=()=>{if(frame.isConnected)frame.style.height=`${Math.ceil(main.getBoundingClientRect().height)}px`};const observer=new ResizeObserver(resize);observer.observe(main);resize()}
}
