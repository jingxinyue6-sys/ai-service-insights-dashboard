(() => {
  const radar = document.querySelector('.radar-card');
  if (radar) radar.innerHTML = `
    <div class="radar-legend"><span class="goal">今年目标</span><span class="current">当前现状</span></div>
    <div class="radar-capabilities">
      <span>知识沉淀</span><span>问数</span><span>分析归因</span><span>需求澄清</span>
      <span>项目管理</span><span>取数</span><span>数仓开发</span><span>社交记忆</span>
    </div>
    <h2 class="section-title">能力雷达</h2>
    <svg class="radar radar-detail" viewBox="0 0 380 370" aria-label="能力雷达图">
      <g fill="none" stroke="#dbe5f0" stroke-width="1">
        <polygon points="190,56 285,95 324,190 285,285 190,324 95,285 56,190 95,95"/>
        <polygon points="190,82 266,114 298,190 266,266 190,298 114,266 82,190 114,114"/>
        <polygon points="190,110 247,133 270,190 247,247 190,270 133,247 110,190 133,133"/>
        <polygon points="190,137 228,152 243,190 228,228 190,243 152,228 137,190 152,152"/>
        <line x1="190" y1="190" x2="190" y2="56"/><line x1="190" y1="190" x2="285" y2="95"/>
        <line x1="190" y1="190" x2="324" y2="190"/><line x1="190" y1="190" x2="285" y2="285"/>
        <line x1="190" y1="190" x2="190" y2="324"/><line x1="190" y1="190" x2="95" y2="285"/>
        <line x1="190" y1="190" x2="56" y2="190"/><line x1="190" y1="190" x2="95" y2="95"/>
        <polygon class="goal-shape" points="190,72 273,107 308,190 273,273 190,308 107,273 72,190 107,107"/>
        <polygon class="current-shape" points="190,110 258,122 238,190 205,205 190,270 148,232 190,190 190,190"/>
      </g>
      <g class="goal-dots" fill="#fff" stroke="#9fb2c8" stroke-width="2">
        <circle cx="190" cy="72" r="4"/><circle cx="273" cy="107" r="4"/><circle cx="308" cy="190" r="4"/><circle cx="273" cy="273" r="4"/>
        <circle cx="190" cy="308" r="4"/><circle cx="107" cy="273" r="4"/><circle cx="72" cy="190" r="4"/><circle cx="107" cy="107" r="4"/>
      </g>
      <g class="current-dots" fill="#2f6fed" stroke="#fff" stroke-width="2">
        <circle cx="190" cy="110" r="5"/><circle cx="258" cy="122" r="5"/><circle cx="238" cy="190" r="5"/><circle cx="205" cy="205" r="5"/>
        <circle cx="190" cy="270" r="5"/><circle cx="148" cy="232" r="5"/><circle cx="190" cy="190" r="5"/><circle cx="190" cy="190" r="5"/>
      </g>
      <g class="radar-labels" fill="#5f7088" font-size="11" text-anchor="middle">
        <text x="190" y="24">知识沉淀</text><text x="315" y="72">问数</text><text x="355" y="194">分析归因</text>
        <text x="316" y="323">需求澄清</text><text x="190" y="354">项目管理</text><text x="64" y="323">取数</text>
        <text x="28" y="194">数仓开发</text><text x="64" y="72">社交记忆</text>
      </g>
    </svg>`;

  const sessions = document.querySelector('#sessions');
  if (sessions) {
    const header = sessions.querySelector('.head');
    if (!header.querySelector('small')) header.insertAdjacentHTML('beforeend','<small>同步：刚刚</small>');
    sessions.innerHTML = '';
    sessions.append(header);
    sessions.insertAdjacentHTML('beforeend', `
      <article class="card session-filter">
        <div class="filter-label">日期</div><button class="filter-date"><i data-lucide="calendar-days"></i>2026-08-28 至 2026-09-03</button>
        <i class="filter-divider"></i><div class="filter-label">类型</div><button class="active">全部</button><button>私聊</button><button>群聊</button><button>定时触发</button>
        <i class="filter-divider"></i><div class="filter-label">身份</div><button class="active">非管理员</button><button>全部</button><button>管理员</button>
        <button class="reset-range">回到默认（近7天）</button>
      </article>
      <div class="part"><span>Part 1</span>核心指标</div>
      <div class="session-overview">
        <div class="session-kpis">
          ${metricCard('users','来访人数','Unique Visitors','150+','人','#2f6fed','M10 78 C28 74 24 42 45 38 S70 64 84 28 112 24 126 74 140 78')}
          ${metricCard('hash','来访次数','Total Sessions','680+','次','#7c3ff2','M10 59 C32 56 52 62 72 58 S88 18 108 30 122 70 140 78')}
          ${metricCard('circle-check','有据回答率','Grounded Answer Rate','84.2%','','#0a9b63','M10 59 C35 58 35 20 59 25 S75 78 98 75 118 59 140 62')}
          ${metricCard('shield-check','综合质量分','Overall Quality Score','75.0%','','#f06416','')}
        </div>
        <article class="card demand-card">
          <div class="metric-heading"><span class="metric-symbol" style="color:#0aa7c4"><i data-lucide="chart-no-axes-combined"></i></span><div><strong>需求类型分布</strong><small>Question Type Stats</small></div><i data-lucide="circle-help" class="help"></i></div>
          <div class="demand-list">
            ${demandRow('问数',360,'52.9%','+6.7pp','#35bff0',100,'up')}
            ${demandRow('取数',200,'29.4%','−4.8pp','#9b74f4',56,'down')}
            ${demandRow('系统运维',34,'5.0%','+1.6pp','#ff8a42',16,'up')}
            ${demandRow('分析',34,'5.0%','+1.2pp','#38c98b',16,'up')}
            ${demandRow('闲聊',23,'3.4%','−4.2pp','#ed73b7',11,'down')}
            ${demandRow('纠错',16,'2.4%','+1.9pp','#94a3b8',8,'up')}
            ${demandRow('项目管理',7,'1.0%','+0.4pp','#6e7df6',5,'up')}
            ${demandRow('需求澄清',6,'0.9%','−2.5pp','#ffb42e',4,'down')}
          </div>
        </article>
      </div>
      <div class="session-bottom">
        <article class="card detail-panel rank-panel">
          <div class="panel-title"><span>Part 2</span><i data-lucide="trophy"></i><strong>访问排行 Top10</strong></div>
          <div class="full-ranking">${rankRows()}</div>
        </article>
        <article class="card detail-panel conversation-panel">
          <div class="panel-title"><span>Part 3</span><i data-lucide="message-square"></i><strong>具体对话列表</strong></div>
          ${conversation('这个需求什么时候排期进展到哪了：搜索词曝光点击与支付一致性底表口径更新…','陈曦','需求澄清')}
          ${conversation('我想批量看很多查询的流量分布数据，想请教下是否有相关能力？','周明远','问数')}
          ${conversation('实验看板中的多天累计应该如何理解？','林小雨','问数')}
          ${conversation('如何获取近 7 日的日均访问量和转化指标？','陈子安','取数')}
        </article>
      </div>
      <div class="part session-part"><span>Part 4</span>今日纠错</div>
      <div class="correction-grid">${correctionCards()}</div>
      <div class="part session-part"><span>Part 5</span>Sessions 数据同步</div>
      <article class="card sync-hero"><strong>从公开数据源同步 sessions 与 corrections 演示数据</strong><button><i data-lucide="refresh-cw"></i>立即同步</button></article>
      <article class="card sync-history">
        <div class="sync-head"><strong><i data-lucide="list-checks"></i>最近同步记录（最新10条）</strong><button><i data-lucide="refresh-cw"></i>刷新</button></div>
        <div class="sync-table-wrap"><table><thead><tr><th>ID</th><th>触发方式</th><th>状态</th><th>Sessions（总/写入/失败）</th><th>纠错记录（总/写入/失败）</th><th>耗时</th><th>开始时间</th></tr></thead><tbody>${syncRows()}</tbody></table></div>
      </article>`);
  }

  const monitor = document.querySelector('#monitor');
  if (monitor) {
    const header = monitor.querySelector('.head');
    monitor.innerHTML = '';
    monitor.append(header);
    monitor.insertAdjacentHTML('beforeend', `
      <div class="part"><span>Part 1</span>巡检状态</div>
      <article class="monitor-banner">
        <span class="monitor-icon"><i data-lucide="shield-check"></i></span>
        <div><strong>所有巡检项目正常运行</strong><small>共 3 项巡检任务 · 全部通过 · 系统健康</small></div>
        <b><i></i>健康</b>
      </article>
      <div class="monitor-cards">
        ${monitorCard('database','索引巡检','每30分钟','检查向量索引完整性和可用性，验证检索维度一致性及响应时间。','共 48 个文档索引，全部可用','#2f6fed','上次：15分钟前','下次：15分钟后')}
        ${monitorCard('git-branch','版本巡检','每60分钟','检查公开演示仓库同步状态和分支健康度，确认主分支无冲突。','3 个版本均已同步，无未合并分支','#7c3ff2','上次：30分钟前','下次：30分钟后')}
        ${monitorCard('heart','健康检查','每30分钟','检查数据员工服务进程存活和响应能力，验证状态信号正常发送。','进程正常，响应延迟 < 200ms','#0a9b63','上次：15分钟前','下次：15分钟后')}
      </div>
      <div class="part monitor-part-two"><span>Part 2</span>质量文件状态 <em>1 项注意</em></div>
      <article class="card quality-table"><table><thead><tr><th>文件名</th><th>描述</th><th>状态</th><th>最近更新</th><th>文件大小</th></tr></thead><tbody>
        ${fileRow('settings','service-config.json','公开演示主配置','正常','2天前','4.2 KB','#2f6fed')}
        ${fileRow('file-json','capabilities.json','能力配置清单','正常','5天前','12.8 KB','#7c3ff2')}
        ${fileRow('clock-3','schedule-summary.yaml','定时任务配置','正常','1天前','3.1 KB','#0a9b63')}
        ${fileRow('database','search-index.bin','演示检索索引','正常','6小时前','218 MB','#2f6fed')}
        ${fileRow('circle-alert','quality-report.log','质量检查日志','注意','3小时前','1.2 MB','#f06416',true)}
        ${fileRow('file-chart-column','sync-report.md','公开同步报告','正常','昨日 22:00','8.4 KB','#0a9b63')}
      </tbody></table></article>`);
  }

  const weekly = document.querySelector('#weekly');
  if (weekly) {
    const header = weekly.querySelector('.head');
    weekly.innerHTML = '';
    weekly.append(header);
    weekly.insertAdjacentHTML('beforeend', `
      <article class="card weekly-dashboard">
        <div class="weekly-card-title"><span><i data-lucide="file-chart-column"></i></span><strong>数据员工服务周报</strong><small>每周一更新</small></div>
        <div class="weekly-kpis">
          ${weeklyKpi('users','来访人数','62','人','#2f6fed','')}
          ${weeklyKpi('message-circle','来访次数','255','次','#7c3ff2','<p>群聊 <b>46 次 · 占比 18%</b></p><p>私聊 <b>209 次 · 占比 82%</b></p>')}
          ${weeklyKpi('flame','高频需求 · 问数','97','次','#f06416','<em>占比 38%</em>')}
        </div>
      </article>
      <article class="card weekly-summary-card">
        <div class="weekly-summary-head"><div><i data-lucide="calendar-days"></i><strong>本周运行总结</strong><span>2026.08.31 – 2026.09.06</span></div><small>数据周期：周一 00:00 – 周日 24:00</small></div>
        <div class="weekly-columns">
          <section class="weekly-good"><h3><i data-lucide="shield-check"></i>✅ 做得好</h3>
            ${summaryItem('circle-check','继表同步 4/4 全量成功：四类公开演示数据全部同步并完成版本发布。')}
            ${summaryItem('circle-check','留档巡检零遗漏：129 条会话样本完成检查，质量报告已生成。')}
            ${summaryItem('circle-check','周报独立审查机制生效：异常数据在发布前被识别并阻断。')}
            ${summaryItem('circle-check','核心成员列表同步稳定：定时任务按计划运行，匿名映射无漂移。')}
            ${summaryItem('circle-check','日报自动沉淀持续运行：本周每日按时生成，可追溯可审计。')}
          </section>
          <section class="weekly-improve"><h3><i data-lucide="triangle-alert"></i>⚠️ 待改进</h3>
            ${summaryItem('triangle-alert','授权刷新偶发超时：需要增加等待窗口和失败重试机制。')}
            ${summaryItem('triangle-alert','部分数据源权限不足：影响个别指标的完整性，需要补齐授权。')}
            ${summaryItem('triangle-alert','周报审查规则仍有缺口：对异常波动的自动提示需继续加强。')}
            ${summaryItem('triangle-alert','外部接口偶发不可用：需增加降级提示与状态说明。')}
          </section>
        </div>
        <section class="weekly-highlights"><h3><i data-lucide="sparkles"></i>本周亮点 / 重点事项</h3>
          ${highlightItem('周报数据审查流程上线：问题在发布前完成标注与修正，避免错误口径流出。')}
          ${highlightItem('四类数据全量同步成功：自动发布链路完成验证，版本记录完整可追踪。')}
          ${highlightItem('需求类型分布完成复盘：问数仍为本周最高频场景，已形成后续优化清单。')}
        </section>
      </article>
      <p class="privacy">公开演示版：所有用户、对话、任务与运行记录均为脱敏或合成数据。</p>`);
  }

  function metricCard(iconName,title,en,value,unit,color,path){
    return `<article class="card session-kpi" style="--accent:${color}"><div class="metric-heading"><span class="metric-symbol"><i data-lucide="${iconName}"></i></span><div><strong>${title}</strong><small>${en}</small></div><i data-lucide="circle-help" class="help"></i></div><div class="kpi-value">${value}${unit?`<small>${unit}</small>`:''}</div>${path?`<svg viewBox="0 0 150 90" class="spark"><path d="${path}"/></svg>`:''}<p>${title==='来访人数'?'匿名访客去重':title==='来访次数'?'私聊与群聊累计':title==='有据回答率'?'基于有效问答样本':'来自人工标注'}</p></article>`;
  }
  function demandRow(name,count,share,delta,color,width,trend){ return `<div class="demand-row"><div><span>${name}</span><em><b style="color:${color}">${count}</b> ${share}</em></div><div class="demand-track"><i style="width:${width}%;background:${color}"></i></div><small class="${trend}">${delta}</small></div>`; }
  function rankRows(){
    const people=[['林小雨',62],['周明远',54],['陈子安',48],['苏晴',38],['顾言',34],['宋嘉禾',32],['唐予安',29],['沈星河',26],['叶知秋',22],['江晚宁',18]];
    return people.map((p,i)=>`<div class="full-rank"><b>${i+1}</b><span>${p[0]}</span><i><u style="width:${Math.round(p[1]/62*100)}%"></u></i><em>${p[1]} 次</em></div>`).join('');
  }
  function conversation(q,user,type){return `<div class="conversation"><strong>${q}</strong><p>${user}<span>${type}</span><small>Tokens：—</small></p></div>`;}
  function correctionCards(){
    const items=[
      ['林小雨','补充','指标优先级如何判断？','建议按业务影响、时效和数据准备度综合排序。'],
      ['周明远','纠正','转化率是否包含重复访问？','公开看板默认按去重访客计算，明细页另行标注。'],
      ['陈子安','纠正','日均指标的分母如何取？','以所选日期内有效自然日数量作为分母。'],
      ['苏晴','补充','如何查看历史口径版本？','在指标详情中选择版本记录，可查看变更说明。'],
      ['顾言','纠正','累计值是否包含当天？','所选区间包含起止日期，实时数据会注明更新时间。'],
      ['宋嘉禾','补充','异常波动怎样快速定位？','优先对比渠道、地区和版本维度，再查看事件记录。'],
      ['唐予安','纠正','实验组数据何时稳定？','建议等待完整观察窗口后再判断，并关注样本量。'],
      ['沈星河','纠正','不同页面口径为何不一致？','先核对统计周期、过滤条件和去重方式。'],
      ['叶知秋','补充','可以导出哪些格式？','演示版支持 CSV 与 Markdown 摘要导出。'],
      ['江晚宁','纠正','指标空值是否等于零？','空值代表暂无有效数据，不应直接视为零。']
    ];
    return items.map((x,i)=>`<article class="card correction-card"><header><strong><i data-lucide="pen-line"></i>${x[0]}</strong><span class="${x[1]==='补充'?'supplement':'correct'}">${x[1]}</span><small><i data-lucide="clock-3"></i>2026-09-${String((i%6)+1).padStart(2,'0')}</small></header><label>原问题</label><p>${x[2]}</p><label>纠错内容</label><p>${x[3]}</p></article>`).join('');
  }
  function syncRows(){
    const rows=[['#66','定时·增量','成功','83 / 83 / 0','3 / 3 / 0','3516ms','09/06 23:12'],['#65','定时·增量','成功','139 / 139 / 0','4 / 4 / 0','1205ms','09/05 23:00'],['#64','定时·增量','成功','1 / 1 / 0','2 / 2 / 0','777ms','09/05 10:00'],['#63','定时·增量','成功','81 / 81 / 0','2 / 2 / 0','898ms','09/04 23:00'],['#62','定时·增量','成功','36 / 36 / 0','2 / 2 / 0','1989ms','09/04 10:01'],['#61','定时·增量','成功','56 / 56 / 0','2 / 2 / 0','1950ms','09/03 23:30'],['#60','手动·全量','成功','584 / 584 / 0','13 / 13 / 0','3855ms','09/03 11:01'],['#59','定时·增量','成功','28 / 28 / 0','1 / 1 / 0','1554ms','09/02 23:00'],['#58','定时·增量','成功','1 / 1 / 0','1 / 1 / 0','874ms','09/02 10:00'],['#57','定时·增量','成功','17 / 17 / 0','1 / 1 / 0','870ms','09/01 23:00']];
    return rows.map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td><td><span>成功</span></td><td>${r[3]}</td><td>${r[4]}</td><td>${r[5]}</td><td>${r[6]}</td></tr>`).join('');
  }
  function weeklyKpi(iconName,label,value,unit,color,extra){return `<div class="weekly-kpi" style="--accent:${color}"><div><i data-lucide="${iconName}"></i>${label}</div><strong>${value}<small>${unit}</small></strong>${extra}</div>`;}
  function summaryItem(iconName,text){return `<div class="summary-item"><i data-lucide="${iconName}"></i><span>${text}</span></div>`;}
  function highlightItem(text){return `<div class="highlight-item"><i data-lucide="sparkles"></i><span>${text}</span></div>`;}
  function monitorCard(iconName,title,freq,desc,result,color,last,next){return `<article class="card monitor-detail" style="--accent:${color}"><div class="monitor-card-head"><span><i data-lucide="${iconName}"></i></span><div><strong>${title}</strong><small>${freq}</small></div><b><i data-lucide="circle-check"></i>正常</b></div><p>${desc}</p><div class="monitor-result">${result}</div><footer><span><i data-lucide="refresh-cw"></i>${last}</span><span>${next}</span></footer></article>`;}
  function fileRow(iconName,name,desc,status,time,size,color,warn=false){return `<tr><td><span class="file-icon" style="color:${color}"><i data-lucide="${iconName}"></i></span><code>${name}</code></td><td>${desc}${warn?'<small>存在近期写入，建议检查</small>':''}</td><td><span class="file-status ${warn?'warn':''}"><i data-lucide="${warn?'triangle-alert':'circle-check'}"></i>${status}</span></td><td><i data-lucide="clock-3"></i>${time}</td><td>${size}</td></tr>`;}
})();
