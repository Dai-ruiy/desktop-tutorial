import React from 'react'
import { createChart, CandlestickSeries, ColorType, CrosshairMode, LineStyle, type Time, type IChartApi } from 'lightweight-charts'
import { ArrowDownRight, ArrowUpRight, ChevronDown, CircleHelp, ExternalLink, ShieldCheck } from 'lucide-react'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

type Bar = [string, number, number, number, number]
type Stock = {
  name:string; symbol:string; shares:number; weight:number|null; cost:number|null; tag:string; role:string; facts:string;
  holdingRank:number; holdingReason:string; price:number; prev:number; time:string; assumptions:string; evidenceNote:string;
  recent20:[number,number]; recent60:[number,number]; scenarios?:[number,number,number][]; bps:number; shareCapital:number;
  bookCases?:{name:string;basis:string;lo:number;hi:number;bpsFactor?:number}[]; caseBasis?:string; scenarioNotes?:string[]; valuationContext?:{label:string;text:string}[]; check:string; invalidate:string;
  technical?:{low:number;lowDate:string;low60:number;low60Date:string;high:number;highDate:string;high20:number;high20Date:string;ma20:number;ma60:number;vwapClose:number;volumeRatio:number};
  report?:string; annual?:string; extra?:[string,string]; sources?:[string,string][];
}
type Payload={ stocks:Stock[]; history:Record<string,Bar[]>; snapshotDate:string; snapshotKind:string; researchDate?:string }
const fmt=(n:number)=>n.toFixed(2)
const sign=(n:number)=>(n>=0?'+':'')+n.toFixed(2)+'%'

function PriceChart({stock,bars,days}:{stock:Stock;bars:Bar[];days:number}) {
  const el=React.useRef<HTMLDivElement>(null);const chartRef=React.useRef<IChartApi|null>(null)
  const [hover,setHover]=React.useState<Bar|null>(null)
  React.useEffect(()=>{
    if(!el.current) return
    const element=el.current
    const chart=createChart(element,{height:300,autoSize:true,layout:{background:{type:ColorType.Solid,color:'#ffffff'},textColor:'#7c8984',fontFamily:'-apple-system, BlinkMacSystemFont, PingFang SC, sans-serif',fontSize:11,attributionLogo:true},grid:{vertLines:{color:'#f4f6f3'},horzLines:{color:'#edf1ed'}},crosshair:{mode:CrosshairMode.Normal},rightPriceScale:{borderVisible:false,scaleMargins:{top:.15,bottom:.12}},timeScale:{borderVisible:false,timeVisible:false,rightOffset:3},handleScale:{mouseWheel:true,pinch:true,axisPressedMouseMove:true},handleScroll:{mouseWheel:false,pressedMouseMove:true,horzTouchDrag:true,vertTouchDrag:false}})
    chartRef.current=chart
    const series=chart.addSeries(CandlestickSeries,{upColor:'#d55b54',downColor:'#15936e',borderUpColor:'#d55b54',borderDownColor:'#15936e',wickUpColor:'#d55b54',wickDownColor:'#15936e',priceLineVisible:true,lastValueVisible:true})
    const visible=bars.slice(-days)
    series.setData(visible.map(([time,open,high,low,close])=>({time:time as Time,open,high,low,close})))
    if(stock.technical) {
      series.createPriceLine({price:stock.technical.low,color:'#219b79',lineWidth:1,lineStyle:LineStyle.Dashed,axisLabelVisible:true,title:'20日低'})
      series.createPriceLine({price:stock.technical.high,color:'#c2934b',lineWidth:1,lineStyle:LineStyle.Dashed,axisLabelVisible:true,title:'5日高'})
    }
    chart.timeScale().fitContent()
    const byDate=new Map(visible.map(b=>[b[0],b]))
    chart.subscribeCrosshairMove(event=>{const date=typeof event.time==='string'?event.time:'';setHover(byDate.get(date)??null)})
    let width=-1, pending=0
    const resize=new ResizeObserver(entries=>{const next=Math.round(entries[0].contentRect.width);if(next===width||next<=0)return;width=next;cancelAnimationFrame(pending);pending=requestAnimationFrame(()=>{})})
    resize.observe(element)
    return ()=>{resize.disconnect();cancelAnimationFrame(pending);chartRef.current=null;chart.remove()}

  },[stock,bars,days])
  const last=hover??bars.at(-1)!
  return <><div className="sd-ohlc" aria-live="off"><span>{last[0]}</span><span>开 <b>{fmt(last[1])}</b></span><span>高 <b>{fmt(last[2])}</b></span><span>低 <b>{fmt(last[3])}</b></span><span>收 <b>{fmt(last[4])}</b></span></div><div className="sd-chart" ref={el} aria-label={`${stock.name}前复权日K线，可拖动和缩放`} role="img"/><div className="sd-chart-footer"><button type="button" className="sd-reset" onClick={()=>chartRef.current?.timeScale().fitContent()}>恢复图表范围</button><span><i className="sd-legend-support"/>近20日低 <i className="sd-legend-pressure"/>近5日高 <span className="sd-subtle">· 红涨绿跌 · 拖动或缩放查看</span></span><a href="https://www.tradingview.com/" target="_blank" rel="noopener noreferrer">TradingView Lightweight Charts™ · © 2025 TradingView, Inc. ↗</a></div></>
}

