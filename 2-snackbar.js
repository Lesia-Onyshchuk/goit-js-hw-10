import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{i as t}from"./assets/vendor-BbbuE1sJ.js";const s=document.querySelector(".form");document.querySelector("button");s.addEventListener("submit",n);function n(o){o.preventDefault();const f=o.target.elements.state.value,i=o.target.elements.delay.value;function r(e){return new Promise((l,m)=>{setTimeout(()=>{f==="fulfilled"?(l(`✅ Fulfilled promise in ${e}ms`),t.success({title:"OK",message:`Fulfilled promise in ${e}ms`,position:"topRight",backgroundColor:"#59A10D",messageColor:"#ffffff",messageSize:"16px",titleColor:"#ffffff"})):(m(`❌ Rejected promise in ${e}ms`),t.error({title:"Error",message:`Rejected promise in ${e}ms`,position:"topRight",backgroundColor:"#ef4040",messageColor:"#ffffff",messageSize:"16px",titleColor:"#ffffff"}))},e)})}r(i).then(e=>console.log(e)).catch(e=>console.log(e)),s.reset()}
//# sourceMappingURL=2-snackbar.js.map