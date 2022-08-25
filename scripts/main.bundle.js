(()=>{"use strict";function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function c(t){return"function"==typeof t}function i(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function s(t){return 0===Object.keys(t).length}function l(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}function u(t,n,e){t.$$.on_destroy.push(l(n,e))}function a(t,n,e,o){if(t){const r=f(t,n,e,o);return t[0](r)}}function f(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function d(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}function p(t,n,e,o,r,c){if(r){const i=f(n,e,o,c);t.p(i,r)}}function $(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let t=0;t<e;t++)n[t]=-1;return n}return-1}function h(t){const n={};for(const e in t)"$"!==e[0]&&(n[e]=t[e]);return n}new Set;let m=!1;function g(t,n,e,o){for(;t<n;){const r=t+(n-t>>1);e(r)<=o?t=r+1:n=r}return t}function _(t,n){if(m){for(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let e=0;e<n.length;e++){const o=n[e];void 0!==o.claim_order&&t.push(o)}n=t}const e=new Int32Array(n.length+1),o=new Int32Array(n.length);e[0]=-1;let r=0;for(let t=0;t<n.length;t++){const c=n[t].claim_order,i=(r>0&&n[e[r]].claim_order<=c?r+1:g(1,r,(t=>n[e[t]].claim_order),c))-1;o[t]=e[i]+1;const s=i+1;e[s]=t,r=Math.max(s,r)}const c=[],i=[];let s=n.length-1;for(let t=e[r]+1;0!=t;t=o[t-1]){for(c.push(n[t-1]);s>=t;s--)i.push(n[s]);s--}for(;s>=0;s--)i.push(n[s]);c.reverse(),i.sort(((t,n)=>t.claim_order-n.claim_order));for(let n=0,e=0;n<i.length;n++){for(;e<c.length&&i[n].claim_order>=c[e].claim_order;)e++;const o=e<c.length?c[e]:null;t.insertBefore(i[n],o)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?void 0===n.claim_order&&n.parentNode===t||t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else n.parentNode===t&&null===n.nextSibling||t.appendChild(n)}function y(t,n,e){m&&!e?_(t,n):n.parentNode===t&&n.nextSibling==e||t.insertBefore(n,e||null)}function b(t){t.parentNode.removeChild(t)}function x(t){return document.createElement(t)}function w(t){return document.createTextNode(t)}function v(){return w(" ")}function E(){return w("")}function k(t){return Array.from(t.childNodes)}function S(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}function N(t,n,e,o,r=!1){S(t);const c=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const c=t[o];if(n(c)){const n=e(c);return void 0===n?t.splice(o,1):t[o]=n,r||(t.claim_info.last_index=o),c}}for(let o=t.claim_info.last_index-1;o>=0;o--){const c=t[o];if(n(c)){const n=e(c);return void 0===n?t.splice(o,1):t[o]=n,r?void 0===n&&t.claim_info.last_index--:t.claim_info.last_index=o,c}}return o()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function A(t,n,e,o){return N(t,(t=>t.nodeName===n),(t=>{const n=[];for(let o=0;o<t.attributes.length;o++){const r=t.attributes[o];e[r.name]||n.push(r.name)}n.forEach((n=>t.removeAttribute(n)))}),(()=>o(n)))}function C(t,n,e){return A(t,n,e,x)}function R(t){return function(t,n){return N(t,(t=>3===t.nodeType),(t=>{const e=""+n;if(t.data.startsWith(e)){if(t.data.length!==e.length)return t.splitText(e.length)}else t.data=e}),(()=>w(n)),!0)}(t," ")}new Map;let O;function j(t){O=t}function M(){if(!O)throw new Error("Function called outside component initialization");return O}function T(t,n){return M().$$.context.set(t,n),n}function B(t){return M().$$.context.get(t)}const L=[],H=[],I=[],P=[],q=Promise.resolve();let z=!1;function D(){z||(z=!0,q.then(G))}function U(t){I.push(t)}const F=new Set;let W=0;function G(){const t=O;do{for(;W<L.length;){const t=L[W];W++,j(t),J(t.$$)}for(j(null),L.length=0,W=0;H.length;)H.pop()();for(let t=0;t<I.length;t+=1){const n=I[t];F.has(n)||(F.add(n),n())}I.length=0}while(L.length);for(;P.length;)P.pop()();z=!1,F.clear(),j(t)}function J(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(U)}}const K=new Set;let Q;function V(){Q={r:0,c:[],p:Q}}function X(){Q.r||r(Q.c),Q=Q.p}function Y(t,n){t&&t.i&&(K.delete(t),t.i(n))}function Z(t,n,e,o){if(t&&t.o){if(K.has(t))return;K.add(t),Q.c.push((()=>{K.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}else o&&o()}"undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function tt(t){return"object"==typeof t&&null!==t?t:{}}new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]);let nt;function et(t){t&&t.c()}function ot(t,n){t&&t.l(n)}function rt(t,n,o,i){const{fragment:s,on_mount:l,on_destroy:u,after_update:a}=t.$$;s&&s.m(n,o),i||U((()=>{const n=l.map(e).filter(c);u?u.push(...n):r(n),t.$$.on_mount=[]})),a.forEach(U)}function ct(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function it(n,e,c,i,s,l,u,a=[-1]){const f=O;j(n);const d=n.$$={fragment:null,ctx:null,props:l,update:t,not_equal:s,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(f?f.$$.context:[])),callbacks:o(),dirty:a,skip_bound:!1,root:e.target||f.$$.root};u&&u(d.root);let p=!1;if(d.ctx=c?c(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return d.ctx&&s(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),p&&function(t,n){-1===t.$$.dirty[0]&&(L.push(t),D(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}(n,t)),e})):[],d.update(),p=!0,r(d.before_update),d.fragment=!!i&&i(d.ctx),e.target){if(e.hydrate){m=!0;const t=k(e.target);d.fragment&&d.fragment.l(t),t.forEach(b)}else d.fragment&&d.fragment.c();e.intro&&Y(n.$$.fragment),rt(n,e.target,e.anchor,e.customElement),m=!1,G()}j(f)}"function"==typeof HTMLElement&&(nt=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(e).filter(c);for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,n,e){this[t]=e}disconnectedCallback(){r(this.$$.on_disconnect)}$destroy(){ct(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){this.$$set&&!s(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});class st{$destroy(){ct(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){this.$$set&&!s(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const lt=[];function ut(n,e=t){let o;const r=new Set;function c(t){if(i(n,t)&&(n=t,o)){const t=!lt.length;for(const t of r)t[1](),lt.push(t,n);if(t){for(let t=0;t<lt.length;t+=2)lt[t][0](lt[t+1]);lt.length=0}}}return{set:c,update:function(t){c(t(n))},subscribe:function(i,s=t){const l=[i,s];return r.add(l),1===r.size&&(o=e(c)||t),i(n),()=>{r.delete(l),0===r.size&&(o(),o=null)}}}}function at(n,e,o){const i=!Array.isArray(n),s=i?[n]:n,u=e.length<2;return a=n=>{let o=!1;const a=[];let f=0,d=t;const p=()=>{if(f)return;d();const o=e(i?a[0]:a,n);u?n(o):d=c(o)?o:t},$=s.map(((t,n)=>l(t,(t=>{a[n]=t,f&=~(1<<n),o&&p()}),(()=>{f|=1<<n}))));return o=!0,p(),function(){r($),d()}},{subscribe:ut(o,a).subscribe};var a}const ft={},dt={};function pt(t){return{...t.location,state:t.history.state,key:t.history.state&&t.history.state.key||"initial"}}const $t=function(t,n){const e=[];let o=pt(t);return{get location(){return o},listen(n){e.push(n);const r=()=>{o=pt(t),n({location:o,action:"POP"})};return t.addEventListener("popstate",r),()=>{t.removeEventListener("popstate",r);const o=e.indexOf(n);e.splice(o,1)}},navigate(n,{state:r,replace:c=!1}={}){r={...r,key:Date.now()+""};try{c?t.history.replaceState(r,null,n):t.history.pushState(r,null,n)}catch(e){t.location[c?"replace":"assign"](n)}o=pt(t),e.forEach((t=>t({location:o,action:"PUSH"})))}}}(Boolean("undefined"!=typeof window&&window.document&&window.document.createElement)?window:function(t="/"){let n=0;const e=[{pathname:t,search:""}],o=[];return{get location(){return e[n]},addEventListener(t,n){},removeEventListener(t,n){},history:{get entries(){return e},get index(){return n},get state(){return o[n]},pushState(t,r,c){const[i,s=""]=c.split("?");n++,e.push({pathname:i,search:s}),o.push(t)},replaceState(t,r,c){const[i,s=""]=c.split("?");e[n]={pathname:i,search:s},o[n]=t}}}}()),{navigate:ht}=$t,mt=/^:(.+)/;function gt(t){return"*"===t[0]}function _t(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function yt(t){return t.replace(/(^\/+|\/+$)/g,"")}function bt(t,n){return{route:t,score:t.default?0:_t(t.path).reduce(((t,n)=>(t+=4,!function(t){return""===t}(n)?!function(t){return mt.test(t)}(n)?gt(n)?t-=5:t+=3:t+=2:t+=1,t)),0),index:n}}function xt(t,n){let e,o;const[r]=n.split("?"),c=_t(r),i=""===c[0],s=function(t){return t.map(bt).sort(((t,n)=>t.score<n.score?1:t.score>n.score?-1:t.index-n.index))}(t);for(let t=0,r=s.length;t<r;t++){const r=s[t].route;let l=!1;if(r.default){o={route:r,params:{},uri:n};continue}const u=_t(r.path),a={},f=Math.max(c.length,u.length);let d=0;for(;d<f;d++){const t=u[d],n=c[d];if(void 0!==t&&gt(t)){a["*"===t?"*":t.slice(1)]=c.slice(d).map(decodeURIComponent).join("/");break}if(void 0===n){l=!0;break}let e=mt.exec(t);if(e&&!i){const t=decodeURIComponent(n);a[e[1]]=t}else if(t!==n){l=!0;break}}if(!l){e={route:r,params:a,uri:"/"+c.slice(0,d).join("/")};break}}return e||o||null}function wt(t,n){return`${yt("/"===n?t:`${yt(t)}/${yt(n)}`)}/`}function vt(t){let n;const e=t[9].default,o=a(e,t,t[8],null);return{c(){o&&o.c()},l(t){o&&o.l(t)},m(t,e){o&&o.m(t,e),n=!0},p(t,[r]){o&&o.p&&(!n||256&r)&&p(o,e,t,t[8],n?d(e,t[8],r,null):$(t[8]),null)},i(t){n||(Y(o,t),n=!0)},o(t){Z(o,t),n=!1},d(t){o&&o.d(t)}}}function Et(t,n,e){let o,r,c,{$$slots:i={},$$scope:s}=n,{basepath:l="/"}=n,{url:a=null}=n;const f=B(ft),d=B(dt),p=ut([]);u(t,p,(t=>e(6,r=t)));const $=ut(null);let h=!1;const m=f||ut(a?{pathname:a}:$t.location);u(t,m,(t=>e(5,o=t)));const g=d?d.routerBase:ut({path:l,uri:l});u(t,g,(t=>e(7,c=t)));const _=at([g,$],(([t,n])=>{if(null===n)return t;const{path:e}=t,{route:o,uri:r}=n;return{path:o.default?e:o.path.replace(/\*.*$/,""),uri:r}}));var y;return f||(y=()=>$t.listen((t=>{m.set(t.location)})),M().$$.on_mount.push(y),T(ft,m)),T(dt,{activeRoute:$,base:g,routerBase:_,registerRoute:function(t){const{path:n}=c;let{path:e}=t;if(t._path=e,t.path=wt(n,e),"undefined"==typeof window){if(h)return;const n=function(t,n){return xt([t],n)}(t,o.pathname);n&&($.set(n),h=!0)}else p.update((n=>(n.push(t),n)))},unregisterRoute:function(t){p.update((n=>{const e=n.indexOf(t);return n.splice(e,1),n}))}}),t.$$set=t=>{"basepath"in t&&e(3,l=t.basepath),"url"in t&&e(4,a=t.url),"$$scope"in t&&e(8,s=t.$$scope)},t.$$.update=()=>{if(128&t.$$.dirty){const{path:t}=c;p.update((n=>(n.forEach((n=>n.path=wt(t,n._path))),n)))}if(96&t.$$.dirty){const t=xt(r,o.pathname);$.set(t)}},[p,m,g,l,a,o,r,c,s,i]}const kt=class extends st{constructor(t){super(),it(this,t,Et,vt,i,{basepath:3,url:4})}},St=t=>({params:4&t,location:16&t}),Nt=t=>({params:t[2],location:t[4]});function At(t){let n,e,o,r;const c=[Rt,Ct],i=[];function s(t,n){return null!==t[0]?0:1}return n=s(t),e=i[n]=c[n](t),{c(){e.c(),o=E()},l(t){e.l(t),o=E()},m(t,e){i[n].m(t,e),y(t,o,e),r=!0},p(t,r){let l=n;n=s(t),n===l?i[n].p(t,r):(V(),Z(i[l],1,1,(()=>{i[l]=null})),X(),e=i[n],e?e.p(t,r):(e=i[n]=c[n](t),e.c()),Y(e,1),e.m(o.parentNode,o))},i(t){r||(Y(e),r=!0)},o(t){Z(e),r=!1},d(t){i[n].d(t),t&&b(o)}}}function Ct(t){let n;const e=t[10].default,o=a(e,t,t[9],Nt);return{c(){o&&o.c()},l(t){o&&o.l(t)},m(t,e){o&&o.m(t,e),n=!0},p(t,r){o&&o.p&&(!n||532&r)&&p(o,e,t,t[9],n?d(e,t[9],r,St):$(t[9]),Nt)},i(t){n||(Y(o,t),n=!0)},o(t){Z(o,t),n=!1},d(t){o&&o.d(t)}}}function Rt(t){let e,o,r;const c=[{location:t[4]},t[2],t[3]];var i=t[0];function s(t){let e={};for(let t=0;t<c.length;t+=1)e=n(e,c[t]);return{props:e}}return i&&(e=new i(s())),{c(){e&&et(e.$$.fragment),o=E()},l(t){e&&ot(e.$$.fragment,t),o=E()},m(t,n){e&&rt(e,t,n),y(t,o,n),r=!0},p(t,n){const r=28&n?function(t,n){const e={},o={},r={$$scope:1};let c=t.length;for(;c--;){const i=t[c],s=n[c];if(s){for(const t in i)t in s||(o[t]=1);for(const t in s)r[t]||(e[t]=s[t],r[t]=1);t[c]=s}else for(const t in i)r[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}(c,[16&n&&{location:t[4]},4&n&&tt(t[2]),8&n&&tt(t[3])]):{};if(i!==(i=t[0])){if(e){V();const t=e;Z(t.$$.fragment,1,0,(()=>{ct(t,1)})),X()}i?(e=new i(s()),et(e.$$.fragment),Y(e.$$.fragment,1),rt(e,o.parentNode,o)):e=null}else i&&e.$set(r)},i(t){r||(e&&Y(e.$$.fragment,t),r=!0)},o(t){e&&Z(e.$$.fragment,t),r=!1},d(t){t&&b(o),e&&ct(e,t)}}}function Ot(t){let n,e,o=null!==t[1]&&t[1].route===t[7]&&At(t);return{c(){o&&o.c(),n=E()},l(t){o&&o.l(t),n=E()},m(t,r){o&&o.m(t,r),y(t,n,r),e=!0},p(t,[e]){null!==t[1]&&t[1].route===t[7]?o?(o.p(t,e),2&e&&Y(o,1)):(o=At(t),o.c(),Y(o,1),o.m(n.parentNode,n)):o&&(V(),Z(o,1,1,(()=>{o=null})),X())},i(t){e||(Y(o),e=!0)},o(t){Z(o),e=!1},d(t){o&&o.d(t),t&&b(n)}}}function jt(t,e,o){let r,c,{$$slots:i={},$$scope:s}=e,{path:l=""}=e,{component:a=null}=e;const{registerRoute:f,unregisterRoute:d,activeRoute:p}=B(dt);u(t,p,(t=>o(1,r=t)));const $=B(ft);u(t,$,(t=>o(4,c=t)));const m={path:l,default:""===l};let g={},_={};var y;return f(m),"undefined"!=typeof window&&(y=()=>{d(m)},M().$$.on_destroy.push(y)),t.$$set=t=>{o(13,e=n(n({},e),h(t))),"path"in t&&o(8,l=t.path),"component"in t&&o(0,a=t.component),"$$scope"in t&&o(9,s=t.$$scope)},t.$$.update=()=>{2&t.$$.dirty&&r&&r.route===m&&o(2,g=r.params);{const{path:t,component:n,...r}=e;o(3,_=r)}},e=h(e),[a,r,g,_,c,p,$,m,l,s,i]}const Mt=class extends st{constructor(t){super(),it(this,t,jt,Ot,i,{path:8,component:0})}};const Tt=class extends st{constructor(t){super(),it(this,t,null,null,i,{})}};const Bt=class extends st{constructor(t){super(),it(this,t,null,null,i,{})}};function Lt(t){let n,e;return n=new Tt({}),{c(){et(n.$$.fragment)},l(t){ot(n.$$.fragment,t)},m(t,o){rt(n,t,o),e=!0},i(t){e||(Y(n.$$.fragment,t),e=!0)},o(t){Z(n.$$.fragment,t),e=!1},d(t){ct(n,t)}}}function Ht(t){let n,e;return n=new Bt({}),{c(){et(n.$$.fragment)},l(t){ot(n.$$.fragment,t)},m(t,o){rt(n,t,o),e=!0},i(t){e||(Y(n.$$.fragment,t),e=!0)},o(t){Z(n.$$.fragment,t),e=!1},d(t){ct(n,t)}}}function It(t){let n,e,o,r,c;return e=new Mt({props:{path:"/",$$slots:{default:[Lt]},$$scope:{ctx:t}}}),r=new Mt({props:{path:"*",$$slots:{default:[Ht]},$$scope:{ctx:t}}}),{c(){n=x("main"),et(e.$$.fragment),o=v(),et(r.$$.fragment)},l(t){n=C(t,"MAIN",{});var c=k(n);ot(e.$$.fragment,c),o=R(c),ot(r.$$.fragment,c),c.forEach(b)},m(t,i){y(t,n,i),rt(e,n,null),_(n,o),rt(r,n,null),c=!0},p(t,n){const o={};2&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o);const c={};2&n&&(c.$$scope={dirty:n,ctx:t}),r.$set(c)},i(t){c||(Y(e.$$.fragment,t),Y(r.$$.fragment,t),c=!0)},o(t){Z(e.$$.fragment,t),Z(r.$$.fragment,t),c=!1},d(t){t&&b(n),ct(e),ct(r)}}}function Pt(t){let n,e,o,r,c,i,s;return r=new kt({props:{url:t[0],$$slots:{default:[It]},$$scope:{ctx:t}}}),{c(){n=v(),e=x("header"),o=v(),et(r.$$.fragment),c=v(),i=x("footer"),this.h()},l(t){(function(t,n=document.body){return Array.from(n.querySelectorAll(t))})('[data-svelte="svelte-12kggbn"]',document.head).forEach(b),n=R(t),e=C(t,"HEADER",{}),k(e).forEach(b),o=R(t),ot(r.$$.fragment,t),c=R(t),i=C(t,"FOOTER",{}),k(i).forEach(b),this.h()},h(){document.title="Project"},m(t,l){y(t,n,l),y(t,e,l),y(t,o,l),rt(r,t,l),y(t,c,l),y(t,i,l),s=!0},p(t,[n]){const e={};1&n&&(e.url=t[0]),2&n&&(e.$$scope={dirty:n,ctx:t}),r.$set(e)},i(t){s||(Y(r.$$.fragment,t),s=!0)},o(t){Z(r.$$.fragment,t),s=!1},d(t){t&&b(n),t&&b(e),t&&b(o),ct(r,t),t&&b(c),t&&b(i)}}}function qt(t,n,e){let{url:o="/"}=n;return t.$$set=t=>{"url"in t&&e(0,o=t.url)},[o]}new class extends st{constructor(t){super(),it(this,t,qt,Pt,i,{url:0})}}({hydrate:!0,props:window.props,target:document.body})})();