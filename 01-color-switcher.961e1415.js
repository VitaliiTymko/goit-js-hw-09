!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),o=document.querySelector("body"),r=null;t.addEventListener("click",(function(){t.setAttribute("disabled",!0),e.removeAttribute("disabled"),r=setInterval((function(){o.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),console.log("color ${getRandomHexColor}")})),e.addEventListener("click",(function(){t.removeAttribute("disabled"),e.setAttribute("disabled",!0),clearInterval(r)}))}();
//# sourceMappingURL=01-color-switcher.961e1415.js.map