function Valuation({stock:s,snapshotDate,researchDate}:{stock:Stock;snapshotDate:string;researchDate?:string}) {
  const cases = s.bookCases?.map(c=>({name:c.name,low:s.bps*(c.bpsFactor??1)*c.lo,high:s.bps*(c.bpsFactor??1)*c.hi,formula:`每股净资产约 ${fmt(s.bps)} 元 × ${((c.bpsFactor??1)*100).toFixed(0)}% × PB ${c.lo}–${c.hi} 倍（计算使用未取整数据）`,basis:c.basis})) ?? s.scenarios?.map(([eps,lo,hi],i)=>({name:['保守','基准','乐观'][i],low:eps*lo,high:eps*hi,formula:`EPS 约 ${fmt(eps)} 元 × PE ${lo}–${hi} 倍（计算使用未取整数据）`,basis:s.scenarioNotes?.[i]??''})) ?? []
  const upper=Math.max(s.price,...cases.map(c=>c.high))*1.08
  return <section className="sd-panel sd-valuation" aria-labelledby="sd-valuation-title"><div className="sd-section-heading"><div><div className="sd-overline">SCENARIO ANALYSIS</div><h3 id="sd-valuation-title">估值情景</h3><p>2027年末压力测试 · 假设情景，不是目标价</p></div><span className="sd-method">{s.bookCases?'PB 压力测试':'EPS × PE 情景'}</span></div>
    <p className="sd-case-note">研究复核：{researchDate || '未记录'}；行情：{snapshotDate}。收入、利润率和估值倍数是研究假设，依据仍需补充，不能视为可靠预测或买卖价格；区间未计股息、概率及资金时间价值。</p>
    {s.bookCases && <p className="sd-case-note">{s.caseBasis} 以研究时每股净资产估算的快照 PB 约 {fmt(s.price/s.bps)} 倍；净资产及股本时点见估值依据。</p>}
    {s.valuationContext && <div className="sd-evidence-grid">{s.valuationContext.map(item=><article key={item.label}><b>{item.label}</b><p>{item.text}</p></article>)}</div>}
    <div className="sd-scenario-grid">{cases.map((c,i)=><article className={`sd-scenario sd-scenario-${i}`} key={c.name}><div className="sd-case-title"><span className="sd-case-index">0{i+1}</span><b>{c.name}</b></div><div className="sd-case-price">{fmt(c.low)} <span>—</span> {fmt(c.high)} <small>元</small></div><div className="sd-case-relative">相对 {snapshotDate} 收盘价 {sign((c.low/s.price-1)*100)} ~ {sign((c.high/s.price-1)*100)}</div><div className="sd-case-rail"><span style={{left:`${c.low/upper*100}%`,width:`${(c.high-c.low)/upper*100}%`}}/><i style={{left:`${s.price/upper*100}%`}} title={`收盘价 ${fmt(s.price)} 元`}/></div><p>{c.formula}</p>{c.basis&&<p>{c.basis}</p>}</article>)}</div>
    <div className="sd-case-key"><span><i/> 区间</span><span><b/> 收盘价 {fmt(s.price)} 元</span><span>竖线及区间使用同一比例尺</span></div>
    <details className="sd-disclosure"><summary><span><CircleHelp size={16}/> 查看估值依据与限制</span><ChevronDown size={16}/></summary><div className="sd-disclosure-body"><p>{s.assumptions}</p><p>{s.evidenceNote}</p><p>近 20 日收盘区间 {fmt(s.recent20[0])}–{fmt(s.recent20[1])} 元；近 60 日 {fmt(s.recent60[0])}–{fmt(s.recent60[1])} 元。历史区间不是支撑或预测。</p>{s.bookCases&&<><p>以上是静态压力测试，每股净资产调整幅度及 PB 均为根据历史、同行和经营状况设定的情景假设，不代表合理估值或发生概率。亏损、减值、分红和股本变化均会改变结果。</p><p>按当前快照估算市值 {fmt(s.price*s.shareCapital/100000000)} 亿元；按 20 倍市盈率反推需全年归母利润约 {fmt(s.price*s.shareCapital/100000000/20)} 亿元，并非利润预测。</p></>}</div></details>
  </section>
}

