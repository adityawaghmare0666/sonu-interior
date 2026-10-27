'use strict';
// All enquiries are prepared in the visitor's browser; no data is stored here.
const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#primary-nav');
function closeMenu(){menu?.classList.remove('open');menuButton?.setAttribute('aria-expanded','false');menuButton?.setAttribute('aria-label','Open menu');}
menuButton?.addEventListener('click',()=>{
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded',String(open));
  menuButton.setAttribute('aria-label',open?'Close menu':'Open menu');
  menu.classList.toggle('open',open);
});
document.addEventListener('keydown',event=>{if(event.key==='Escape'){closeMenu();}});
menu?.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('click',event=>{if(!event.target.closest('.header'))closeMenu();});
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());

const galleryLinks = [...document.querySelectorAll('[data-gallery]')];
if(galleryLinks.length && typeof HTMLDialogElement !== 'undefined'){
  const box=document.createElement('dialog');
  box.className='lightbox';box.setAttribute('aria-labelledby','lightbox-title');
  box.innerHTML='<img alt=""><div class="lightbox-bottom"><div><h2 id="lightbox-title"></h2><p>AI-generated design inspiration · not a completed project</p></div><button type="button" class="lightbox-close" aria-label="Close image">×</button></div>';
  document.body.append(box);
  const close=()=>box.close();
  box.querySelector('button').addEventListener('click',close);
  box.addEventListener('click',event=>{if(event.target===box){const r=box.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)close();}});
  galleryLinks.forEach(link=>link.addEventListener('click',event=>{
    event.preventDefault();box.querySelector('img').src=link.href;
    box.querySelector('img').alt=link.querySelector('img').alt;
    box.querySelector('h2').textContent=link.dataset.title;box.showModal();
  }));
}

document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
  document.querySelectorAll('[data-filter]').forEach(el=>{el.classList.toggle('active',el===button);el.setAttribute('aria-pressed',String(el===button));});
  let shown=0;
  document.querySelectorAll('[data-category]').forEach(card=>{card.hidden=button.dataset.filter!=='all'&&card.dataset.category!==button.dataset.filter;if(!card.hidden)shown++;});
  const status=document.querySelector('#filter-status');if(status)status.textContent=`Showing ${shown} design ${shown===1?'concept':'concepts'}.`;
}));

const dateInput=document.querySelector('#preferred-date');
if(dateInput){const now=new Date();const today=[now.getFullYear(),String(now.getMonth()+1).padStart(2,'0'),String(now.getDate()).padStart(2,'0')].join('-');dateInput.min=today;}
function buildAppointmentMessage(values){
  const lines=['Hello SONU Interior Home Designer, I would like to request a consultation.','',`Name: ${values.name.trim()}`,`Interested in: ${values.project}`,`Project location: ${values.location.trim()}`,`Approximate budget: ${values.budget}`];
  if(values.date)lines.push(`Preferred date: ${values.date} (subject to availability)`);
  if(values.message.trim())lines.push('',`More details: ${values.message.trim()}`);
  lines.push('','Please let me know a suitable time to discuss my space.');return lines.join('\n');
}
const form=document.querySelector('#appointment-form');
form?.addEventListener('submit',event=>{
  event.preventDefault();if(!form.reportValidity())return;
  const values=Object.fromEntries(new FormData(form));
  if(!values.name.trim()||!values.location.trim()){
    document.querySelector('#form-status').textContent='Please enter your name and project location.';return;
  }
  const url='https://wa.me/919119573539?text='+encodeURIComponent(buildAppointmentMessage(values));
  // Navigate directly after a user action so pop-up blockers cannot lose the enquiry.
  document.querySelector('#form-status').textContent='Opening WhatsApp. Review and send your message there to request your appointment.';
  window.location.assign(url);
});
