(()=>{"use strict";(()=>{const e=document.querySelectorAll(".callback-btn"),t=document.querySelector(".button-services"),l=document.querySelector(".modal-callback"),o=document.querySelector(".modal-overlay"),c=document.querySelector(".modal-close"),r=e=>{e.addEventListener("click",(e=>{e.preventDefault(),l.style.display="block",o.style.display="block"}))},n=e=>{e.addEventListener("click",(e=>{e.preventDefault(),l.style.display="none",o.style.display="none"}))};e.forEach((e=>{r(e)})),r(t),n(o),n(c)})(),(()=>{const e=document.querySelector('[name="form-callback"]'),t=document.createElement("div"),l=e.querySelectorAll("input"),o=()=>{const o=new FormData(e),c={};var r;t.textContent="Идёт отправка...",e.append(t),o.forEach(((e,t)=>{c[t]=e,""==e&&delete c.fio})),(e=>{let t=!0;return e.forEach((e=>{"tel"==e.name&&/[^\+\d]/g.test(e.value.trim())&&(t=!1),"fio"==e.name&&/[^а-я]/gi.test(e.value.trim())&&(t=!1)})),t})(document.querySelector('[name="form-callback"]').querySelectorAll("input"))?(r=c,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"}}).then((e=>e.json))).then((()=>{t.textContent="Отправлено!",setTimeout((()=>{t.textContent=""}),5e3),l.forEach((e=>{"tel"!=e.name&&"fio"!=e.name||(e.value="")}))})).catch((()=>{t.textContent="Ошибка"})):(alert("Данные не валидны!"),t.textContent="")};try{if(!e)throw new Error("Верните форму на место!");l.forEach((e=>{"tel"==e.name&&e.setAttribute("required",!0)})),e.addEventListener("submit",(e=>{e.preventDefault(),o()}))}catch(e){console.log(e.message)}})(),(()=>{let e=screen.width;const t=document.querySelector(".top-slider"),l=document.querySelectorAll(".item"),o=t.querySelectorAll(".table");let c,r=0;e>=992&&o.forEach((e=>{e.style.opacity=1,e.style.visibility="visible"})),c=setInterval((()=>{l[r].style.display="none",r++,r>=l.length&&(r=0),l[r].style.display="block"}),3e3)})(),(()=>{document.querySelector(".services-carousel");const e=document.querySelector(".services-carousel.row"),t=document.querySelectorAll(".img-wrapper:before"),l=document.querySelector(".modal-callback");console.log(t[1]),e.querySelectorAll(".img-wrapper").forEach((e=>{e.addEventListener("click",(()=>{l.style.display="block",console.log("sdfesdfs")}))})),document.querySelector(".services-arrow"),e.querySelectorAll(".element")})(),(()=>{const e=document.querySelector(".accordeon"),t=e.querySelectorAll(".element"),l=e.querySelectorAll(".element-content");l[0].style.display="none",t[0].classList.remove("active"),t.forEach((e=>{e.addEventListener("click",(()=>{e.classList.contains("active")?e.classList.remove("active"):t.forEach((e=>{e.classList.remove("active")})),e.classList.add("active"),l.forEach((e=>{e.style.display="none",e.closest(".active")&&(e.style.display="block")}))}))}))})(),(()=>{const e=document.querySelector(".up"),t=document.querySelectorAll(".top-menu ul > li a");e.style.display="none";const l=e=>{e.addEventListener("click",(t=>{t.preventDefault();const l=e.getAttribute("href"),o=document.querySelector(l);o&&o.scrollIntoView({behavior:"smooth",block:"start"})}))};var o;window.addEventListener("scroll",(t=>{t.target.value=scrollY,t.target.value>520?e.style.display="block":e.style.display="none"})),(o=e).setAttribute("href",".main-wrapper"),l(o),t.forEach((e=>{l(e)}))})()})();