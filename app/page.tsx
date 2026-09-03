'use client';

import { useState } from 'react';
import { BarChart3, BookOpen, Bot, CalendarDays, CheckCircle2, Eye, Gauge, Grid2X2, MessageSquare, RefreshCw, ShieldCheck, Users } from 'lucide-react';

const nav = [['能力图谱', Grid2X2], ['可观测', Eye], ['知识库', BookOpen], ['Session', MessageSquare], ['监控', Gauge], ['周总结', CalendarDays]] as const;
const types = [['问数', 322, '47.4%', '+5.8pp'], ['取数', 196, '28.8%', '-3.2pp'], ['系统运维', 54, '7.9%', '+1.1pp'], ['分析', 47, '6.9%', '+0.8pp'], ['闲聊', 31, '4.6%', '-2.1pp'], ['纠错', 18, '2.6%', '+0.9pp'], ['项目管理', 8, '1.2%', '+0.2pp'], ['需求澄清', 4, '0.6%', '-0.4pp']];
const people = [['林小雨', 62], ['周明远', 54], ['陈子安', 47], ['赵晚晴', 39], ['孙思齐', 35], ['何嘉树', 31], ['高书宁', 28], ['沈予安', 25], ['许清和', 22], ['唐若宁', 19]];
const chats = [['近期业务看板的转化率口径是否有更新？', '林小雨', '需求澄清'], ['我想批量查看多组搜索词的流量分布，有推荐的分析方法吗？', '周明远', '问数'], ['如何获取近 7 日日均访问量和转化指标？', '陈子安', '取数'], ['帮我解读一下这组实验数据的异常波动', '赵晚晴', '分析'], ['这个指标在不同数据源中应该如何对齐？', '孙思齐', '问数']];

function MiniChart({ color = '#5d58dd' }: { color?: string }) { return <svg viewBox="0 0 160 60" className="mini"><path d="M2 42 C25 37 22 16 48 18 S75 49 97 33 S123 7 139 28 S148 53 158 55" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round"/><path d="M2 42 C25 37 22 16 48 18 S75 49 97 33 S123 7 139 28 S148 53 158 55 L158 60 L2 60Z" fill={color} opacity=".08"/></svg> }

export default function Home() {
  const [range, setRange] = useState('全部');
  const [identity, setIdentity] = useState('非管理员');
  return <main className="shell">
    <aside className="rail"><div className="avatar">AI</div>{nav.map(([label, Icon]) => <a href={label === 'Session' ? '#sessions' : '#'} className={label === 'Session' ? 'active' : ''} key={label}><Icon/><span>{label}</span></a>)}<i className="online"/></aside>
    <section className="page" id="sessions">
      <header><div className="title-icon"><MessageSquare/></div><h1>Session 分析</h1><span className="live"><i/>实时</span><button><RefreshCw/>刷新</button><button><Users/>显示名</button><small>同步：刚刚</small></header>
      <section className="filter-card"><div className="filter-block"><label>日期</label><button className="date"><CalendarDays/>2026‑08‑28 至 2026‑09‑03</button></div><div className="filter-block"><label>类型</label><div>{['全部','私聊','群聊','定时触发'].map(x => <button className={range===x?'selected':''} onClick={()=>setRange(x)} key={x}>{x}</button>)}</div></div><div className="filter-block identity"><label>身份</label><div>{['非管理员','全部','管理员'].map(x => <button className={identity===x?'selected':''} onClick={()=>setIdentity(x)} key={x}>{x}</button>)}</div></div><button className="reset">回到默认（近7天）</button></section>
      <SectionTitle part="Part 1" title="核心指标" />
      <section className="metric-grid"><Metric icon={<Users/>} title="来访人数" en="Unique Visitors" value="150+" suffix="人" note="匿名用户标识去重" color="#4d64d9"/><Metric icon={<MessageSquare/>} title="来访次数" en="Total Sessions" value="680+" suffix="次" note="群聊 21% / 私聊 79%" color="#7651d8"/><Metric icon={<CheckCircle2/>} title="有据回答率" en="Grounded Answer Rate" value="84.2%" note="高、中可信回答加权" color="#3e9a79"/><Metric icon={<ShieldCheck/>} title="综合质量分" en="Overall Quality Score" value="78.6%" note="来自脱敏演示标注" color="#dc7637"/></section>
      <section className="type-card"><h2>需求类型分布 <small>Question Type Stats</small></h2><div className="type-grid">{types.map(([name,count,share,delta])=><div className="type-row" key={name}><span>{name}</span><b>{count}</b><div className="bar"><i style={{width:share}}/></div><em>{share}</em><small className={String(delta).startsWith('-')?'down':''}>{delta}</small></div>)}</div></section>
      <SectionTitle part="Part 2" title="🏆 访问排行 Top10" />
      <section className="ranking">{people.map(([name,count],i)=><div key={name}><b className={i<3?'medal':''}>{i+1}</b><span className="person-avatar">{String(name).slice(-1)}</span><strong>{name}</strong><small>匿名用户 {String(1000+i*137)}</small><em>{count} 次</em></div>)}</section>
      <SectionTitle part="Part 3" title="💬 具体对话列表" />
      <section className="chat-list">{chats.map(([q,n,t])=><article key={q}><div><Bot/></div><strong>{q}</strong><span>{n}</span><em>{t}</em><small>Tokens：—</small></article>)}</section>
      <SectionTitle part="Part 4" title="✏️ 今日纠错" />
      <section className="correction"><div><strong>周明远</strong><span>补充</span><small>2026‑09‑03</small></div><label>原问题</label><p>这组数据中是否包含所有业务分类？我需要确认统计口径。</p><label>纠错内容</label><p>建议先核对分类映射表与当前日期分区，再按脱敏字段聚合计算。</p></section>
    </section>
  </main>;
}

function SectionTitle({part,title}:{part:string;title:string}) { return <div className="section-title"><span>{part}</span><BarChart3/><h2>{title}</h2></div> }
function Metric({icon,title,en,value,suffix,note,color}:{icon:React.ReactNode;title:string;en:string;value:string;suffix?:string;note:string;color:string}) { return <article className="metric"><i className="help">?</i><div className="metric-head" style={{color}}>{icon}<span><strong>{title}</strong><small>{en}</small></span></div><div className="metric-body"><div><b style={{color}}>{value}</b>{suffix&&<em>{suffix}</em>}<p>{note}</p></div><MiniChart color={color}/></div></article> }
