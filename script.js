// script.js - simple interactions: reveal and copy code
(function(){
  document.addEventListener('DOMContentLoaded', ()=>{
    // Reveal sections smoothly
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting) e.target.style.opacity = 1;
      })
    },{threshold:0.08});
    document.querySelectorAll('.section, .hero').forEach(el=>{
      el.style.opacity = 0; el.style.transition = 'opacity 520ms ease-out'; obs.observe(el);
    });

    // Add copy buttons to code blocks
    document.querySelectorAll('pre code').forEach(code=>{
      const btn = document.createElement('button');
      btn.className = 'copy-btn';
      btn.type = 'button';
      btn.textContent = 'Copy';
      btn.addEventListener('click', async ()=>{
        try{
          await navigator.clipboard.writeText(code.innerText);
          btn.textContent = 'Copied';
          setTimeout(()=>btn.textContent = 'Copy',1500);
        }catch(e){
          btn.textContent = 'Error';
          setTimeout(()=>btn.textContent = 'Copy',1500);
        }
      });
      const pre = code.parentElement;
      pre.style.position = 'relative';
      pre.appendChild(btn);
    });
  });
})();
