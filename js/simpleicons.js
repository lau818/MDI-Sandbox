(async()=>{const version=5045,icons=await(await fetch(`../json/icons.json`)).json(),simple=await(await fetch(`../json/simpleicons.json`)).json(),body=document.querySelector(`tbody`),counts={},legends=document.querySelectorAll(`tfoot p`);let key,tr,td,svg,path,title,use;for(key in simple)if(simple.hasOwnProperty(key)){tr=tr?tr.cloneNode(0):document.createElement(`tr`);if(td)td=td.cloneNode(0);else{td=document.createElement(`td`);td.classList.add(`oh`,`toe`,`wsnw`);}if(svg){svg=svg.cloneNode(0);path=path.cloneNode(0);title=title.cloneNode(0);}else{svg=document.createElementNS(`http://www.w3.org/2000/svg`,`svg`),path=document.createElementNS(`http://www.w3.org/2000/svg`,`path`),title=document.createElementNS(`http://www.w3.org/2000/svg`,`title`),svg.setAttribute(`viewBox`,`0 0 24 24`);}svg.setAttribute(`class`,`vam`);title.append(document.createTextNode(key));path.setAttribute(`d`,icons[key].data);svg.append(title,path);td.append(svg);tr.append(td);td=td.cloneNode(0);svg=svg.cloneNode(0);use=use?use.cloneNode(0):document.createElementNS(`http://www.w3.org/2000/svg`,`use`);if(icons[key].retired)use.setAttribute(`href`,icons[key].retired>version?`#deprecated`:`#rejected`);else{use.setAttribute(`href`,icons[key].added&&icons[key].added>version?`#added`:`#available`);}svg.classList.add(use.getAttribute(`href`).slice(1));svg.append(use);td.append(svg);tr.append(td);td=td.cloneNode(0);svg=svg.cloneNode(0);svg.classList.remove(use.getAttribute(`href`).slice(1));svg.classList.add(simple[key].status);use=use.cloneNode(0);use.className=simple[key].status;use.setAttribute(`href`,`#`+simple[key].status);if(counts[simple[key].status])++counts[simple[key].status];else counts[simple[key].status]=1;svg.append(use);td.append(svg);tr.append(td);td=td.cloneNode(0);if(simple[key].note)td.append(document.createTextNode(simple[key].note));tr.append(td);body.append(tr)}for(key of legends)key.append(document.createTextNode(` (${counts[key.dataset.count]||0})`))})();