function Levels({stock:s,snapshotDate}:{stock:Stock;snapshotDate:string}) {
  const t=s.technical;if(!t)return null
  const levels=[{name:'近期支撑',value:t.low,date:t.lowDate,note:'前20日最低',tone:'support'},{name:'关键支撑',value:t.low60,date:t.low60Date,note:'前60日最低',tone:'support'},{name:'近期压力',value:t.high,date:t.highDate,note:'前5日最高',tone:'pressure'},{name:'更远压力',value:t.high20,date:t.high20Date,note:'前20日最高',tone:'pressure'}]
  return <section className="sd-panel"><div className="sd-section-heading"><div><div className="sd-overline">PRICE LEVELS</div><h3>近期支撑与压力</h3><p>基于收盘前历史高低点的观察位</p></div><span className="sd-method">前复权 · 元</span></div><div className="sd-level-grid">{levels.map((l,i)=><div className="sd-level" key={i}><div className="sd-level-top"><span><i className={`sd-dot ${l.tone}`}/>{l.name}</span><small>{l.note}</small></div><div className="sd-level-number">{fmt(l.value)} <small>元</small></div><div className="sd-level-bottom">{l.date} · 相对收盘 {sign((l.value/s.price-1)*100)}</div></div>)}</div><div className="sd-level-context"><b>当前观察</b><span>{s.price<t.low?'收盘已跌破近期低点，观察能否收复并连续站稳。':'收盘在近期低点上方，观察回踩后能否止跌并收回该价。'} 反弹受阻时结合仓位复核；突破后观察能否站稳。</span></div><div className="sd-indicators"><span>20 日均线 <b>{fmt(t.ma20)}</b></span><span>60 日均线 <b>{fmt(t.ma60)}</b></span><span>20 日量加权收盘均价 <b>{fmt(t.vwapClose)}</b></span><span>当日量 / 前20日均量 <b>{fmt(t.volumeRatio)} 倍</b></span></div><p className="sd-fineprint">数据截至 {snapshotDate} 收盘；高低点排除当日，均线与量价均价含当日。量加权收盘均价不是逐笔成交密集区或持仓成本；观察位并非保证支撑或自动交易信号。</p></section>
}

