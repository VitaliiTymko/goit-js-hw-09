const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),r=document.querySelector("body");let d=null;e.addEventListener("click",(()=>{e.setAttribute("disabled",!0),t.removeAttribute("disabled"),d=setInterval((()=>{r.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),t.addEventListener("click",(()=>{e.removeAttribute("disabled"),t.setAttribute("disabled",!0),clearInterval(d)}));
//# sourceMappingURL=01-color-switcher.2c6f9021.js.map
