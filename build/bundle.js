var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function l(t){t.forEach(e)}function o(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let r,c;function i(t,e){return r||(r=document.createElement("a")),r.href=e,t===r.href}function a(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function p(t){t.parentNode.removeChild(t)}function d(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function f(t){return document.createElement(t)}function h(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function m(t){return document.createTextNode(t)}function g(){return m(" ")}function v(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function $(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function w(t,e,n){t.setAttributeNS("http://www.w3.org/1999/xlink",e,n)}function b(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function x(t,e,n,l){t.style.setProperty(e,n,l?"important":"")}function y(t,e,n){t.classList[n?"add":"remove"](e)}function q(t){c=t}function _(){if(!c)throw new Error("Function called outside component initialization");return c}const T=[],C=[],j=[],k=[],z=Promise.resolve();let E=!1;function A(t){j.push(t)}function L(t){k.push(t)}let P=!1;const D=new Set;function H(){if(!P){P=!0;do{for(let t=0;t<T.length;t+=1){const e=T[t];q(e),M(e.$$)}for(q(null),T.length=0;C.length;)C.pop()();for(let t=0;t<j.length;t+=1){const e=j[t];D.has(e)||(D.add(e),e())}j.length=0}while(T.length);for(;k.length;)k.pop()();E=!1,P=!1,D.clear()}}function M(t){if(null!==t.fragment){t.update(),l(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}const S=new Set;let N;function O(t,e){t&&t.i&&(S.delete(t),t.i(e))}function F(t,e,n,l){if(t&&t.o){if(S.has(t))return;S.add(t),N.c.push((()=>{S.delete(t),l&&(n&&t.d(1),l())})),t.o(e)}}const V="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function B(t,e,n){const l=t.$$.props[e];void 0!==l&&(t.$$.bound[l]=n,n(t.$$.ctx[l]))}function R(t){t&&t.c()}function I(t,n,s,r){const{fragment:c,on_mount:i,on_destroy:a,after_update:u}=t.$$;c&&c.m(n,s),r||A((()=>{const n=i.map(e).filter(o);a?a.push(...n):l(n),t.$$.on_mount=[]})),u.forEach(A)}function W(t,e){const n=t.$$;null!==n.fragment&&(l(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function G(t,e){-1===t.$$.dirty[0]&&(T.push(t),E||(E=!0,z.then(H)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function J(e,o,s,r,i,a,u,d=[-1]){const f=c;q(e);const h=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:i,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(f?f.$$.context:[])),callbacks:n(),dirty:d,skip_bound:!1,root:o.target||f.$$.root};u&&u(h.root);let m=!1;if(h.ctx=s?s(e,o.props||{},((t,n,...l)=>{const o=l.length?l[0]:n;return h.ctx&&i(h.ctx[t],h.ctx[t]=o)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](o),m&&G(e,t)),n})):[],h.update(),m=!0,l(h.before_update),h.fragment=!!r&&r(h.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);h.fragment&&h.fragment.l(t),t.forEach(p)}else h.fragment&&h.fragment.c();o.intro&&O(e.$$.fragment),I(e,o.target,o.anchor,o.customElement),H()}q(f)}class K{$destroy(){W(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Q(e){let n,l,o,s,r,c,i,d;return{c(){n=h("svg"),l=h("defs"),o=h("symbol"),s=h("path"),r=h("path"),c=h("path"),i=h("path"),d=h("path"),$(s,"d","m 27.428575,31.99996 h 4.57143 V 11.08497 c -0.2449,-0.22458 -0.4754,-0.46416 -0.73972,-0.66648 -0.24233,-0.1855 -0.49297,-0.36072 -0.75181,-0.52326 -0.25883,-0.16254 -0.52594,-0.31244 -0.80143,-0.44796 -0.27548,-0.13552 -0.55932,-0.25671 -0.85162,-0.36114 -0.2923,-0.10444 -0.59285,-0.19204 -0.90212,-0.26134 -0.1702,-0.0382 -0.34936,-0.0561 -0.52473,-0.0827 z"),$(r,"d","m 25.143005,8.7365 c -0.0696,0.01 -0.13531,0.01 -0.20553,0.0213 -0.36114,0.0605 -0.73096,0.14584 -1.1097,0.25779 -0.37875,0.11194 -0.76635,0.25071 -1.16287,0.41813 -0.39651,0.16742 -0.80217,0.36364 -1.21661,0.59059 -0.28603,0.15663 -0.58208,0.34843 -0.87672,0.53506 V 32 h 4.57143 z"),$(c,"d","M 18.285715,31.99996 V 12.25728 c -0.26985,0.22799 -0.53611,0.44226 -0.81235,0.69541 -0.46916,0.42994 -0.9477,0.8969 -1.43542,1.40264 -0.48772,0.50574 -0.98479,1.05033 -1.49123,1.63592 -0.27238,0.31496 -0.55459,0.67301 -0.83243,1.01197 v 14.99674 z"),$(i,"d","M 11.428725,31.99996 V 19.53211 c -0.0369,0.0321 -0.0723,0.072 -0.10926,0.10335 -0.28897,0.2449 -0.58224,0.46624 -0.8788,0.6653 -0.29656,0.19906 -0.59649,0.3757 -0.89946,0.53152 -0.30296,0.15583 -0.609,0.29084 -0.91718,0.40603 -0.30818,0.1152 -0.61856,0.21075 -0.93076,0.28791 -0.277332,0.0686 -0.556356,0.11751 -0.835974,0.15799 v 10.31575 z"),$(d,"d","M 4.571429,31.99996 V 21.72821 c -0.222962,-0.021 -0.446034,-0.04 -0.668542,-0.0744 C 3.270141,21.55591 2.64006,21.40547 2.017441,21.21264 1.394824,21.01982 0.77954,20.78475 0.176586,20.51782 0.116336,20.49112 0.060003,20.45652 0,20.42922 v 11.57075 z"),$(o,"id","icon-dobisel"),$(o,"viewBox","0 0 32 32"),$(n,"aria-hidden","true"),x(n,"position","absolute"),x(n,"width","0"),x(n,"height","0"),x(n,"overflow","hidden"),$(n,"version","1.1"),$(n,"xmlns","http://www.w3.org/2000/svg"),$(n,"xmlns:xlink","http://www.w3.org/1999/xlink")},m(t,e){u(t,n,e),a(n,l),a(l,o),a(o,s),a(o,r),a(o,c),a(o,i),a(o,d)},p:t,i:t,o:t,d(t){t&&p(n)}}}class U extends K{constructor(t){super(),J(this,t,null,Q,s,{})}}function X(t){let e,n,l;return{c(){e=h("svg"),n=h("use"),w(n,"xlink:href",l="#icon-"+t[2]),$(n,"class","svelte-16z6lgu"),$(e,"class","svelte-16z6lgu")},m(t,l){u(t,e,l),a(e,n)},p(t,e){4&e&&l!==(l="#icon-"+t[2])&&w(n,"xlink:href",l)},d(t){t&&p(e)}}}function Y(t){let e,n;return{c(){e=f("span"),n=m(t[0]),$(e,"class","svelte-16z6lgu"),y(e,"lpad",null==t[2])},m(t,l){u(t,e,l),a(e,n)},p(t,l){1&l&&b(n,t[0]),4&l&&y(e,"lpad",null==t[2])},d(t){t&&p(e)}}}function Z(e){let n,l,s,r,c,i=e[2]&&X(e),d=e[0]&&Y(e);return{c(){n=f("a"),i&&i.c(),l=g(),d&&d.c(),$(n,"id",e[3]),$(n,"style",e[4]),$(n,"href",s=e[6]?void 0:e[1]),$(n,"class","svelte-16z6lgu"),y(n,"current",e[5]==e[1])},m(t,s){u(t,n,s),i&&i.m(n,null),a(n,l),d&&d.m(n,null),r||(c=v(n,"click",(function(){o(e[6]?e[7]:void 0)&&(e[6]?e[7]:void 0).apply(this,arguments)})),r=!0)},p(t,[o]){(e=t)[2]?i?i.p(e,o):(i=X(e),i.c(),i.m(n,l)):i&&(i.d(1),i=null),e[0]?d?d.p(e,o):(d=Y(e),d.c(),d.m(n,null)):d&&(d.d(1),d=null),8&o&&$(n,"id",e[3]),16&o&&$(n,"style",e[4]),66&o&&s!==(s=e[6]?void 0:e[1])&&$(n,"href",s),34&o&&y(n,"current",e[5]==e[1])},i:t,o:t,d(t){t&&p(n),i&&i.d(),d&&d.d(),r=!1,c()}}}function tt(t,e,n){let{title:l=""}=e,{target:o}=e,{icon:s=null}=e,{id:r=""}=e,{style:c=""}=e,{current:i}=e,a=!1;const{navigate:u}=(p="nav",_().$$.context.get(p));var p;return void 0!==o&&o.startsWith("/")&&(a=!0),t.$$set=t=>{"title"in t&&n(0,l=t.title),"target"in t&&n(1,o=t.target),"icon"in t&&n(2,s=t.icon),"id"in t&&n(3,r=t.id),"style"in t&&n(4,c=t.style),"current"in t&&n(5,i=t.current)},[l,o,s,r,c,i,a,function(){u(o)}]}class et extends K{constructor(t){super(),J(this,t,tt,Z,s,{title:0,target:1,icon:2,id:3,style:4,current:5})}}function nt(e){let n;return{c(){n=f("a"),n.innerHTML='<svg class="svelte-1cp0z4p"><use xlink:href="#icon-dobisel" class="svelte-1cp0z4p"></use></svg>Dobisel',$(n,"href","/"),$(n,"class","svelte-1cp0z4p")},m(t,e){u(t,n,e)},p:t,i:t,o:t,d(t){t&&p(n)}}}class lt extends K{constructor(t){super(),J(this,t,null,nt,s,{})}}function ot(t,e,n){const l=t.slice();return l[6]=e[n],l}function st(t,e,n){const l=t.slice();return l[9]=e[n],l}function rt(t){let e,n,l,o,s,r,c,i,a,h,m,v,w,b,x,y,q,_,T,C=t[0],j=[];for(let e=0;e<C.length;e+=1)j[e]=it(st(t,C,e));let k=t[1],z=[];for(let e=0;e<k.length;e+=1)z[e]=at(ot(t,k,e));return{c(){e=f("h2"),e.textContent="Our Story",n=g(),l=f("p"),l.textContent="At Dobisel, we're building commercial and open-source projects in \n    software and electronic fields.",o=g(),s=f("p"),s.textContent="Engineers at Dobisel love to learn more and more about BDD, TDD & \n    Fault-Tolerant systems to pull together as a team to succeed. We all have \n    a say in what we produce and how we develop it. Our goal is to achieve the \n    best understand of customer needs and define more accurate tests to freeze \n    the feature's behavior and deliver the most promising product.",r=g(),c=f("p"),c.textContent="Here is a list of recent projects developed at Dobisel:",i=g(),a=f("ul"),a.innerHTML='<li class="svelte-1p11qw6"><a href="https://github.com/pylover/adia" class="svelte-1p11qw6"><b class="svelte-1p11qw6">ADia<b class="svelte-1p11qw6"></b></b></a> is a \n            general-purpose language for ASCII diagrams which compatible with \n            CPython and Brython.</li> \n      <li class="svelte-1p11qw6"><a href="https://github.com/dobisel/httpload" class="svelte-1p11qw6"><b class="svelte-1p11qw6">HTTPLoad<b class="svelte-1p11qw6"></b></b></a>, A\n            Linux epoll compatible high-load HTTP stress testing utility\n            which written in C.</li> \n      <li class="svelte-1p11qw6">A C and Python implementation of the RFC6238 (TOTP) ans RFC4226\n        (HMAC-OTP) for core-banking purpose.</li>',h=g(),m=f("p"),m.innerHTML='<a href="#projects" class="svelte-1p11qw6">Discover more projects</a> \n      or contact us at: \n      <a href="mailto:info@dobisel.com" class="svelte-1p11qw6">info@dobsel.com</a>',v=g(),w=f("h2"),w.textContent="Team",b=g(),x=f("div");for(let t=0;t<j.length;t+=1)j[t].c();y=g(),q=f("h2"),q.textContent="Projects",_=g(),T=f("div");for(let t=0;t<z.length;t+=1)z[t].c();$(e,"id","story"),$(e,"class","all10 svelte-1p11qw6"),$(l,"class","all10 svelte-1p11qw6"),$(s,"class","all10 svelte-1p11qw6"),$(c,"class","all10 svelte-1p11qw6"),$(a,"class","all10 svelte-1p11qw6"),$(m,"class","all10 svelte-1p11qw6"),$(w,"id","staff"),$(w,"class","all10 svelte-1p11qw6"),$(x,"class","all10 members svelte-1p11qw6"),$(q,"id","projects"),$(q,"class","all10 svelte-1p11qw6"),$(T,"class","all10 projects svelte-1p11qw6")},m(t,p){u(t,e,p),u(t,n,p),u(t,l,p),u(t,o,p),u(t,s,p),u(t,r,p),u(t,c,p),u(t,i,p),u(t,a,p),u(t,h,p),u(t,m,p),u(t,v,p),u(t,w,p),u(t,b,p),u(t,x,p);for(let t=0;t<j.length;t+=1)j[t].m(x,null);u(t,y,p),u(t,q,p),u(t,_,p),u(t,T,p);for(let t=0;t<z.length;t+=1)z[t].m(T,null)},p(t,e){if(1&e){let n;for(C=t[0],n=0;n<C.length;n+=1){const l=st(t,C,n);j[n]?j[n].p(l,e):(j[n]=it(l),j[n].c(),j[n].m(x,null))}for(;n<j.length;n+=1)j[n].d(1);j.length=C.length}if(2&e){let n;for(k=t[1],n=0;n<k.length;n+=1){const l=ot(t,k,n);z[n]?z[n].p(l,e):(z[n]=at(l),z[n].c(),z[n].m(T,null))}for(;n<z.length;n+=1)z[n].d(1);z.length=k.length}},d(t){t&&p(e),t&&p(n),t&&p(l),t&&p(o),t&&p(s),t&&p(r),t&&p(c),t&&p(i),t&&p(a),t&&p(h),t&&p(m),t&&p(v),t&&p(w),t&&p(b),t&&p(x),d(j,t),t&&p(y),t&&p(q),t&&p(_),t&&p(T),d(z,t)}}}function ct(e){let n,l,o;return{c(){n=f("h2"),n.textContent="Error",l=g(),o=f("p"),o.textContent="Cannot fetch some resources, please refresh the page.",$(n,"class","all10 svelte-1p11qw6"),$(o,"class","all10 svelte-1p11qw6")},m(t,e){u(t,n,e),u(t,l,e),u(t,o,e)},p:t,d(t){t&&p(n),t&&p(l),t&&p(o)}}}function it(t){let e,n,l,o,s,r,c,d,h,v,w,x,y,q,_,T,C,j=t[9].login+"",k=t[9].bio+"",z=t[9].html_url+"";return{c(){e=f("div"),n=f("div"),l=f("a"),o=f("img"),c=g(),d=m(j),v=g(),w=f("p"),x=m(k),y=g(),q=f("a"),_=m(z),C=g(),i(o.src,s=t[9].avatar_url)||$(o,"src",s),$(o,"alt",r=t[9].login),$(o,"class","svelte-1p11qw6"),$(l,"href",h=t[9].html_url),$(l,"class","svelte-1p11qw6"),$(n,"class","all10 svelte-1p11qw6"),$(w,"class","all10 svelte-1p11qw6"),$(q,"class","all10 svelte-1p11qw6"),$(q,"href",T=t[9].html_url),$(e,"class","sm10 md5 lg33p xg33p member svelte-1p11qw6")},m(t,s){u(t,e,s),a(e,n),a(n,l),a(l,o),a(l,c),a(l,d),a(e,v),a(e,w),a(w,x),a(e,y),a(e,q),a(q,_),a(e,C)},p(t,e){1&e&&!i(o.src,s=t[9].avatar_url)&&$(o,"src",s),1&e&&r!==(r=t[9].login)&&$(o,"alt",r),1&e&&j!==(j=t[9].login+"")&&b(d,j),1&e&&h!==(h=t[9].html_url)&&$(l,"href",h),1&e&&k!==(k=t[9].bio+"")&&b(x,k),1&e&&z!==(z=t[9].html_url+"")&&b(_,z),1&e&&T!==(T=t[9].html_url)&&$(q,"href",T)},d(t){t&&p(e)}}}function at(t){let e,n,l,o,s,r,c,i,d,h=t[6].name+"",v=t[6].description+"";return{c(){e=f("div"),n=f("div"),l=f("a"),o=m(h),r=g(),c=f("p"),i=m(v),d=g(),$(l,"href",s=t[6].html_url),$(l,"class","svelte-1p11qw6"),$(n,"class","all10 svelte-1p11qw6"),$(c,"class","all10 svelte-1p11qw6"),$(e,"class","sm10 md5 lg33p xg33p project svelte-1p11qw6")},m(t,s){u(t,e,s),a(e,n),a(n,l),a(l,o),a(e,r),a(e,c),a(c,i),a(e,d)},p(t,e){2&e&&h!==(h=t[6].name+"")&&b(o,h),2&e&&s!==(s=t[6].html_url)&&$(l,"href",s),2&e&&v!==(v=t[6].description+"")&&b(i,v)},d(t){t&&p(e)}}}function ut(e){let n,l,o,s,r;function c(t,e){return t[2]?ct:rt}let i=c(e),a=i(e);return{c(){n=f("div"),l=g(),o=f("div"),a.c(),s=g(),r=f("div"),$(n,"class","sm0 md0 lg1 xg1 svelte-1p11qw6"),$(o,"class","sm10 md10 lg8 xg6 svelte-1p11qw6"),$(r,"class","sm0 md0 lg1 xg3 svelte-1p11qw6")},m(t,e){u(t,n,e),u(t,l,e),u(t,o,e),a.m(o,null),u(t,s,e),u(t,r,e)},p(t,[e]){i===(i=c(t))&&a?a.p(t,e):(a.d(1),a=i(t),a&&(a.c(),a.m(o,null)))},i:t,o:t,d(t){t&&p(n),t&&p(l),t&&p(o),a.d(),t&&p(s),t&&p(r)}}}function pt(t,e,n){let{loading:l=!0}=e,o=[],s=[],r=!1,c=15;async function i(){try{n(0,[o,s]=await Promise.all([(await fetch("staff.json")).json(),(await fetch("projects.json")).json()]),o,n(1,s)),n(3,l=!1)}catch{c--,console.log("error loading"),c>0?i():(n(3,l=!1),n(2,r=!0))}}var a;return a=async function(){await i()},_().$$.on_mount.push(a),t.$$set=t=>{"loading"in t&&n(3,l=t.loading)},[o,s,r,l]}class dt extends K{constructor(t){super(),J(this,t,pt,ut,s,{loading:3})}}function ft(e){let n;return{c(){n=f("h3"),n.textContent="Not Found !"},m(t,e){u(t,n,e)},p:t,i:t,o:t,d(t){t&&p(n)}}}class ht extends K{constructor(t){super(),J(this,t,null,ft,s,{})}}const{window:mt}=V;function gt(t){let e;return{c(){e=f("div"),e.innerHTML="<p>Loading, please wait ...</p>",$(e,"class","loading all10")},m(t,n){u(t,e,n)},d(t){t&&p(e)}}}function vt(t){let e,n,o,s,r,c,i,d,h,m,w,b,x,y,q,_,T,j,k,z,E,A,P;e=new U({});let D=t[0]&&gt();function H(e){t[6](e)}r=new lt({});let M={title:"Projects",target:"#projects"};function S(e){t[7](e)}void 0!==t[2]&&(M.current=t[2]),i=new et({props:M}),C.push((()=>B(i,"current",H)));let V={title:"Team",target:"#staff"};function G(e){t[8](e)}void 0!==t[2]&&(V.current=t[2]),m=new et({props:V}),C.push((()=>B(m,"current",S)));let J={title:"Story",target:"#story"};function K(e){t[9](e)}void 0!==t[2]&&(J.current=t[2]),x=new et({props:J}),C.push((()=>B(x,"current",G)));var Q=t[1].component;function X(t){let e={};return void 0!==t[0]&&(e.loading=t[0]),{props:e}}return Q&&(T=new Q(X(t)),C.push((()=>B(T,"loading",K)))),{c(){R(e.$$.fragment),n=g(),D&&D.c(),o=g(),s=f("nav"),R(r.$$.fragment),c=g(),R(i.$$.fragment),h=g(),R(m.$$.fragment),b=g(),R(x.$$.fragment),q=g(),_=f("div"),T&&R(T.$$.fragment),k=g(),z=f("div"),z.innerHTML="<p>dobisel © 2021</p>",$(z,"class","all10 footer"),$(_,"class","content")},m(l,p){I(e,l,p),u(l,n,p),D&&D.m(l,p),u(l,o,p),u(l,s,p),I(r,s,null),a(s,c),I(i,s,null),a(s,h),I(m,s,null),a(s,b),I(x,s,null),u(l,q,p),u(l,_,p),T&&I(T,_,null),a(_,k),a(_,z),E=!0,A||(P=v(mt,"popstate",t[5]),A=!0)},p(t,[e]){t[0]?D||(D=gt(),D.c(),D.m(o.parentNode,o)):D&&(D.d(1),D=null);const n={};!d&&4&e&&(d=!0,n.current=t[2],L((()=>d=!1))),i.$set(n);const s={};!w&&4&e&&(w=!0,s.current=t[2],L((()=>w=!1))),m.$set(s);const r={};!y&&4&e&&(y=!0,r.current=t[2],L((()=>y=!1))),x.$set(r);const c={};if(!j&&1&e&&(j=!0,c.loading=t[0],L((()=>j=!1))),Q!==(Q=t[1].component)){if(T){N={r:0,c:[],p:N};const t=T;F(t.$$.fragment,1,0,(()=>{W(t,1)})),N.r||l(N.c),N=N.p}Q?(T=new Q(X(t)),C.push((()=>B(T,"loading",K))),R(T.$$.fragment),O(T.$$.fragment,1),I(T,_,k)):T=null}else Q&&T.$set(c)},i(t){E||(O(e.$$.fragment,t),O(r.$$.fragment,t),O(i.$$.fragment,t),O(m.$$.fragment,t),O(x.$$.fragment,t),T&&O(T.$$.fragment,t),E=!0)},o(t){F(e.$$.fragment,t),F(r.$$.fragment,t),F(i.$$.fragment,t),F(m.$$.fragment,t),F(x.$$.fragment,t),T&&F(T.$$.fragment,t),E=!1},d(t){W(e,t),t&&p(n),D&&D.d(t),t&&p(o),t&&p(s),W(r),W(i),W(m),W(x),t&&p(q),t&&p(_),T&&W(T),A=!1,P()}}}function $t(t,e,n){const l={"/":{title:"Home",component:dt}},o={title:"Not Found",component:ht};let s,r,c=!0,{title:i}=e;function a(t){return n(2,r=t),n(1,s=l[t]),null==s&&n(1,s=o),document.title=`${i} -> ${s.title}`,!1}function u(t){a(t),window.history.pushState({target:t},s.title,`${window.location.origin}/adia${t}`)}var p,d;p="nav",d={navigate:u},_().$$.context.set(p,d),r=window.location.pathname.replace(new RegExp("^/adia"),""),u(r);return t.$$set=t=>{"title"in t&&n(4,i=t.title)},[c,s,r,a,i,t=>a(t.state.target),function(t){r=t,n(2,r)},function(t){r=t,n(2,r)},function(t){r=t,n(2,r)},function(t){c=t,n(0,c)}]}return new class extends K{constructor(t){super(),J(this,t,$t,vt,s,{title:4})}}({target:document.body,props:{title:"Svelte Sass Template"}})}();
//# sourceMappingURL=bundle.js.map
