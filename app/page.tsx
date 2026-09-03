'use client';

import { useMemo, useState } from 'react';
import { ArrowDownRight, ArrowUpRight, BarChart3, Bot, CalendarDays, CheckCircle2, ChevronDown, Clock3, Gauge, MessageCircleMore, RefreshCw, Search, ShieldCheck, Sparkles, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const trend = [32, 38, 35, 49, 44, 61, 57, 72, 65, 82, 88, 96, 91, 108];
const categories = [
  { name: '数据查询', count: 286, share: 42, delta: '+5.4%' },
  { name: '指标口径', count: 151, share: 22, delta: '+2.1%' },
  { name: '分析建议', count: 109, share: 16, delta: '+1.6%' },
  { name: '工具使用', count: 82, share: 12, delta: '-0.8%' },
  { name: '其他', count: 52, share: 8, delta: '-1.2%' },
];
const people = [
  ['林小雨', '数据产品', 48, '#6256e8'], ['周明远', '业务分析', 41, '#0ea5a4'],
  ['陈子安', '搜索策略', 36, '#ec7f56'], ['赵晚晴', '用户研究', 31, '#d59b20'],
];
const questions = [
  ['如何统一不同看板的日活口径？', '林小雨', '指标口径', '2 分钟前'],
  ['帮我拆解近 7 天转化率波动原因', '周明远', '分析建议', '8 分钟前'],
  ['搜索词分布适合用哪个数据集？', '陈子安', '数据查询', '19 分钟前'],
  ['实验报告中的置信区间怎么解读？', '赵晚晴', '工具使用', '34 分钟前'],
];

function Sparkline() {
  const points = trend.map((value, index) => `${(index / (trend.length - 1)) * 100},${50 - value * 0.34}`).join(' ');
  return <svg viewBox="0 0 100 54" preserveAspectRatio="none" className="sparkline" aria-label="近两周问答量走势"><defs><linearGradient id="area" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#6256e8" stopOpacity=".28" /><stop offset="1" stopColor="#6256e8" stopOpacity="0" /></linearGradient></defs><path d={`M ${points} L 100,54 L 0,54 Z`} fill="url(#area)" /><polyline points={points} fill="none" stroke="#6256e8" strokeWidth="2" vectorEffect="non-scaling-stroke" /></svg>;
}

export default function Home() {
  const [range, setRange] = useState<'7d' | '30d'>('7d');
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => questions.filter(([question, name, tag]) => `${question}${name}${tag}`.includes(query)), [query]);
  return <main className="app-shell">
    <aside className="sidebar"><div className="brand"><span className="brand-mark"><Sparkles size={18} /></span><span>洞察台</span></div><nav aria-label="主导航"><a className="nav-item active" href="#overview"><Gauge size={18} />总览</a><a className="nav-item" href="#questions"><MessageCircleMore size={18} />问答分析</a><a className="nav-item" href="#users"><Users size={18} />用户洞察</a><a className="nav-item" href="#quality"><BarChart3 size={18} />质量追踪</a></nav><div className="privacy-note"><ShieldCheck size={18} /><div><strong>隐私安全</strong><span>当前为脱敏演示数据</span></div></div></aside>
    <section className="workspace"><header className="topbar"><div><p className="eyebrow">AI SERVICE ANALYTICS</p><h1>服务洞察总览</h1></div><div className="top-actions"><div className="range-switch" aria-label="时间范围"><button className={range === '7d' ? 'selected' : ''} onClick={() => setRange('7d')}>7 天</button><button className={range === '30d' ? 'selected' : ''} onClick={() => setRange('30d')}>30 天</button></div><Button variant="outline" size="lg"><CalendarDays /> 8月28日 — 9月3日 <ChevronDown /></Button><Button size="lg"><RefreshCw /> 刷新数据</Button></div></header>
      <div className="status-row"><span><i />数据已更新 · 今日 10:32</span><span className="safe"><ShieldCheck size={14} /> 仅展示合成数据</span></div>
      <section className="metrics" id="overview" aria-label="核心指标"><article className="metric featured"><div className="metric-icon"><Users /></div><p>周覆盖用户</p><div className="metric-value">150<span>+</span></div><small><b><ArrowUpRight /> 18.6%</b> 较上周</small></article><article className="metric"><div className="metric-icon mint"><MessageCircleMore /></div><p>周问答量</p><div className="metric-value">680<span>+</span></div><small><b><ArrowUpRight /> 12.4%</b> 较上周</small></article><article className="metric"><div className="metric-icon coral"><CheckCircle2 /></div><p>有据回答率</p><div className="metric-value">84.2<span>%</span></div><small><b><ArrowUpRight /> 3.1%</b> 较上周</small></article><article className="metric"><div className="metric-icon gold"><Clock3 /></div><p>平均响应时间</p><div className="metric-value">8.6<span>s</span></div><small><b className="down"><ArrowDownRight /> 1.8s</b> 较上周</small></article></section>
      <section className="content-grid"><article className="panel trend-panel"><div className="panel-head"><div><p className="kicker">使用趋势</p><h2>每日问答量</h2></div><span className="pill">日均 97 次</span></div><Sparkline /><div className="chart-axis"><span>8/21</span><span>8/24</span><span>8/27</span><span>8/30</span><span>9/03</span></div></article><article className="panel category-panel"><div className="panel-head"><div><p className="kicker">需求结构</p><h2>问题类型分布</h2></div><button className="text-button">查看详情</button></div><div className="category-list">{categories.map((item) => <div className="category" key={item.name}><div className="category-line"><span>{item.name}<em>{item.count}</em></span><b className={item.delta.startsWith('-') ? 'negative' : ''}>{item.delta}</b></div><div className="track"><i style={{ width: `${item.share}%` }} /></div></div>)}</div></article></section>
      <section className="content-grid lower"><article className="panel" id="users"><div className="panel-head"><div><p className="kicker">活跃用户</p><h2>本周互动 Top 4</h2></div><span className="pill subtle">姓名已替换</span></div><div className="people-list">{people.map(([name, role, count, color], index) => <div className="person" key={String(name)}><span className="rank">0{index + 1}</span><span className="avatar" style={{ background: String(color) }}>{String(name).slice(-1)}</span><div><strong>{name}</strong><small>{role}</small></div><b>{count} 次</b></div>)}</div></article><article className="panel questions-panel" id="questions"><div className="panel-head"><div><p className="kicker">最新动态</p><h2>实时问答</h2></div><label className="search"><Search size={15} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="搜索合成记录" /></label></div><div className="question-list">{filtered.map(([question, name, tag, time]) => <div className="question" key={question}><span className="bot-icon"><Bot size={16} /></span><div><strong>{question}</strong><small>{name} · {time}</small></div><span className="tag">{tag}</span></div>)}{filtered.length === 0 && <p className="empty">没有匹配的演示记录</p>}</div></article></section>
    </section>
  </main>;
}
