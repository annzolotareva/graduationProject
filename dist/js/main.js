(()=>{"use strict";(()=>{const e=document.querySelector(".modal-callback"),t=document.querySelector(".modal-overlay"),l=document.querySelector(".modal-close"),r=document.querySelectorAll(".services-carousel .fancyboxModal"),o=document.querySelectorAll(".services-carousel .img-wrapper"),c=document.querySelector(".main-wrapper"),a=l=>{l.addEventListener("click",(l=>{l.preventDefault(),e.style.display="none",t.style.display="none"}))};r.forEach((e=>{e.classList.remove("absolute")})),o.forEach((e=>{e.classList.add("absolute")})),c.addEventListener("click",(l=>{l.preventDefault(),(l.target.matches(".services-carousel .img-wrapper")||l.target.matches(".callback-btn")||l.target.classList.contains("button-services"))&&(e.style.display="block",t.style.display="block")})),a(t),a(l)})(),(()=>{const e=document.querySelector('[name="form-callback"]'),t=document.createElement("div"),l=e.querySelectorAll("input"),r=()=>{const r=new FormData(e),o={};var c;t.textContent="Идёт отправка...",e.append(t),r.forEach(((e,t)=>{o[t]=e,""==e&&delete o.fio})),(e=>{let t=!0;return e.forEach((e=>{"tel"==e.name&&/[^\+\d]/g.test(e.value.trim())&&(t=!1),"fio"==e.name&&/[^а-я]/gi.test(e.value.trim())&&(t=!1)})),t})(document.querySelector('[name="form-callback"]').querySelectorAll("input"))?(c=o,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(c),headers:{"Content-Type":"application/json"}}).then((e=>e.json))).then((()=>{t.textContent="Отправлено!",setTimeout((()=>{t.textContent=""}),5e3),l.forEach((e=>{"tel"!=e.name&&"fio"!=e.name||(e.value="")}))})).catch((()=>{t.textContent="Ошибка"})):(alert("Данные не валидны!"),t.textContent="")};try{if(!e)throw new Error("Верните форму на место!");l.forEach((e=>{"tel"==e.name&&e.setAttribute("required",!0)})),e.addEventListener("submit",(e=>{e.preventDefault(),r()}))}catch(e){console.log(e.message)}})(),(()=>{let e=screen.width;const t=document.querySelector(".top-slider"),l=document.querySelectorAll(".item"),r=t.querySelectorAll(".table");let o,c=0;e>=992&&r.forEach((e=>{e.style.opacity=1,e.style.visibility="visible"})),o=setInterval((()=>{l[c].style.display="none",c++,c>=l.length&&(c=0),l[c].style.display="block"}),3e3)})(),(()=>{const e=document.querySelector(".services-carousel"),t=document.querySelector(".services-elements"),l=document.querySelectorAll(".services-arrow"),r=e.querySelectorAll(".col-sm-6");let o=0,c=Math.floor(100/3);e.style.display="flex",t.style.overflow="hidden",r.forEach((e=>{e.style.flex=`0 0 ${c}%`})),l.forEach((t=>{t.addEventListener("click",(t=>{t.preventDefault(),t.target.matches(".arrow-right")?o<r.length-3&&(++o,e.style.transform=`translateX(-${o*c}%)`):t.target.matches(".arrow-left")&&o>0&&(--o,e.style.transform=`translateX(-${o*c}%)`)}))}))})(),(()=>{const e=document.querySelector(".accordeon"),t=e.querySelectorAll(".element"),l=e.querySelectorAll(".element-content");l[0].style.display="none",t[0].classList.remove("active"),t.forEach((e=>{e.addEventListener("click",(()=>{e.classList.contains("active")?e.classList.remove("active"):(t.forEach((e=>{e.classList.remove("active")})),e.classList.add("active")),l.forEach((e=>{e.style.display="none",e.closest(".active")&&(e.style.display="block")}))}))}))})(),(()=>{const e=document.querySelector(".up"),t=document.querySelectorAll(".top-menu ul>li>a");e.style.display="none";const l=e=>{e.addEventListener("click",(t=>{t.preventDefault();const l=e.getAttribute("href"),r=document.querySelector(l);r&&r.scrollIntoView({behavior:"smooth",block:"start"})}))};var r;window.addEventListener("scroll",(t=>{t.target.value=scrollY,t.target.value>520?e.style.display="block":e.style.display="none"})),(r=e).setAttribute("href",".main-wrapper"),l(r),t.forEach((e=>{l(e)}))})()})();