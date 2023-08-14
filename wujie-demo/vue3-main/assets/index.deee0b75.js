import{d as H,u as X,H as mt,J as gt,K as et,L as pt,M as ht,P as Q,a as b,N as at,T as Tt,r as D,O,Q as St,q as yt,_ as y,R as xt,S as Ct,U as Nt,V as At,f as w,X as kt,w as wt,Y as _t,c as zt,Z as Lt,$ as Bt,t as it}from"./index.4f5ec2f0.js";import{w as rt,i as It,u as Mt}from"./index.080beee7.js";var J={transitionstart:{transition:"transitionstart",WebkitTransition:"webkitTransitionStart",MozTransition:"mozTransitionStart",OTransition:"oTransitionStart",msTransition:"MSTransitionStart"},animationstart:{animation:"animationstart",WebkitAnimation:"webkitAnimationStart",MozAnimation:"mozAnimationStart",OAnimation:"oAnimationStart",msAnimation:"MSAnimationStart"}},K={transitionend:{transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"mozTransitionEnd",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd"},animationend:{animation:"animationend",WebkitAnimation:"webkitAnimationEnd",MozAnimation:"mozAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd"}},W=[],$=[];function Ot(){var i=document.createElement("div"),t=i.style;"AnimationEvent"in window||(delete J.animationstart.animation,delete K.animationend.animation),"TransitionEvent"in window||(delete J.transitionstart.transition,delete K.transitionend.transition);function r(o,S){for(var v in o)if(o.hasOwnProperty(v)){var k=o[v];for(var d in k)if(d in t){S.push(k[d]);break}}}r(J,W),r(K,$)}typeof window<"u"&&typeof document<"u"&&Ot();function ot(i,t,r){i.addEventListener(t,r,!1)}function lt(i,t,r){i.removeEventListener(t,r,!1)}var Pt={startEvents:W,addStartEventListener:function(t,r){if(W.length===0){setTimeout(r,0);return}W.forEach(function(o){ot(t,o,r)})},removeStartEventListener:function(t,r){W.length!==0&&W.forEach(function(o){lt(t,o,r)})},endEvents:$,addEndEventListener:function(t,r){if($.length===0){setTimeout(r,0);return}$.forEach(function(o){ot(t,o,r)})},removeEndEventListener:function(t,r){$.length!==0&&$.forEach(function(o){lt(t,o,r)})}};const V=Pt;var M;function ut(i){return!i||i.offsetParent===null}function Wt(i){var t=(i||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\.\d]*)?\)/);return t&&t[1]&&t[2]&&t[3]?!(t[1]===t[2]&&t[2]===t[3]):!0}const $t=H({compatConfig:{MODE:3},name:"Wave",props:{insertExtraNode:Boolean,disabled:Boolean},setup:function(t,r){var o=r.slots,S=r.expose,v=ht(),k=X("",t),d=k.csp,x=k.prefixCls;S({csp:d});var C=null,z=null,_=null,N=!1,m=null,L=!1,E=function(n){if(!L){var u=et(v);!n||n.target!==u||N||B(u)}},l=function(n){!n||n.animationName!=="fadeEffect"||B(n.target)},f=function(){var n=t.insertExtraNode;return n?"".concat(x.value,"-click-animating"):"".concat(x.value,"-click-animating-without-extra-node")},h=function(n,u){var A=t.insertExtraNode,a=t.disabled;if(!(a||!n||ut(n)||n.className.indexOf("-leave")>=0)){m=document.createElement("div"),m.className="".concat(x.value,"-click-animating-node");var e=f();if(n.removeAttribute(e),n.setAttribute(e,"true"),M=M||document.createElement("style"),u&&u!=="#ffffff"&&u!=="rgb(255, 255, 255)"&&Wt(u)&&!/rgba\(\d*, \d*, \d*, 0\)/.test(u)&&u!=="transparent"){var c;(c=d.value)!==null&&c!==void 0&&c.nonce&&(M.nonce=d.value.nonce),m.style.borderColor=u,M.innerHTML=`
        [`.concat(x.value,"-click-animating-without-extra-node='true']::after, .").concat(x.value,`-click-animating-node {
          --antd-wave-shadow-color: `).concat(u,`;
        }`),document.body.contains(M)||document.body.appendChild(M)}A&&n.appendChild(m),V.addStartEventListener(n,E),V.addEndEventListener(n,l)}},B=function(n){if(!(!n||n===m||!(n instanceof Element))){var u=t.insertExtraNode,A=f();n.setAttribute(A,"false"),M&&(M.innerHTML=""),u&&m&&n.contains(m)&&n.removeChild(m),V.removeStartEventListener(n,E),V.removeEndEventListener(n,l)}},P=function(n){if(!(!n||!n.getAttribute||n.getAttribute("disabled")||n.className.indexOf("disabled")>=0)){var u=function(a){if(!(a.target.tagName==="INPUT"||ut(a.target))){B(n);var e=getComputedStyle(n).getPropertyValue("border-top-color")||getComputedStyle(n).getPropertyValue("border-color")||getComputedStyle(n).getPropertyValue("background-color");z=setTimeout(function(){return h(n,e)},0),rt.cancel(_),N=!0,_=rt(function(){N=!1},10)}};return n.addEventListener("click",u,!0),{cancel:function(){n.removeEventListener("click",u,!0)}}}};return mt(function(){gt(function(){var s=et(v);s.nodeType===1&&(C=P(s))})}),pt(function(){C&&C.cancel(),clearTimeout(z),L=!0}),function(){var s;return(s=o.default)===null||s===void 0?void 0:s.call(o)[0]}}});var Dt=function(){return{prefixCls:String,type:String,htmlType:{type:String,default:"button"},shape:{type:String},size:{type:String},loading:{type:[Boolean,Object],default:function(){return!1}},disabled:{type:Boolean,default:void 0},ghost:{type:Boolean,default:void 0},block:{type:Boolean,default:void 0},danger:{type:Boolean,default:void 0},icon:Q.any,href:String,target:String,title:String,onClick:{type:Function},onMousedown:{type:Function}}};const Rt=Dt;var st=function(t){t&&(t.style.width="0px",t.style.opacity="0",t.style.transform="scale(0)")},ct=function(t){gt(function(){t&&(t.style.width="".concat(t.scrollWidth,"px"),t.style.opacity="1",t.style.transform="scale(1)")})},dt=function(t){t&&t.style&&(t.style.width=null,t.style.opacity=null,t.style.transform=null)};const jt=H({compatConfig:{MODE:3},name:"LoadingIcon",props:{prefixCls:String,loading:[Boolean,Object],existIcon:Boolean},setup:function(t){return function(){var r=t.existIcon,o=t.prefixCls,S=t.loading;if(r)return b("span",{class:"".concat(o,"-loading-icon")},[b(at,null,null)]);var v=!!S;return b(Tt,{name:"".concat(o,"-loading-icon-motion"),onBeforeEnter:st,onEnter:ct,onAfterEnter:dt,onBeforeLeave:ct,onLeave:function(d){setTimeout(function(){st(d)})},onAfterLeave:dt},{default:function(){return[v?b("span",{class:"".concat(o,"-loading-icon")},[b(at,null,null)]):null]}})}}});var ft=/^[\u4e00-\u9fa5]{2}$/,vt=ft.test.bind(ft);function G(i){return i==="text"||i==="link"}const Jt=H({compatConfig:{MODE:3},name:"AButton",inheritAttrs:!1,__ANT_BUTTON:!0,props:It(Rt(),{type:"default"}),slots:["icon"],setup:function(t,r){var o=r.slots,S=r.attrs,v=r.emit,k=r.expose,d=X("btn",t),x=d.prefixCls,C=d.autoInsertSpaceInButton,z=d.direction,_=d.size,N=D(null),m=D(void 0),L=!1,E=D(!1),l=D(!1),f=O(function(){return C.value!==!1}),h=O(function(){return St(t.loading)==="object"&&t.loading.delay?t.loading.delay||!0:!!t.loading});yt(h,function(a){clearTimeout(m.value),typeof h.value=="number"?m.value=setTimeout(function(){E.value=a},h.value):E.value=a},{immediate:!0});var B=O(function(){var a,e=t.type,c=t.shape,g=c===void 0?"default":c,p=t.ghost,R=t.block,I=t.danger,T=x.value,j={large:"lg",small:"sm",middle:void 0},F=_.value,U=F&&j[F]||"";return a={},y(a,"".concat(T),!0),y(a,"".concat(T,"-").concat(e),e),y(a,"".concat(T,"-").concat(g),g!=="default"&&g),y(a,"".concat(T,"-").concat(U),U),y(a,"".concat(T,"-loading"),E.value),y(a,"".concat(T,"-background-ghost"),p&&!G(e)),y(a,"".concat(T,"-two-chinese-chars"),l.value&&f.value),y(a,"".concat(T,"-block"),R),y(a,"".concat(T,"-dangerous"),!!I),y(a,"".concat(T,"-rtl"),z.value==="rtl"),a}),P=function(){var e=N.value;if(!(!e||C.value===!1)){var c=e.textContent;L&&vt(c)?l.value||(l.value=!0):l.value&&(l.value=!1)}},s=function(e){if(E.value||t.disabled){e.preventDefault();return}v("click",e)},n=function(e,c){var g=c?" ":"";if(e.type===kt){var p=e.children.trim();return vt(p)&&(p=p.split("").join(g)),b("span",null,[p])}return e};xt(function(){Ct(!(t.ghost&&G(t.type)),"Button","`link` or `text` button can't be a `ghost` button.")}),mt(P),Nt(P),pt(function(){m.value&&clearTimeout(m.value)});var u=function(){var e;(e=N.value)===null||e===void 0||e.focus()},A=function(){var e;(e=N.value)===null||e===void 0||e.blur()};return k({focus:u,blur:A}),function(){var a,e,c=t.icon,g=c===void 0?(a=o.icon)===null||a===void 0?void 0:a.call(o):c,p=At((e=o.default)===null||e===void 0?void 0:e.call(o));L=p.length===1&&!g&&!G(t.type);var R=t.type,I=t.htmlType,T=t.disabled,j=t.href,F=t.title,U=t.target,bt=t.onMousedown,Et=E.value?"loading":g,q=w(w({},S),{},{title:F,disabled:T,class:[B.value,S.class,y({},"".concat(x.value,"-icon-only"),p.length===0&&!!Et)],onClick:s,onMousedown:bt});T||delete q.disabled;var Y=g&&!E.value?g:b(jt,{existIcon:!!g,prefixCls:x.value,loading:!!E.value},null),Z=p.map(function(nt){return n(nt,L&&f.value)});if(j!==void 0)return b("a",w(w({},q),{},{href:j,target:U,ref:N}),[Y,Z]);var tt=b("button",w(w({},q),{},{ref:N,type:I}),[Y,Z]);return G(R)?tt:b($t,{ref:"wave",disabled:!!E.value},{default:function(){return[tt]}})}}});var Ft={small:8,middle:16,large:24},Ut=function(){return{prefixCls:String,size:{type:[String,Number,Array]},direction:Q.oneOf(it("horizontal","vertical")).def("horizontal"),align:Q.oneOf(it("start","end","center","baseline")),wrap:{type:Boolean,default:void 0}}};function Vt(i){return typeof i=="string"?Ft[i]:i||0}var Gt=H({compatConfig:{MODE:3},name:"ASpace",props:Ut(),slots:["split"],setup:function(t,r){var o=r.slots,S=X("space",t),v=S.prefixCls,k=S.space,d=S.direction,x=Mt(),C=O(function(){var l,f,h;return(l=(f=t.size)!==null&&f!==void 0?f:(h=k.value)===null||h===void 0?void 0:h.size)!==null&&l!==void 0?l:"small"}),z=D(),_=D();yt(C,function(){var l=(Array.isArray(C.value)?C.value:[C.value,C.value]).map(function(h){return Vt(h)}),f=_t(l,2);z.value=f[0],_.value=f[1]},{immediate:!0});var N=O(function(){return t.align===void 0&&t.direction==="horizontal"?"center":t.align}),m=O(function(){var l;return zt(v.value,"".concat(v.value,"-").concat(t.direction),(l={},y(l,"".concat(v.value,"-rtl"),d.value==="rtl"),y(l,"".concat(v.value,"-align-").concat(N.value),N.value),l))}),L=O(function(){return d.value==="rtl"?"marginLeft":"marginRight"}),E=O(function(){var l={};return x.value&&(l.columnGap="".concat(z.value,"px"),l.rowGap="".concat(_.value,"px")),w(w({},l),t.wrap&&{flexWrap:"wrap",marginBottom:"".concat(-_.value,"px")})});return function(){var l,f,h=t.wrap,B=t.direction,P=B===void 0?"horizontal":B,s=(l=o.default)===null||l===void 0?void 0:l.call(o),n=Lt(s),u=n.length;if(u===0)return null;var A=(f=o.split)===null||f===void 0?void 0:f.call(o),a="".concat(v.value,"-item"),e=z.value,c=u-1;return b("div",{class:m.value,style:E.value},[n.map(function(g,p){var R=s.indexOf(g),I={};return x.value||(P==="vertical"?p<c&&(I={marginBottom:"".concat(e/(A?2:1),"px")}):I=w(w({},p<c&&y({},L.value,"".concat(e/(A?2:1),"px"))),h&&{paddingBottom:"".concat(_.value,"px")})),b(Bt,{key:R},[b("div",{class:a,style:I},[g]),p<c&&A&&b("span",{class:"".concat(a,"-split"),style:I},[A])])})])}}});const Kt=wt(Gt);export{Jt as B,Kt as _};
