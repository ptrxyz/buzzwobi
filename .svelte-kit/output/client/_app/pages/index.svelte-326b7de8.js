var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,s=Object.getOwnPropertySymbols,n=Object.prototype.propertyIsEnumerable,o=(t,s,n)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[s]=n,l=(e,l)=>{for(var r in l||(l={}))t.call(l,r)&&o(e,r,l[r]);if(s)for(var r of s(l))n.call(l,r)&&o(e,r,l[r]);return e};import{S as r,i as a,s as c,D as i,e as u,c as h,a as d,d as f,b as p,H as m,f as g,I as y,E as $,v,r as w,J as b,t as k,g as P,F as E,K as x,L as C,l as I,j as O,m as S,o as D,w as L,k as j,n as M,u as R,M as N,N as z,O as H,B as q,P as G,h as A}from"../chunks/vendor-0688f630.js";function B(e){let t,s,n,o;const l=e[3].default,r=i(l,e,e[2],null);return{c(){t=u("cell"),r&&r.c(),this.h()},l(e){t=h(e,"CELL",{class:!0});var s=d(t);r&&r.l(s),s.forEach(f),this.h()},h(){p(t,"class","svelte-7omw0l"),m(t,"done",e[0])},m(l,a){g(l,t,a),r&&r.m(t,null),s=!0,n||(o=y(t,"click",e[1]),n=!0)},p(e,[n]){r&&r.p&&(!s||4&n)&&$(r,l,e,e[2],n,null,null),1&n&&m(t,"done",e[0])},i(e){s||(v(r,e),s=!0)},o(e){w(r,e),s=!1},d(e){e&&f(t),r&&r.d(e),n=!1,o()}}}function K(e,t,s){let{$$slots:n={},$$scope:o}=t;const l=b();let{done:r=!1}=t;return e.$$set=e=>{"done"in e&&s(0,r=e.done),"$$scope"in e&&s(2,o=e.$$scope)},[r,function(e){s(0,r=!r),l("click",e.detail)},o,n]}class Y extends r{constructor(e){super(),a(this,e,K,B,c,{done:0})}}function F(e,t,s){const n=e.slice();return n[6]=t[s],n}function J(e){let t,s,n,o,l,r,a=e[1]>4&&U();return{c(){t=u("div"),s=u("h1"),n=k("Congratulations!"),o=k("\n        You won! Please inform the speaker, he is using too many buzzwords... :)\n        "),a&&a.c(),this.h()},l(e){t=h(e,"DIV",{class:!0});var l=d(t);s=h(l,"H1",{class:!0});var r=d(s);n=P(r,"Congratulations!"),r.forEach(f),o=P(l,"\n        You won! Please inform the speaker, he is using too many buzzwords... :)\n        "),a&&a.l(l),l.forEach(f),this.h()},h(){p(s,"class","svelte-xcqsn5"),p(t,"class","win svelte-xcqsn5")},m(e,l){g(e,t,l),E(t,s),E(s,n),E(t,o),a&&a.m(t,null),r=!0},p(e,s){e[1]>4?a||(a=U(),a.c(),a.m(t,null)):a&&(a.d(1),a=null)},i(e){r||(z((()=>{l||(l=C(t,H,{},!0)),l.run(1)})),r=!0)},o(e){l||(l=C(t,H,{},!1)),l.run(0),r=!1},d(e){e&&f(t),a&&a.d(),e&&l&&l.end()}}}function U(e){let t,s;return{c(){t=u("p"),s=k("Oh my god... so many winnings...!"),this.h()},l(e){t=h(e,"P",{style:!0});var n=d(t);s=P(n,"Oh my god... so many winnings...!"),n.forEach(f),this.h()},h(){x(t,"color","orange")},m(e,n){g(e,t,n),E(t,s)},d(e){e&&f(t)}}}function V(e){let t,s=e[6].word+"";return{c(){t=k(s)},l(e){t=P(e,s)},m(e,s){g(e,t,s)},p(e,n){4&n&&s!==(s=e[6].word+"")&&A(t,s)},d(e){e&&f(t)}}}function Q(e,t){let s,n,o;return n=new Y({props:{done:t[6].state,$$slots:{default:[V]},$$scope:{ctx:t}}}),n.$on("click",(function(...e){return t[4](t[6],...e)})),{key:e,first:null,c(){s=I(),O(n.$$.fragment),this.h()},l(e){s=I(),S(n.$$.fragment,e),this.h()},h(){this.first=s},m(e,t){g(e,s,t),D(n,e,t),o=!0},p(e,s){t=e;const o={};4&s&&(o.done=t[6].state),516&s&&(o.$$scope={dirty:s,ctx:t}),n.$set(o)},i(e){o||(v(n.$$.fragment,e),o=!0)},o(e){w(n.$$.fragment,e),o=!1},d(e){e&&f(s),L(n,e)}}}function T(e){let t,s,n,o=[],l=new Map,r=e[0]&&J(e),a=e[2];const c=e=>e[6].id;for(let i=0;i<a.length;i+=1){let t=F(e,a,i),s=c(t);l.set(s,o[i]=Q(s,t))}return{c(){r&&r.c(),t=j(),s=u("cellgrid");for(let e=0;e<o.length;e+=1)o[e].c();this.h()},l(e){r&&r.l(e),t=M(e),s=h(e,"CELLGRID",{class:!0});var n=d(s);for(let t=0;t<o.length;t+=1)o[t].l(n);n.forEach(f),this.h()},h(){p(s,"class","svelte-xcqsn5"),m(s,"won",e[0])},m(e,l){r&&r.m(e,l),g(e,t,l),g(e,s,l);for(let t=0;t<o.length;t+=1)o[t].m(s,null);n=!0},p(e,[n]){e[0]?r?(r.p(e,n),1&n&&v(r,1)):(r=J(e),r.c(),v(r,1),r.m(t.parentNode,t)):r&&(q(),w(r,1,1,(()=>{r=null})),R()),12&n&&(a=e[2],q(),o=N(o,n,c,1,e,a,l,s,G,Q,null,F),R()),1&n&&m(s,"won",e[0])},i(e){if(!n){v(r);for(let e=0;e<a.length;e+=1)v(o[e]);n=!0}},o(e){w(r);for(let t=0;t<o.length;t+=1)w(o[t]);n=!1},d(e){r&&r.d(e),e&&f(t),e&&f(s);for(let t=0;t<o.length;t+=1)o[t].d()}}}function W(e,t,s){Array.prototype.sample=function(){return this[Math.floor(Math.random()*this.length)]};let n=!1,o=0,r=["Ruby","Rails","Node","NPM","Bundler","Rake","Inkscape","3rd Party","ImageMagick","Complexity","Responsibility","Docker","Performance","Isolation","Processes","Simplify","Container","Services","Images","DockerHub","Docusaurus","Chemotion","Glue Code","Command-Line","Scale","Improvement","Upgrade","Significant","Kubernetes","Scripts","Deployment","GitHub","Production-Ready","Setup","Slack","Environment","ELN"],a=[...Array(16)].map(((e,t)=>({id:t,state:!1,word:r.sample()})));function c(e,t){console.log(e),e=l(l({},e),{state:!e.state}),s(2,a[e.id]=e,a);let r=[];r.push([0,1,2,3],[4,5,6,7],[8,9,10,11],[12,13,14,15]),r.push([0,4,8,12],[1,5,9,13],[2,6,10,14],[3,7,11,15]),r.push([0,5,10,15],[3,6,9,12]),s(1,o=0);for(let n=0;n<r.length;n++){let e=r[n];e.every((e=>1==a[e].state))&&s(1,o+=1)}s(0,n=o>0)}return[n,o,a,c,(e,t)=>c(e)]}export default class extends r{constructor(e){super(),a(this,e,W,T,c,{})}}
