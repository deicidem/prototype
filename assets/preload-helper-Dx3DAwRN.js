const h="modulepreload",p=function(c){return"https://deicidem.github.io/prototype/"+c},a={},v=function(u,s,E){let i=Promise.resolve();if(s&&s.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),e=r?.nonce||r?.getAttribute("nonce");i=Promise.allSettled(s.map(t=>{if(t=p(t),t in a)return;a[t]=!0;const o=t.endsWith(".css"),d=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${d}`))return;const n=document.createElement("link");if(n.rel=o?"stylesheet":h,o||(n.as="script"),n.crossOrigin="",n.href=t,e&&n.setAttribute("nonce",e),document.head.appendChild(n),o)return new Promise((m,f)=>{n.addEventListener("load",m),n.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${t}`)))})}))}function l(r){const e=new Event("vite:preloadError",{cancelable:!0});if(e.payload=r,window.dispatchEvent(e),!e.defaultPrevented)throw r}return i.then(r=>{for(const e of r||[])e.status==="rejected"&&l(e.reason);return u().catch(l)})};export{v as _};
