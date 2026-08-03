let risks=JSON.parse(localStorage.getItem('risks')||'[]');
function render(){let b=document.querySelector('#tbl tbody');b.innerHTML='';risks.forEach(r=>{b.innerHTML+=`<tr><td>${r.name}</td><td>${r.i}</td><td>${r.p}</td><td>${r.i*r.p}</td></tr>`});localStorage.setItem('risks',JSON.stringify(risks));}
function addRisk(){let n=prompt('Description du risque'); if(!n)return; let i=+prompt('Impact (1-5)',3); let p=+prompt('Probabilité (1-5)',3); risks.push({name:n,i,p}); render();}
function exportCSV(){let csv='Risque,Impact,Probabilite,Criticite\n'+risks.map(r=>`${r.name},${r.i},${r.p},${r.i*r.p}`).join('\n');let a=document.createElement('a');a.href=URL.createObjectURL(new Blob([csv],{type:'text/csv'}));a.download='risques.csv';a.click();}
render();
