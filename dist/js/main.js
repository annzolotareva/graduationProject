(()=>{"use strict";(()=>{const e=document.querySelector(".up"),t=document.querySelector(".modal-callback"),l=document.querySelector(".modal-overlay"),o=document.querySelector(".modal-close"),r=document.querySelectorAll(".services-carousel .fancyboxModal"),a=document.querySelectorAll(".services-carousel .img-wrapper"),c=document.querySelector(".main-wrapper"),s=document.querySelector('[name="form-callback"]').querySelectorAll("input"),n=o=>{o.addEventListener("click",(o=>{o.preventDefault(),t.style.display="none",l.style.display="none",document.body.style.overflow="",window.pageYOffset>520&&(e.style.display="block"),s.forEach((e=>{"tel"!=e.name&&"fio"!=e.name||(e.value="")}))}))};r.forEach((e=>{e.classList.remove("absolute")})),a.forEach((e=>{e.classList.add("absolute")})),c.addEventListener("click",(o=>{o.preventDefault(),(o.target.matches(".services-carousel .img-wrapper")||o.target.matches(".callback-btn")||o.target.classList.contains("button-services"))&&((({timing:e,draw:t,duration:l})=>{let o=performance.now();requestAnimationFrame((function r(a){let c=(a-o)/l;c>1&&(c=1);let s=e(c);t(s),c<1&&requestAnimationFrame(r)}))})({duration:500,timing:e=>e,draw(e){t.style.opacity=e,l.style.opacity=e}}),t.style.display="block",l.style.display="block",document.body.style.overflow="hidden",(e.style.display="block")&&(e.style.display="none"))})),n(l),n(o)})(),(()=>{const e=document.querySelector(".up"),t=document.querySelector(".modal-callback"),l=document.querySelector(".modal-overlay"),o=document.querySelector('[name="form-callback"]'),r=document.createElement("div"),a=o.querySelectorAll("input"),c=()=>{const c=new FormData(o),s={};var n;r.textContent="Идёт отправка...",o.append(r),c.forEach(((e,t)=>{s[t]=e,""==e&&delete s.fio})),(e=>{let t=!0;return e.forEach((e=>{"tel"==e.name&&/[^\+\d]/g.test(e.value.trim())&&(t=!1),"fio"==e.name&&/[^а-я]/gi.test(e.value.trim())&&(t=!1)})),t})(document.querySelector('[name="form-callback"]').querySelectorAll("input"))?(n=s,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}).then((e=>e.json))).then((()=>{r.textContent="Отправлено!",setTimeout((()=>{t.style.display="none",l.style.display="none",r.textContent="",document.body.style.overflow="",window.pageYOffset>520&&(e.style.display="block")}),3e3),a.forEach((e=>{"tel"!=e.name&&"fio"!=e.name||(e.value="")}))})).catch((()=>{r.textContent="Ошибка"})):(alert("Данные не валидны!"),r.textContent="")};try{if(!o)throw new Error("Верните форму на место!");a.forEach((e=>{"tel"==e.name&&e.setAttribute("required",!0)})),o.addEventListener("submit",(e=>{e.preventDefault(),c()}))}catch(e){console.log(e.message)}})(),(()=>{let e=screen.width;const t=document.querySelector(".top-slider"),l=document.querySelectorAll(".item"),o=t.querySelectorAll(".table");let r,a=0;e>=992&&o.forEach((e=>{e.style.opacity=1,e.style.visibility="visible"})),r=setInterval((()=>{l[a].style.display="none",a++,a>=l.length&&(a=0),l[a].style.display="block"}),3e3)})(),(()=>{const e=document.querySelector(".services-carousel"),t=document.querySelector(".services-elements"),l=document.querySelectorAll(".services-arrow"),o=e.querySelectorAll(".col-sm-6");let r=0,a=Math.floor(100/3);e.style.display="flex",t.style.overflow="hidden",o.forEach((e=>{e.style.flex=`0 0 ${a}%`})),l.forEach((t=>{t.addEventListener("click",(t=>{t.preventDefault(),t.target.matches(".arrow-right")?r<o.length-3&&(++r,e.style.transform=`translateX(-${r*a}%)`):t.target.matches(".arrow-left")&&r>0&&(--r,e.style.transform=`translateX(-${r*a}%)`)}))}))})(),(()=>{const e=document.querySelector(".accordeon"),t=e.querySelectorAll(".element"),l=e.querySelectorAll(".element-content");l[0].style.display="none",t[0].classList.remove("active"),t.forEach((e=>{e.addEventListener("click",(()=>{e.classList.contains("active")?e.classList.remove("active"):(t.forEach((e=>{e.classList.remove("active")})),e.classList.add("active")),l.forEach((e=>{e.style.display="none",e.closest(".active")&&(e.style.display="block")}))}))}))})(),(()=>{const e=document.querySelector(".up"),t=document.querySelectorAll(".top-menu ul>li>a"),l=e=>{e.addEventListener("click",(t=>{t.preventDefault();const l=e.getAttribute("href"),o=document.querySelector(l);o&&o.scrollIntoView({behavior:"smooth",block:"start"})}))};var o;e.style.display="none",window.addEventListener("scroll",(t=>{t.target.value=scrollY,t.target.value>520?e.style.display="block":e.style.display="none"})),(o=e).setAttribute("href",".main-wrapper"),l(o),t.forEach((e=>{l(e)}))})()})();