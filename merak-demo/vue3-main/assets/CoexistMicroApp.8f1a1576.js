import{b as Q,t as W,d as z,e as X,r,g as D,f as Y,_,h as n,C as Z,i as ee,j as ae,k as te,l as ne,v as oe,m as L,T as se,P as y,p as le,I as ce,q as ue,E as ie,s as re,x as pe,y as fe,z as ve,A as j,B as de,D as _e,w as me,o as u,c as i,F as s,G as ye,H as C,J as $,$ as Ce,K as ge,L as he,N as Ae,O as xe,Q as Ee}from"./index.4960f5df.js";import{_ as we}from"./Vue2.vue_vue_type_script_setup_true_lang.ddc8225a.js";import{_ as Fe}from"./React.vue_vue_type_script_setup_true_lang.139cf0d2.js";import{_ as ke}from"./Vite.vue_vue_type_script_setup_true_lang.b70ee629.js";var Ie={success:le,info:ce,error:ue,warning:ie},be={success:re,info:pe,error:fe,warning:ve},Ve=W("success","info","warning","error"),Be=function(){return{type:y.oneOf(Ve),closable:{type:Boolean,default:void 0},closeText:y.any,message:y.any,description:y.any,afterClose:Function,showIcon:{type:Boolean,default:void 0},prefixCls:String,banner:{type:Boolean,default:void 0},icon:y.any,closeIcon:y.any,onClose:Function}},De=z({compatConfig:{MODE:3},name:"AAlert",inheritAttrs:!1,props:Be(),setup:function(t,d){var p=d.slots,m=d.emit,f=d.attrs,g=d.expose,F=X("alert",t),P=F.prefixCls,h=F.direction,v=r(!1),A=r(!1),x=r(),k=function(e){e.preventDefault();var c=x.value;c.style.height="".concat(c.offsetHeight,"px"),c.style.height="".concat(c.offsetHeight,"px"),v.value=!0,m("close",e)},l=function(){var e;v.value=!1,A.value=!0,(e=t.afterClose)===null||e===void 0||e.call(t)};g({animationEnd:l});var T=r({});return function(){var o,e,c=t.banner,I=t.closeIcon,M=I===void 0?(o=p.closeIcon)===null||o===void 0?void 0:o.call(p):I,S=t.closable,E=t.type,w=t.showIcon,O=D(p,t,"closeText"),b=D(p,t,"description"),R=D(p,t,"message"),V=D(p,t,"icon");w=c&&w===void 0?!0:w,E=c&&E===void 0?"warning":E||"info";var U=(b?be:Ie)[E]||null;O&&(S=!0);var a=P.value,q=Y(a,(e={},_(e,"".concat(a,"-").concat(E),!0),_(e,"".concat(a,"-closing"),v.value),_(e,"".concat(a,"-with-description"),!!b),_(e,"".concat(a,"-no-icon"),!w),_(e,"".concat(a,"-banner"),!!c),_(e,"".concat(a,"-closable"),S),_(e,"".concat(a,"-rtl"),h.value==="rtl"),e)),G=S?n("button",{type:"button",onClick:k,class:"".concat(a,"-close-icon"),tabindex:0},[O?n("span",{class:"".concat(a,"-close-text")},[O]):M===void 0?n(Z,null,null):M]):null,J=V&&(ee(V)?ae(V,{class:"".concat(a,"-icon")}):n("span",{class:"".concat(a,"-icon")},[V]))||n(U,{class:"".concat(a,"-icon")},null),K=te("".concat(a,"-motion"),{appear:!1,css:!0,onAfterLeave:l,onBeforeLeave:function(B){B.style.maxHeight="".concat(B.offsetHeight,"px")},onLeave:function(B){B.style.maxHeight="0px"}});return A.value?null:n(se,K,{default:function(){return[ne(n("div",L(L({role:"alert"},f),{},{style:[f.style,T.value],class:[f.class,q],"data-show":!v.value,ref:x}),[w?J:null,n("div",{class:"".concat(a,"-content")},[R?n("div",{class:"".concat(a,"-message")},[R]):null,b?n("div",{class:"".concat(a,"-description")},[b]):null]),G]),[[oe,!v.value]])]}})}}});const Pe=Q(De);const Te={name:"CoexistMicroApp"},Se=z({...Te,setup(N){const t=r(null),d=r(null),p=r(null),m=r(!0),f=r(!0),g=r(!0),{apps:F}=j(de()),{user:P}=j(_e());me(F.value,k=>{k.forEach(l=>{l.name==="vue2App"?t.value=l:l.name==="reactApp"?d.value=l:l.name==="viteApp"&&(p.value=l)})},{immediate:!0});async function h(){Ce("emitter").emit("changeUser",{user:ge(P.value)})}function v(){m.value=!m.value}function A(){f.value=!f.value}function x(){g.value=!g.value}return(k,l)=>{const T=Pe,o=he,e=Ae,c=xe,I=ye;return u(),i(I,{direction:"vertical",size:40,class:"box"},{default:s(()=>[n(T,{message:"\u5DE6\u4E0A\u4FA7\u5E94\u7528\u4E3AVue2\u5B50\u5E94\u7528\uFF0C\u53F3\u4E0A\u4FA7\u5E94\u7528\u4E3AReact18\u5B50\u5E94\u7528\uFF0C\u5DE6\u4E0B\u4FA7\u4E3Avite\u5B50\u5E94\u7528\u3002",type:"success"}),n(c,{gutter:20},{default:s(()=>[n(e,{span:12},{default:s(()=>[m.value?(u(),i(o,{key:0,type:"primary",danger:"",onClick:v},{default:s(()=>[C(" \u5378\u8F7DVue2\u5E94\u7528 ")]),_:1})):(u(),i(o,{key:1,type:"primary",onClick:v},{default:s(()=>[C(" \u52A0\u8F7DVue2\u5E94\u7528 ")]),_:1})),m.value&&t.value?(u(),i(we,{key:2,class:"app",routePath:"/",afterMount:h})):$("",!0)]),_:1}),n(e,{span:12},{default:s(()=>[f.value?(u(),i(o,{key:0,type:"primary",danger:"",onClick:A},{default:s(()=>[C(" \u5378\u8F7DReact18\u5E94\u7528 ")]),_:1})):(u(),i(o,{key:1,type:"primary",onClick:A},{default:s(()=>[C(" \u52A0\u8F7DReact18\u5E94\u7528 ")]),_:1})),f.value&&d.value?(u(),i(Fe,{key:2,class:"app",routePath:"/",afterMount:h})):$("",!0)]),_:1}),n(e,{span:12},{default:s(()=>[f.value?(u(),i(o,{key:0,type:"primary",danger:"",onClick:x},{default:s(()=>[C(" \u5378\u8F7DVite\u5E94\u7528 ")]),_:1})):(u(),i(o,{key:1,type:"primary",onClick:x},{default:s(()=>[C(" \u52A0\u8F7DVite\u5E94\u7528 ")]),_:1})),g.value&&p.value?(u(),i(ke,{key:2,class:"app",routePath:"/",afterMount:h})):$("",!0)]),_:1})]),_:1})]),_:1})}}});const Re=Ee(Se,[["__scopeId","data-v-aa8a3936"]]);export{Re as default};
//# sourceMappingURL=CoexistMicroApp.8f1a1576.js.map