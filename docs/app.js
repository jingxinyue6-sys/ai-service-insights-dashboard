const routeMap={"":"map","/":"map","/observe":"observe","/knowledge":"knowledge","/sessions":"sessions","/monitor":"monitor","/weekly-summary":"weekly"};
function renderRoute(){const key=location.hash.replace(/^#/,'');const id=routeMap[key]||'map';document.querySelectorAll('.page').forEach(x=>x.classList.toggle('active',x.id===id));document.querySelectorAll('.rail a').forEach(x=>x.classList.toggle('active',x.dataset.page===id));window.scrollTo(0,0)}
addEventListener('hashchange',renderRoute);renderRoute();
