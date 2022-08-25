(()=>{"use strict";const e=["input","textarea"],t=e=>document.activeElement.tagName.toLowerCase()===e;window.pinegladePP={breakpoints:[1400],ext:"webp"},document.addEventListener("keydown",(s=>{"e"!==s.key.toLowerCase()||e.some(t)||(document.querySelectorAll("h1, h2, h3, p, b, a, button, label, legend, blockquote, cite").forEach((e=>{e.spellcheck=!1})),document.body.contentEditable="true"!==document.body.contentEditable)})),(()=>{if(!window)return;const e=[320,768,1240],t="pixelperfect",s="jpg",i={ArrowUp:[0,-1],ArrowDown:[0,1],ArrowLeft:[-1,0],ArrowRight:[1,0]},o=(e,t)=>e-t;document.head.insertAdjacentHTML("beforeend",'<style>.pineglade-pp{position:relative;overflow-x:hidden;overflow-y:auto}.pineglade-pp::after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:1000000;background-image:var(--pp-img);background-repeat:no-repeat;background-position:calc(50% + var(--pp-offset-x)) var(--pp-offset-y);opacity:.5;filter:var(--pp-filter);pointer-events:none}</style>'),new class{constructor(){const{page:i=null,breakpoints:n=null,folder:r=t,ext:a=s,selector:p="body"}=window.pinegladePP||{};if(this._isPP=Boolean(Number(localStorage.getItem("pp")||0)),this._isInvert=Boolean(Number(localStorage.getItem("ppInvert")||1)),this._breakpoints=n?Array.from(new Set(n)).sort(o):e,this._currentBreakpoint=0,this._folder=r,this._ext=a,this._PPElement=document.querySelector(p),i)this._page=i;else{const[,e=null]=window.location.pathname.match(/^\/?(.*?)(\.html?)?$/)||[];this._page=e||"index"}if(this._offsets=JSON.parse(localStorage.getItem("ppOffsets"))||{},!this._offsets[this._page]){this._offsets[this._page]={};for(const e of this._breakpoints)this._offsets[this._page][e]=[0,0];this._saveOffsets()}this._keydownHandler=this._keydownHandler.bind(this),this._changeScreenMode=this._changeScreenMode.bind(this),this._changeScreenMode(),this._setOffsets(),this._managePP(),this._manageInvert(),window.addEventListener("resize",this._changeScreenMode),document.addEventListener("keydown",this._keydownHandler)}_changeScreenMode(){const{clientWidth:e}=this._PPElement;let t=0;for(const s of this._breakpoints)e<s||(t=s);this._currentBreakpoint!==t&&(this._currentBreakpoint=t,this._setBgProperty(this._currentBreakpoint),this._setOffsets())}_keydownHandler(e){if(document.activeElement===document.body&&!(e=>e.ctrlKey||e.shiftKey||e.altKey||e.metaKey)(e))if("KeyP"===e.code)e.preventDefault(),this._isPP=!this._isPP,this._managePP();else if(this._isPP&&"KeyI"===e.code)e.preventDefault(),this._isInvert=!this._isInvert,this._manageInvert();else if(this._isPP&&"KeyR"===e.code)e.preventDefault(),localStorage.removeItem("ppOffsets"),window.location.reload();else if(this._isPP){const t=i[e.code];if(!t)return;e.preventDefault(),this._movePP(...t)}}_managePP(){this._PPElement.classList.toggle("pineglade-pp",this._isPP),localStorage.setItem("pp",Number(this._isPP))}_manageInvert(){this._PPElement.style.setProperty("--pp-filter",this._isInvert?"invert(1)":"none"),localStorage.setItem("ppInvert",Number(this._isInvert))}_movePP(e,t){this._offsets[this._page][this._currentBreakpoint][0]+=e,this._offsets[this._page][this._currentBreakpoint][1]+=t,this._saveOffsets(),this._setOffsets()}_saveOffsets(){localStorage.setItem("ppOffsets",JSON.stringify(this._offsets))}_setBgProperty(e=0){const t=e?`url("${this._folder}/${this._page}-${e}.${this._ext}")`:"none";this._PPElement.style.setProperty("--pp-img",t)}_setOffsets(){const[e=0,t=0]=this._offsets[this._page][this._currentBreakpoint]||[];this._PPElement.style.setProperty("--pp-offset-x",`${e}px`),this._PPElement.style.setProperty("--pp-offset-y",`${t}px`)}}})()})();