export function StockDetail({stock:s,bars,payload,onReady}:{stock:Stock;bars:Bar[];payload:Payload;onReady:()=>void}) {
  const [days,setDays]=React.useState('60')
  React.useEffect(onReady,[])
  const change=(s.price/s.prev-1)*100
  const sources:[string,string][]=[...(s.report?[['2026 三季报',s.report] as [string,string]]:[]),...(s.annual?[['2025 财务披露',s.annual] as [string,string]]:[]),...(s.extra?[s.extra]:[]),...(s.sources??[])]
  return <div className="stock-workspace"><div className="sd-hero"><div className="sd-identity"><div className="sd-overline">STOCK RESEARCH <span> / </span> {s.symbol}</div><div className="sd-name"><h2>{s.name}</h2><span>{s.tag}</span></div><p>{s.role}</p></div><div className="sd-quote"><small>收盘价格 · {payload.snapshotDate}</small><div><strong>{fmt(s.price)}</strong><span> CNY</span><b className={change>=0?'up':'down'}>{change>=0?<ArrowUpRight size={15}/>:<ArrowDownRight size={15}/>} {sign(change)}</b></div><small>收盘 {s.time} · 前复权</small></div></div>
    <div className="sd-metrics"><div><small>综合持有排序</small><strong><em>#{s.holdingRank}</em> / {payload.stocks.length}</strong><span>2–3 年持有视角</span></div><div><small>持有股数</small><strong>{s.shares.toLocaleString()} <em className="sd-unit">股</em></strong><span>数量以记录为准</span></div><div><small>所列 A 股证券占比</small><strong>{s.weight===null?'待核':fmt(s.weight)+'%'}</strong><span>仅占所列证券，不含现金</span></div><div><small>持仓成本</small><strong>{s.cost===null?'分账户记录':fmt(s.cost)+' 元'}</strong><span>不影响持有价值排序</span></div></div>
    <div className="sd-thesis"><div className="sd-thesis-mark"><ShieldCheck size={19}/></div><div><span>持有判断</span><p>{s.holdingReason}</p><p className="sd-thesis-meta">研究复核：{payload.researchDate || payload.snapshotDate} · 综合经营质量、盈利与现金流、成长、估值和风险；历史估值及同行比较证据有限。以下复核条件变化时重新判断。</p></div></div>
    <section className="sd-panel sd-chart-panel"><div className="sd-section-heading sd-chart-heading"><div><div className="sd-overline">PRICE HISTORY</div><h3>价格走势 <span>日 K 线</span></h3><p>长桥前复权 · {bars.slice(-Number(days))[0][0]} 至 {payload.snapshotDate}</p></div><Tabs value={days} onValueChange={v=>{if(v)setDays(String(v))}}><TabsList className="sd-range-list" aria-label="K 线时间范围">{['30','60','120'].map(n=><TabsTrigger key={n} value={n} className="sd-range-tab">{n} 日</TabsTrigger>)}</TabsList></Tabs></div><PriceChart stock={s} bars={bars} days={Number(days)}/></section>
    <Valuation stock={s} snapshotDate={payload.snapshotDate} researchDate={payload.researchDate}/><Levels stock={s} snapshotDate={payload.snapshotDate}/><section className="sd-panel sd-research"><div className="sd-section-heading"><div><div className="sd-overline">RESEARCH NOTES</div><h3>经营与复核</h3><p>保留原研究结论和信息来源</p></div></div><div className="sd-research-grid"><article><h4>经营概况</h4><p>{s.facts}</p></article><article><h4>下一次复核</h4><p>{s.check}</p><p className="sd-subtle">{s.invalidate}</p></article></div><div className="sd-source-row"><span>资料来源</span>{sources.filter(([,url])=>url?.startsWith('https://')).map(([name,url],i)=><a key={i} href={url} target="_blank" rel="noopener noreferrer">{name}<ExternalLink size={13}/></a>)}</div></section></div>
}
