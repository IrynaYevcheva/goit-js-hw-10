import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{i as c,f as h}from"./assets/vendor-651d7991.js";const p=document.querySelector("#datetime-picker"),e=document.querySelector("button[data-start]"),y=document.querySelector("span[data-days]"),S=document.querySelector("span[data-hours]"),g=document.querySelector("span[data-minutes]"),C=document.querySelector("span[data-seconds]");let u,d;e.disabled=!0;c.settings({timeout:2e3,resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",progressBar:!1,title:"Error",titleColor:"white",message:"Please choose a date in the future",position:"topRight",messageColor:"white",backgroundColor:"red"});const b={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){q(t)}};h(p,b);function q(t){u=t[0].getTime(),t[0]<=Date.now()?(e.disabled=!0,c.show()):(e.disabled=!1,e.addEventListener("click",()=>{e.disabled=!0,d=setInterval(()=>{const n=u-Date.now();if(n<=0){clearInterval(d);return}let{days:a,hours:s,minutes:i,seconds:r}=w(n);y.textContent=o(a),S.textContent=o(s),g.textContent=o(i),C.textContent=o(r)},1e3)}))}function w(t){let r=Math.floor(t/864e5),l=Math.floor(t%864e5/36e5),m=Math.floor(t%864e5%36e5/6e4),f=Math.floor(t%864e5%36e5%6e4/1e3);return{days:r,hours:l,minutes:m,seconds:f}}function o(t){return t.toString().padStart(2,"0")}
//# sourceMappingURL=commonHelpers.js.map