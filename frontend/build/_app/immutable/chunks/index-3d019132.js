function A(){}function it(t,e){for(const n in e)t[n]=e[n];return t}function rt(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function U(t){return t()}function R(){return Object.create(null)}function v(t){t.forEach(U)}function V(t){return typeof t=="function"}function Et(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ct(t){return Object.keys(t).length===0}function st(t,...e){if(t==null)return A;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Tt(t,e,n){t.$$.on_destroy.push(st(e,n))}function At(t,e,n,i){if(t){const r=X(t,e,n,i);return t[0](r)}}function X(t,e,n,i){return t[1]&&i?it(n.ctx.slice(),t[1](i(e))):n.ctx}function St(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],c=Math.max(e.dirty.length,r.length);for(let o=0;o<c;o+=1)u[o]=e.dirty[o]|r[o];return u}return e.dirty|r}return e.dirty}function Mt(t,e,n,i,r,u){if(r){const c=X(e,n,i,u);t.p(c,r)}}function jt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}let M=!1;function lt(){M=!0}function ut(){M=!1}function ot(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function at(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let l=0;l<e.length;l++){const h=e[l];h.claim_order!==void 0&&s.push(h)}e=s}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let s=0;s<e.length;s++){const l=e[s].claim_order,h=(r>0&&e[n[r]].claim_order<=l?r+1:ot(1,r,a=>e[n[a]].claim_order,l))-1;i[s]=n[h]+1;const d=h+1;n[d]=s,r=Math.max(d,r)}const u=[],c=[];let o=e.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(u.push(e[s-1]);o>=s;o--)c.push(e[o]);o--}for(;o>=0;o--)c.push(e[o]);u.reverse(),c.sort((s,l)=>s.claim_order-l.claim_order);for(let s=0,l=0;s<c.length;s++){for(;l<u.length&&c[s].claim_order>=u[l].claim_order;)l++;const h=l<u.length?u[l]:null;t.insertBefore(c[s],h)}}function ft(t,e){if(M){for(at(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function ht(t,e,n){t.insertBefore(e,n||null)}function dt(t,e,n){M&&!n?ft(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function S(t){t.parentNode&&t.parentNode.removeChild(t)}function Ct(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function Y(t){return document.createElement(t)}function _t(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function D(t){return document.createTextNode(t)}function Ht(){return D(" ")}function Lt(){return D("")}function Bt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Ot(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function mt(t){return Array.from(t.childNodes)}function Z(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function tt(t,e,n,i,r=!1){Z(t);const u=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const o=t[c];if(e(o)){const s=n(o);return s===void 0?t.splice(c,1):t[c]=s,r||(t.claim_info.last_index=c),o}}for(let c=t.claim_info.last_index-1;c>=0;c--){const o=t[c];if(e(o)){const s=n(o);return s===void 0?t.splice(c,1):t[c]=s,r?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,o}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function pt(t,e,n,i){return tt(t,r=>r.nodeName===e,r=>{const u=[];for(let c=0;c<r.attributes.length;c++){const o=r.attributes[c];n[o.name]||u.push(o.name)}u.forEach(c=>r.removeAttribute(c))},()=>i(e))}function Pt(t,e,n){return pt(t,e,n,Y)}function yt(t,e){return tt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>D(e),!0)}function Dt(t){return yt(t," ")}function J(t,e,n){for(let i=n;i<t.length;i+=1){const r=t[i];if(r.nodeType===8&&r.textContent.trim()===e)return i}return t.length}function Gt(t,e){const n=J(t,"HTML_TAG_START",0),i=J(t,"HTML_TAG_END",n);if(n===i)return new K(void 0,e);Z(t);const r=t.splice(n,i-n+1);S(r[0]),S(r[r.length-1]);const u=r.slice(1,r.length-1);for(const c of u)c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new K(u,e)}function qt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function zt(t,e){t.value=e??""}function Ft(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}class gt{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=_t(n.nodeName):this.e=Y(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)ht(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(S)}}class K extends gt{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)dt(this.t,this.n[n],e)}}function It(t,e){return new t(e)}let $;function g(t){$=t}function G(){if(!$)throw new Error("Function called outside component initialization");return $}function Rt(t){G().$$.on_mount.push(t)}function Jt(t){G().$$.after_update.push(t)}const w=[],Q=[],E=[],W=[],et=Promise.resolve();let O=!1;function nt(){O||(O=!0,et.then(q))}function Kt(){return nt(),et}function P(t){E.push(t)}const B=new Set;let x=0;function q(){if(x!==0)return;const t=$;do{try{for(;x<w.length;){const e=w[x];x++,g(e),bt(e.$$)}}catch(e){throw w.length=0,x=0,e}for(g(null),w.length=0,x=0;Q.length;)Q.pop()();for(let e=0;e<E.length;e+=1){const n=E[e];B.has(n)||(B.add(n),n())}E.length=0}while(w.length);for(;W.length;)W.pop()();O=!1,B.clear(),g(t)}function bt(t){if(t.fragment!==null){t.update(),v(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(P)}}const T=new Set;let b;function xt(){b={r:0,c:[],p:b}}function wt(){b.r||v(b.c),b=b.p}function z(t,e){t&&t.i&&(T.delete(t),t.i(e))}function $t(t,e,n,i){if(t&&t.o){if(T.has(t))return;T.add(t),b.c.push(()=>{T.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function Qt(t,e){const n=e.token={};function i(r,u,c,o){if(e.token!==n)return;e.resolved=o;let s=e.ctx;c!==void 0&&(s=s.slice(),s[c]=o);const l=r&&(e.current=r)(s);let h=!1;e.block&&(e.blocks?e.blocks.forEach((d,a)=>{a!==u&&d&&(xt(),$t(d,1,1,()=>{e.blocks[a]===d&&(e.blocks[a]=null)}),wt())}):e.block.d(1),l.c(),z(l,1),l.m(e.mount(),e.anchor),h=!0),e.block=l,e.blocks&&(e.blocks[u]=l),h&&q()}if(rt(t)){const r=G();if(t.then(u=>{g(r),i(e.then,1,e.value,u),g(null)},u=>{if(g(r),i(e.catch,2,e.error,u),g(null),!e.hasCatch)throw u}),e.current!==e.pending)return i(e.pending,0),!0}else{if(e.current!==e.then)return i(e.then,1,e.value,t),!0;e.resolved=t}}function Wt(t,e,n){const i=e.slice(),{resolved:r}=t;t.current===t.then&&(i[t.value]=r),t.current===t.catch&&(i[t.error]=r),t.block.p(i,n)}function Ut(t,e){t.d(1),e.delete(t.key)}function Vt(t,e,n,i,r,u,c,o,s,l,h,d){let a=t.length,m=u.length,_=a;const j={};for(;_--;)j[t[_].key]=_;const k=[],C=new Map,H=new Map;for(_=m;_--;){const f=d(r,u,_),p=n(f);let y=c.get(p);y?i&&y.p(f,e):(y=l(p,f),y.c()),C.set(p,k[_]=y),p in j&&H.set(p,Math.abs(_-j[p]))}const F=new Set,I=new Set;function L(f){z(f,1),f.m(o,h),c.set(f.key,f),h=f.first,m--}for(;a&&m;){const f=k[m-1],p=t[a-1],y=f.key,N=p.key;f===p?(h=f.first,a--,m--):C.has(N)?!c.has(y)||F.has(y)?L(f):I.has(N)?a--:H.get(y)>H.get(N)?(I.add(y),L(f)):(F.add(N),a--):(s(p,c),a--)}for(;a--;){const f=t[a];C.has(f.key)||s(f,c)}for(;m;)L(k[m-1]);return k}function Xt(t){t&&t.c()}function Yt(t,e){t&&t.l(e)}function vt(t,e,n,i){const{fragment:r,after_update:u}=t.$$;r&&r.m(e,n),i||P(()=>{const c=t.$$.on_mount.map(U).filter(V);t.$$.on_destroy?t.$$.on_destroy.push(...c):v(c),t.$$.on_mount=[]}),u.forEach(P)}function kt(t,e){const n=t.$$;n.fragment!==null&&(v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Nt(t,e){t.$$.dirty[0]===-1&&(w.push(t),nt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Zt(t,e,n,i,r,u,c,o=[-1]){const s=$;g(t);const l=t.$$={fragment:null,ctx:[],props:u,update:A,not_equal:r,bound:R(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:R(),dirty:o,skip_bound:!1,root:e.target||s.$$.root};c&&c(l.root);let h=!1;if(l.ctx=n?n(t,e.props||{},(d,a,...m)=>{const _=m.length?m[0]:a;return l.ctx&&r(l.ctx[d],l.ctx[d]=_)&&(!l.skip_bound&&l.bound[d]&&l.bound[d](_),h&&Nt(t,d)),a}):[],l.update(),h=!0,v(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){lt();const d=mt(e.target);l.fragment&&l.fragment.l(d),d.forEach(S)}else l.fragment&&l.fragment.c();e.intro&&z(t.$$.fragment),vt(t,e.target,e.anchor,e.customElement),ut(),q()}g(s)}class te{$destroy(){kt(this,1),this.$destroy=A}$on(e,n){if(!V(n))return A;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!ct(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{kt as A,Kt as B,A as C,ft as D,Tt as E,At as F,Mt as G,jt as H,St as I,Qt as J,Bt as K,Wt as L,v as M,Vt as N,Ut as O,Ct as P,K as Q,Gt as R,te as S,zt as T,Ht as a,dt as b,Dt as c,wt as d,Lt as e,z as f,xt as g,S as h,Zt as i,Jt as j,Y as k,Pt as l,mt as m,Ot as n,Rt as o,Ft as p,D as q,yt as r,Et as s,$t as t,qt as u,Q as v,It as w,Xt as x,Yt as y,vt as z};
