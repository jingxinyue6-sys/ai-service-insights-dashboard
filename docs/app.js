const routeMap={"":"map","/":"map","/observe":"observe","/knowledge":"knowledge","/sessions":"sessions","/monitor":"monitor","/weekly-summary":"weekly"};

const icon = (name, className='') => `<i data-lucide="${name}"${className ? ` class="${className}"` : ''}></i>`;

function polishInterface(){
  const mapAvatar=document.querySelector('#map .head .avatar');
  if(mapAvatar) mapAvatar.innerHTML='<img src="soushu-avatar.png" alt="数据员工头像">';
  const mapTitle=document.querySelector('#map .head h1');
  if(mapTitle) mapTitle.textContent='数据员工看板 · 能力图谱';

  const headIcons={observe:'eye',knowledge:'book-open',sessions:'message-square',monitor:'activity',weekly:'calendar-days'};
  Object.entries(headIcons).forEach(([id,name])=>{
    const target=document.querySelector(`#${id} .head-icon`);
    if(target) target.innerHTML=icon(name);
  });

  const abilityIcons=['brain-circuit','message-square','chart-no-axes-combined','zap','database','activity','clock-3','settings'];
  document.querySelectorAll('.ability-row .ico').forEach((el,index)=>el.innerHTML=icon(abilityIcons[index]));

  const metricIcons=['wrench','clock-3','circle-check','triangle-alert'];
  document.querySelectorAll('.metric-ico').forEach((el,index)=>el.innerHTML=icon(metricIcons[index]));

  const knowledgeIcons=['database','workflow','book-open','circle-help'];
  document.querySelectorAll('.knowledge-type .kico').forEach((el,index)=>el.innerHTML=icon(knowledgeIcons[index]));
  const book=document.querySelector('.doc-total .book');
  if(book) book.innerHTML=icon('book-open');

  const categoryIcons=['database','sparkles','package-check','chart-no-axes-combined'];
  document.querySelectorAll('.cat-head > span').forEach((el,index)=>el.innerHTML=icon(categoryIcons[index]));

  const sectionIcons={
    observe:['wrench'],
    knowledge:['file-text','list-checks'],
    sessions:['activity','trophy','messages-square'],
    monitor:['shield-check','files'],
    weekly:['calendar-check']
  };
  Object.entries(sectionIcons).forEach(([page,names])=>{
    document.querySelectorAll(`#${page} .part`).forEach((el,index)=>{
      const text=[...el.childNodes].find(node=>node.nodeType===Node.TEXT_NODE);
      if(text) text.textContent=text.textContent.replace(/^[^A-Za-z\u4e00-\u9fff]+/,' ');
      if(!el.querySelector('.part-icon')) el.querySelector('span')?.insertAdjacentHTML('afterend',icon(names[index],'part-icon'));
    });
  });

  document.querySelectorAll('.btn').forEach(button=>{
    const label=button.textContent.trim();
    if(label.includes('刷新')) button.innerHTML=`${icon('refresh-cw')}<span>刷新</span>`;
    if(label.includes('显示名')) button.innerHTML=`${icon('users')}<span>显示名</span>`;
    if(label.includes('从数据源导入')) button.innerHTML=`${icon('cloud-download')}<span>从数据源导入</span>`;
  });

  if(window.lucide) window.lucide.createIcons({attrs:{'stroke-width':1.8}});
}

function renderRoute(){
  const key=location.hash.replace(/^#/,'');
  const id=routeMap[key]||'map';
  document.querySelectorAll('.page').forEach(x=>x.classList.toggle('active',x.id===id));
  document.querySelectorAll('.rail a').forEach(x=>x.classList.toggle('active',x.dataset.page===id));
  window.scrollTo(0,0);
}

polishInterface();
addEventListener('hashchange',renderRoute);
renderRoute();
