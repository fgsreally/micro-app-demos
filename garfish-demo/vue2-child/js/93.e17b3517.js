"use strict";(window["webpackChunk_garfish_demo_vue2_child"]=window["webpackChunk_garfish_demo_vue2_child"]||[]).push([[93],{2037:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(20167),o=i(r),a=n(81761),l=i(a),s=n(73797);function i(e){return e&&e.__esModule?e:{default:e}}var u={child:l["default"].any,bordered:l["default"].bool,colon:l["default"].bool,type:l["default"].oneOf(["label","content"]),layout:l["default"].oneOf(["horizontal","vertical"])},d={functional:!0,props:u,render:function(e,t){var n,r=t.props,a=r.child,l=r.bordered,i=r.colon,u=r.type,d=r.layout,c=(0,s.getOptionProps)(a),f=c.prefixCls,p=c.span,m=void 0===p?1:p,v=t.data.key,h=(0,s.getComponentFromProp)(a,"label"),b=(0,s.getSlots)(a),g={attrs:{},class:[f+"-item-label",(n={},(0,o["default"])(n,f+"-item-colon",i),(0,o["default"])(n,f+"-item-no-label",!h),n)],key:v+"-label"};return"vertical"===d&&(g.attrs.colSpan=2*m-1),l?"label"===u?e("th",g,[h]):e("td",{class:f+"-item-content",key:v+"-content",attrs:{colSpan:2*m-1}},[b["default"]]):e("td",{attrs:{colSpan:m},class:f+"-item"},"vertical"===d?"content"===u?[e("span",{class:f+"-item-content",key:v+"-content"},[b["default"]])]:[e("span",{class:[f+"-item-label",(0,o["default"])({},f+"-item-colon",i)],key:v+"-label"},[h])]:[e("span",g,[h]),e("span",{class:f+"-item-content",key:v+"-content"},[b["default"]])])}};t["default"]=d},41493:function(e,t,n){n(17244);var r=n(20167),o=x(r),a=n(58537),l=x(a),s=n(21601),i=x(s),u=n(65664),d=x(u),c=n(6708),f=n(2037),p=x(f),m=n(81761),v=x(m),h=n(73797),b=n(63148),g=x(b),y=n(58327),_=x(y),C=n(97458);function x(e){return e&&e.__esModule?e:{default:e}}var P={prefixCls:v["default"].string,label:v["default"].any,span:v["default"].number};function k(e){var t=e;return void 0===e?t=[]:Array.isArray(e)||(t=[e]),t}var Z={name:"ADescriptionsItem",props:(0,h.initDefaultProps)(P,{span:1})},w={prefixCls:v["default"].string,bordered:v["default"].bool,size:v["default"].oneOf(["default","middle","small"]).def("default"),title:v["default"].any,column:v["default"].oneOfType([v["default"].number,v["default"].object]),layout:v["default"].oneOf(["horizontal","vertical"]),colon:v["default"].bool},O=function(e,t){var n=[],r=null,o=void 0,a=k(e);return a.forEach((function(e,l){var s=(0,h.getOptionProps)(e),u=e;r||(o=t,r=[],n.push(r));var d=l===a.length-1,c=!0;d&&(c=!s.span||s.span===o,u=(0,C.cloneElement)(u,{props:{span:o}}));var f=s.span,p=void 0===f?1:f;r.push(u),o-=p,o<=0&&(r=null,(0,i["default"])(0===o&&c,"Descriptions","Sum of column `span` in a line exceeds `column` of Descriptions."))})),n},I={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1},z={name:"ADescriptions",Item:Z,mixins:[g["default"]],inject:{configProvider:{default:function(){return c.ConfigConsumerProps}}},props:(0,h.initDefaultProps)(w,{column:I}),data:function(){return{screens:{},token:void 0}},methods:{getColumn:function(){var e=this.$props.column;if("object"===("undefined"===typeof e?"undefined":(0,l["default"])(e)))for(var t=0;t<u.responsiveArray.length;t++){var n=u.responsiveArray[t];if(this.screens[n]&&void 0!==e[n])return e[n]||I[n]}return"number"===typeof e?e:3},renderRow:function(e,t,n,r,o,a){var l=n.prefixCls,s=this.$createElement,i=function(e,t,n){return s(p["default"],{attrs:{child:e,bordered:r,colon:a,type:t,layout:o},key:t+"-"+(e.key||n)})},u=[],d=[];return k(e).forEach((function(e,t){u.push(i(e,"label",t)),"vertical"===o?d.push(i(e,"content",t)):r&&u.push(i(e,"content",t))})),"vertical"===o?[s("tr",{class:l+"-row",key:"label-"+t},[u]),s("tr",{class:l+"-row",key:"content-"+t},[d])]:s("tr",{class:l+"-row",key:t},[u])}},mounted:function(){var e=this,t=this.$props.column;this.token=d["default"].subscribe((function(n){"object"===("undefined"===typeof t?"undefined":(0,l["default"])(t))&&e.setState({screens:n})}))},beforeDestroy:function(){d["default"].unsubscribe(this.token)},render:function(){var e,t=this,n=arguments[0],r=this.$props,a=r.prefixCls,l=r.size,s=r.bordered,i=void 0!==s&&s,u=r.layout,d=void 0===u?"horizontal":u,c=r.colon,f=void 0===c||c,p=(0,h.getComponentFromProp)(this,"title")||null,m=this.configProvider.getPrefixCls,v=m("descriptions",a),b=this.getColumn(),g=this.$slots["default"],y=k(g).map((function(e){return(0,h.isValidElement)(e)?(0,C.cloneElement)(e,{props:{prefixCls:v}}):null})).filter((function(e){return e})),_=O(y,b);return n("div",{class:[v,(e={},(0,o["default"])(e,v+"-"+l,"default"!==l),(0,o["default"])(e,v+"-bordered",!!i),e)]},[p&&n("div",{class:v+"-title"},[p]),n("div",{class:v+"-view"},[n("table",[n("tbody",[_.map((function(e,n){return t.renderRow(e,n,{prefixCls:v},i,d,f)}))])])])])},install:function(e){e.use(_["default"]),e.component(z.name,z),e.component(z.Item.name,z.Item)}};t.ZP=z},14728:function(e,t,n){n(16830),n(4603)},38554:function(e,t,n){var r=n(20167),o=d(r),a=n(81761),l=d(a),s=n(6708),i=n(58327),u=d(i);function d(e){return e&&e.__esModule?e:{default:e}}var c={name:"ADivider",props:{prefixCls:l["default"].string,type:l["default"].oneOf(["horizontal","vertical",""]).def("horizontal"),dashed:l["default"].bool,orientation:l["default"].oneOf(["left","right","center"])},inject:{configProvider:{default:function(){return s.ConfigConsumerProps}}},render:function(){var e,t=arguments[0],n=this.prefixCls,r=this.type,a=this.$slots,l=this.dashed,s=this.orientation,i=void 0===s?"center":s,u=this.configProvider.getPrefixCls,d=u("divider",n),c=i.length>0?"-"+i:i,f=(e={},(0,o["default"])(e,d,!0),(0,o["default"])(e,d+"-"+r,!0),(0,o["default"])(e,d+"-with-text"+c,a["default"]),(0,o["default"])(e,d+"-dashed",!!l),e);return t("div",{class:f,attrs:{role:"separator"}},[a["default"]&&t("span",{class:d+"-inner-text"},[a["default"]])])},install:function(e){e.use(u["default"]),e.component(c.name,c)}};t.Z=c},71901:function(e,t,n){n(16830),n(12592)},4603:function(e,t,n){n.r(t)},12592:function(e,t,n){n.r(t)},50093:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var r=function(){var e=this,t=e._self._c;return t("a-space",{staticClass:"box",attrs:{direction:"vertical",size:40}},[t("a-divider",{staticClass:"title"},[t("h1",[e._v("Vue2子应用页面")])]),t("user-info"),t("a-divider",{staticClass:"title"},[t("h2",[e._v("Vue2子应用向主应用通信")])]),t("message-trigger"),t("a-divider",{staticClass:"title"},[t("h2",[e._v("Vue2子应用Counter")])]),t("counter")],1)},o=[],a=(n(36751),n(7286)),l=(n(71901),n(38554)),s=function(){var e=this,t=e._self._c;return e.user?t("div",[t("a-descriptions",{attrs:{title:"来自主应用的数据 User Store Info",bordered:"",column:e.column}},[t("a-descriptions-item",{attrs:{label:"UserName"}},[e._v(e._s(e.user.name))]),t("a-descriptions-item",{attrs:{label:"Age"}},[e._v(e._s(e.user.age))]),t("a-descriptions-item",{attrs:{label:"Gender"}},[e._v(e._s(e.user.gender))]),t("a-descriptions-item",{attrs:{label:"Telephone"}},[e._v(e._s(e.user.phone))])],1)],1):e._e()},i=[],u=(n(14728),n(41493)),d=n(39372),c=n(94948),f={name:"UserInfo",data(){return{column:{xxl:3,xl:2,lg:2,md:2,sm:1,xs:1}}},computed:{...(0,c.rn)(d.L,["user"])},components:{[u.ZP.name]:u.ZP,[u.ZP.Item.name]:u.ZP.Item}},p=f,m=n(12410),v=(0,m.Z)(p,s,i,!1,null,"d864e07c",null),h=v.exports,b=n(74052),g=n(56878),y={name:"User",components:{MessageTrigger:g.Z,Counter:b.Z,UserInfo:h,[l.Z.name]:l.Z,[a.ZP.name]:a.ZP}},_=y,C=(0,m.Z)(_,r,o,!1,null,"0bac77ca",null),x=C.exports}}]);
//# sourceMappingURL=93.e17b3517.js.map