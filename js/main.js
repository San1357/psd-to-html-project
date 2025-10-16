// simple zip button action
document.querySelectorAll('.btn-press').forEach(btn=>{
  btn.addEventListener('click', ()=> {
    const ip = document.querySelector('.zip-input').value.trim();
    if(!ip) return alert('Please enter your zip code');
    alert('Thanks! You entered: ' + ip);
  });
});

// smooth scroll for download button (if link present)
document.querySelectorAll('.btn-outline').forEach(b=>{
  b.addEventListener('click',(e)=>{
    e.preventDefault();
    // scroll to contact section
    document.querySelector('.map-contact').scrollIntoView({behavior:'smooth'});
  });
});

.btn-press, .btn-outline, .circle-check{
  transition:transform .18s ease, box-shadow .18s ease, opacity .18s ease;
}
.btn-press:hover{transform:translateY(-3px)}
.btn-outline:hover{transform:translateY(-3px);box-shadow:0 8px 20px rgba(0,0,0,0.08)}
.contact-circle{transition:transform .5s cubic-bezier(.2,.9,.3,1)}
.contact-circle:hover{transform:translate(-50%,-42%) scale(1.02)} /* subtle lift */
