!function(){var t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]"),body:document.querySelector("body")},n=0;function o(n){t.startBtn.disabled=n}function e(){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}t.startBtn.addEventListener("click",(function(r){(function(){if(t.body.style.transition)return;t.body.style.transition="background-color 1s ease-in-out"})(),e(),o(!0),n=setInterval(e,1e3)})),t.stopBtn.addEventListener("click",(function(){o(!1),clearInterval(n)}))}();
//# sourceMappingURL=01-color-switcher.6e409b9c.js.map
