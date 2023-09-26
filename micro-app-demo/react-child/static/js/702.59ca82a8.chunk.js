"use strict";(window["webpackJsonp_@micro-app-demo/react-child"]=window["webpackJsonp_@micro-app-demo/react-child"]||[]).push([[702],{1942:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});n(661);var a=n(2579),r=(n(5075),n(5415)),i=(n(4670),n(2542)),l=n(4832);function o(){var e=[{url:"/main/communication-test",label:"\u8df3\u8f6c\u81f3\u4e3b\u5e94\u7528 page1"},{url:"/vue2App/communication-test",label:"\u8df3\u8f6c\u81f3Vue2\u5b50\u5e94\u7528"},{url:"/reactApp/communication-test",label:"\u8df3\u8f6c\u81f3React18\u5b50\u5e94\u7528"},{url:"/viteApp/communication-test",label:"\u8df3\u8f6c\u81f3Vite\u5b50\u5e94\u7528"}].map((function(e){return(0,l.jsx)(i.default,{type:"primary",onClick:function(){return function(e){var t,n,a,r=e.url;null===(t=window)||void 0===t||null===(n=t.microApp.getData())||void 0===n||null===(a=n.router)||void 0===a||a.push(r)}(e)},children:e.label},e.url)}));return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.Z.Title,{children:"React18\u5b50\u5e94\u7528\u5185\u63a7\u5236\u8df3\u8f6c"}),(0,l.jsx)(a.default,{size:20,children:e})]})}},6530:function(e,t,n){var a=n(3994).default,r=n(2566).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.className,n=e.direction,a=e.index,r=e.marginDirection,u=e.children,d=e.split,f=e.wrap,s=o.useContext(c.SpaceContext),p=s.horizontalSize,m=s.verticalSize,v=s.latestIndex,w=s.supportFlexGap,y={};w||("vertical"===n?a<v&&(y={marginBottom:p/(d?2:1)}):y=(0,l.default)((0,l.default)({},a<v&&(0,i.default)({},r,p/(d?2:1))),f&&{paddingBottom:m}));if(null===u||void 0===u)return null;return o.createElement(o.Fragment,null,o.createElement("div",{className:t,style:y},u),a<v&&d&&o.createElement("span",{className:"".concat(t,"-split"),style:y},d))};var i=r(n(2121)),l=r(n(3251)),o=a(n(9560)),c=n(2579)},2579:function(e,t,n){var a=n(3994).default,r=n(2566).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.SpaceContext=void 0;var i=r(n(3251)),l=r(n(2121)),o=r(n(6634)),c=r(n(4642)),u=r(n(4838)),d=a(n(9560)),f=n(5551),s=r(n(8168)),p=r(n(6530)),m=r(n(7669)),v=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},w=d.createContext({latestIndex:0,horizontalSize:0,verticalSize:0,supportFlexGap:!1});t.SpaceContext=w;var y={small:8,middle:16,large:24};var g=function(e){var t,n=d.useContext(f.ConfigContext),a=n.getPrefixCls,r=n.space,m=n.direction,g=e.size,x=void 0===g?(null===r||void 0===r?void 0:r.size)||"small":g,h=e.align,b=e.className,z=e.children,C=e.direction,O=void 0===C?"horizontal":C,j=e.prefixCls,S=e.split,A=e.style,E=e.wrap,F=void 0!==E&&E,P=v(e,["size","align","className","children","direction","prefixCls","split","style","wrap"]),_=(0,s.default)(),N=d.useMemo((function(){return(Array.isArray(x)?x:[x,x]).map((function(e){return function(e){return"string"===typeof e?y[e]:e||0}(e)}))}),[x]),k=(0,o.default)(N,2),M=k[0],G=k[1],I=(0,u.default)(z,{keepEmpty:!0}),B=void 0===h&&"horizontal"===O?"center":h,D=a("space",j),R=(0,c.default)(D,"".concat(D,"-").concat(O),(t={},(0,l.default)(t,"".concat(D,"-rtl"),"rtl"===m),(0,l.default)(t,"".concat(D,"-align-").concat(B),B),t),b),T="".concat(D,"-item"),q="rtl"===m?"marginLeft":"marginRight",J=0,V=I.map((function(e,t){null!==e&&void 0!==e&&(J=t);var n=e&&e.key||"".concat(T,"-").concat(t);return d.createElement(p.default,{className:T,key:n,direction:O,index:t,marginDirection:q,split:S,wrap:F},e)})),L=d.useMemo((function(){return{horizontalSize:M,verticalSize:G,latestIndex:J,supportFlexGap:_}}),[M,G,J,_]);if(0===I.length)return null;var W={};return F&&(W.flexWrap="wrap",_||(W.marginBottom=-G)),_&&(W.columnGap=M,W.rowGap=G),d.createElement("div",(0,i.default)({className:R,style:(0,i.default)((0,i.default)({},W),A)},P),d.createElement(w.Provider,{value:L},V))};g.Compact=m.default;var x=g;t.default=x},661:function(e,t,n){n(1513),n(7066)},6959:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){return+setTimeout(e,16)},a=function(e){return clearTimeout(e)};"undefined"!==typeof window&&"requestAnimationFrame"in window&&(n=function(e){return window.requestAnimationFrame(e)},a=function(e){return window.cancelAnimationFrame(e)});var r=0,i=new Map;function l(e){i.delete(e)}var o=function(e){var t=r+=1;return function a(r){if(0===r)l(t),e();else{var o=n((function(){a(r-1)}));i.set(t,o)}}(arguments.length>1&&void 0!==arguments[1]?arguments[1]:1),t};o.cancel=function(e){var t=i.get(e);return l(t),a(t)};var c=o;t.default=c},7066:function(e,t,n){n.r(t)}}]);
//# sourceMappingURL=702.59ca82a8.chunk.js.map