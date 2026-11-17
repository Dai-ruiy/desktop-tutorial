import React from 'react'
import { createRoot } from 'react-dom/client'
import { BarChart3, Layers3, LockKeyhole, ArrowUpRight } from 'lucide-react'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'
import './styles.css'

const isMobileAlias = /\/mobile-holdings\.html$/.test(location.pathname)
const isHoldings = /\/h\/?$|\/mobile-holdings\.html$/.test(location.pathname)
function Navigation() {
  const [current, setCurrent] = React.useState(isHoldings ? 'holdings' : 'industry')
  function navigate(value: string | number | null) {
    if (value === 'holdings' && !isHoldings) location.assign('./h/')
    if (value === 'industry' && isHoldings) location.assign(isMobileAlias ? './#industry' : '../#industry')
    setCurrent(String(value))
  }
  return <div className="workspace-nav"><div className="workspace-nav-inner">
    <a className="workspace-brand" href={isHoldings ? (isMobileAlias ? './#industry' : '../#industry') : '#industry'} aria-label="投资观察首页"><span className="workspace-logo"><BarChart3 size={18}/></span><span><b>投资观察</b><small>INVESTMENT RESEARCH</small></span></a>
    <Tabs value={current} onValueChange={navigate} className="workspace-tabs"><TabsList aria-label="网站导航" className="workspace-tab-list"><TabsTrigger value="industry" className="workspace-tab"><Layers3 size={15}/>行业走势</TabsTrigger><TabsTrigger value="holdings" className="workspace-tab"><BarChart3 size={15}/>持仓地图</TabsTrigger></TabsList></Tabs>
    <Badge variant="secondary" className="workspace-private"><LockKeyhole size={13}/> 本地解密</Badge>
  </div></div>
}
const nav = document.querySelector<HTMLElement>('.site-tabs')
if (nav) {const mount = document.createElement('div'); nav.before(mount); createRoot(mount).render(<Navigation/>); nav.hidden = true}
if (isHoldings) {
  const report = document.querySelector('#map-report')
  const enhance = () => {
    const nativeSelect = report?.querySelector<HTMLSelectElement>('select[aria-label="股票排序方式"]')
    if (nativeSelect && !nativeSelect.dataset.enhanced) {
      nativeSelect.dataset.enhanced = 'true'
      const options = Array.from(nativeSelect.options).map(option => ({ value: option.value, label: option.text }))
      const mount = document.createElement('span')
      mount.className = 'workspace-sort-control'
      nativeSelect.after(mount)
      nativeSelect.classList.add('workspace-native-select')
      nativeSelect.setAttribute('aria-hidden', 'true')
      nativeSelect.tabIndex = -1
      createRoot(mount).render(<Select value={nativeSelect.value} items={options} onValueChange={(value) => {
        if (value && value !== nativeSelect.value) {
          nativeSelect.value = value
          nativeSelect.dispatchEvent(new Event('change', { bubbles: true }))
        }
      }}><SelectTrigger aria-label="股票排序方式" className="workspace-select-trigger"><SelectValue /></SelectTrigger><SelectContent className="workspace-select-menu">{options.map(option => <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>)}</SelectContent></Select>)
    }

    const shortcuts = report?.querySelector<HTMLElement>('.map-shortcuts')
    if (shortcuts && !shortcuts.dataset.enhanced) {
      shortcuts.dataset.enhanced = 'true'
      shortcuts.querySelectorAll('a').forEach(a => { a.classList.add('workspace-shortcut'); const icon = document.createElement('span'); icon.textContent = '↗'; icon.setAttribute('aria-hidden','true'); a.append(icon) })
    }
  }
  if (report) new MutationObserver(enhance).observe(report,{childList:true,subtree:true})
  enhance()
}
const frame = document.querySelector<HTMLIFrameElement>('#chart-frame')
const themeIndustry = () => {
  const doc = frame?.contentDocument
  if (!doc?.head || doc.getElementById('workspace-industry-theme')) return
  const style = doc.createElement('style')
  style.id = 'workspace-industry-theme'
  style.textContent = `:root{--page:#f4f6f2;--ink:#1c3933;--line:#e1e9e3;--panel:#fff} .snapshot-card,.asof-card,.hero-panel,.section-block{box-shadow:0 4px 18px #173d2b08} .trend-grid section{background:#f8fbf8} .dashboard-header h1{color:#193d33}`
  doc.head.append(style)
}
frame?.addEventListener('load', themeIndustry)
themeIndustry()
void ArrowUpRight
