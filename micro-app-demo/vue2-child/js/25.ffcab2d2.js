"use strict";(self["webpackJsonp_@micro-app-demo/vue2-child"]=self["webpackJsonp_@micro-app-demo/vue2-child"]||[]).push([[25],{92820:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(23630),o=i(r),l=n(92110),a=i(l),s=n(52881);function i(e){return e&&e.__esModule?e:{default:e}}var u={child:a["default"].any,bordered:a["default"].bool,colon:a["default"].bool,type:a["default"].oneOf(["label","content"]),layout:a["default"].oneOf(["horizontal","vertical"])},d={functional:!0,props:u,render:function(e,t){var n,r=t.props,l=r.child,a=r.bordered,i=r.colon,u=r.type,d=r.layout,f=(0,s.getOptionProps)(l),c=f.prefixCls,p=f.span,m=void 0===p?1:p,v=t.data.key,h=(0,s.getComponentFromProp)(l,"label"),b=(0,s.getSlots)(l),y={attrs:{},class:[c+"-item-label",(n={},(0,o["default"])(n,c+"-item-colon",i),(0,o["default"])(n,c+"-item-no-label",!h),n)],key:v+"-label"};return"vertical"===d&&(y.attrs.colSpan=2*m-1),a?"label"===u?e("th",y,[h]):e("td",{class:c+"-item-content",key:v+"-content",attrs:{colSpan:2*m-1}},[b["default"]]):e("td",{attrs:{colSpan:m},class:c+"-item"},"vertical"===d?"content"===u?[e("span",{class:c+"-item-content",key:v+"-content"},[b["default"]])]:[e("span",{class:[c+"-item-label",(0,o["default"])({},c+"-item-colon",i)],key:v+"-label"},[h])]:[e("span",y,[h]),e("span",{class:c+"-item-content",key:v+"-content"},[b["default"]])])}};t["default"]=d},46725:function(e,t,n){n(96005);var r=n(23630),o=C(r),l=n(37375),a=C(l),s=n(50755),i=C(s),u=n(2735),d=C(u),f=n(34575),c=n(92820),p=C(c),m=n(92110),v=C(m),h=n(52881),b=n(85597),y=C(b),g=n(27012),x=C(g),_=n(32902);function C(e){return e&&e.__esModule?e:{default:e}}var P={prefixCls:v["default"].string,label:v["default"].any,span:v["default"].number};function k(e){var t=e;return void 0===e?t=[]:Array.isArray(e)||(t=[e]),t}var Z={name:"ADescriptionsItem",props:(0,h.initDefaultProps)(P,{span:1})},O={prefixCls:v["default"].string,bordered:v["default"].bool,size:v["default"].oneOf(["default","middle","small"]).def("default"),title:v["default"].any,column:v["default"].oneOfType([v["default"].number,v["default"].object]),layout:v["default"].oneOf(["horizontal","vertical"]),colon:v["default"].bool},w=function(e,t){var n=[],r=null,o=void 0,l=k(e);return l.forEach((function(e,a){var s=(0,h.getOptionProps)(e),u=e;r||(o=t,r=[],n.push(r));var d=a===l.length-1,f=!0;d&&(f=!s.span||s.span===o,u=(0,_.cloneElement)(u,{props:{span:o}}));var c=s.span,p=void 0===c?1:c;r.push(u),o-=p,o<=0&&(r=null,(0,i["default"])(0===o&&f,"Descriptions","Sum of column `span` in a line exceeds `column` of Descriptions."))})),n},I={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1},z={name:"ADescriptions",Item:Z,mixins:[y["default"]],inject:{configProvider:{default:function(){return f.ConfigConsumerProps}}},props:(0,h.initDefaultProps)(O,{column:I}),data:function(){return{screens:{},token:void 0}},methods:{getColumn:function(){var e=this.$props.column;if("object"===("undefined"===typeof e?"undefined":(0,a["default"])(e)))for(var t=0;t<u.responsiveArray.length;t++){var n=u.responsiveArray[t];if(this.screens[n]&&void 0!==e[n])return e[n]||I[n]}return"number"===typeof e?e:3},renderRow:function(e,t,n,r,o,l){var a=n.prefixCls,s=this.$createElement,i=function(e,t,n){return s(p["default"],{attrs:{child:e,bordered:r,colon:l,type:t,layout:o},key:t+"-"+(e.key||n)})},u=[],d=[];return k(e).forEach((function(e,t){u.push(i(e,"label",t)),"vertical"===o?d.push(i(e,"content",t)):r&&u.push(i(e,"content",t))})),"vertical"===o?[s("tr",{class:a+"-row",key:"label-"+t},[u]),s("tr",{class:a+"-row",key:"content-"+t},[d])]:s("tr",{class:a+"-row",key:t},[u])}},mounted:function(){var e=this,t=this.$props.column;this.token=d["default"].subscribe((function(n){"object"===("undefined"===typeof t?"undefined":(0,a["default"])(t))&&e.setState({screens:n})}))},beforeDestroy:function(){d["default"].unsubscribe(this.token)},render:function(){var e,t=this,n=arguments[0],r=this.$props,l=r.prefixCls,a=r.size,s=r.bordered,i=void 0!==s&&s,u=r.layout,d=void 0===u?"horizontal":u,f=r.colon,c=void 0===f||f,p=(0,h.getComponentFromProp)(this,"title")||null,m=this.configProvider.getPrefixCls,v=m("descriptions",l),b=this.getColumn(),y=this.$slots["default"],g=k(y).map((function(e){return(0,h.isValidElement)(e)?(0,_.cloneElement)(e,{props:{prefixCls:v}}):null})).filter((function(e){return e})),x=w(g,b);return n("div",{class:[v,(e={},(0,o["default"])(e,v+"-"+a,"default"!==a),(0,o["default"])(e,v+"-bordered",!!i),e)]},[p&&n("div",{class:v+"-title"},[p]),n("div",{class:v+"-view"},[n("table",[n("tbody",[x.map((function(e,n){return t.renderRow(e,n,{prefixCls:v},i,d,c)}))])])])])},install:function(e){e.use(x["default"]),e.component(z.name,z),e.component(z.Item.name,z.Item)}};t.ZP=z},46487:function(e,t,n){n(95778),n(16692)},99170:function(e,t,n){var r=n(23630),o=d(r),l=n(92110),a=d(l),s=n(34575),i=n(27012),u=d(i);function d(e){return e&&e.__esModule?e:{default:e}}var f={name:"ADivider",props:{prefixCls:a["default"].string,type:a["default"].oneOf(["horizontal","vertical",""]).def("horizontal"),dashed:a["default"].bool,orientation:a["default"].oneOf(["left","right","center"])},inject:{configProvider:{default:function(){return s.ConfigConsumerProps}}},render:function(){var e,t=arguments[0],n=this.prefixCls,r=this.type,l=this.$slots,a=this.dashed,s=this.orientation,i=void 0===s?"center":s,u=this.configProvider.getPrefixCls,d=u("divider",n),f=i.length>0?"-"+i:i,c=(e={},(0,o["default"])(e,d,!0),(0,o["default"])(e,d+"-"+r,!0),(0,o["default"])(e,d+"-with-text"+f,l["default"]),(0,o["default"])(e,d+"-dashed",!!a),e);return t("div",{class:c,attrs:{role:"separator"}},[l["default"]&&t("span",{class:d+"-inner-text"},[l["default"]])])},install:function(e){e.use(u["default"]),e.component(f.name,f)}};t.Z=f},4778:function(e,t,n){n(95778),n(24147)},16692:function(e,t,n){n.r(t)},24147:function(e,t,n){n.r(t)},10025:function(e,t,n){n.r(t),n.d(t,{default:function(){return C}});var r=function(){var e=this,t=e._self._c;return t("a-space",{staticClass:"box",attrs:{direction:"vertical",size:40}},[t("a-divider",{staticClass:"title"},[t("h1",[e._v("Vue2子应用页面")])]),t("user-info"),t("a-divider",{staticClass:"title"},[t("h2",[e._v("Vue2子应用向主应用通信")])]),t("message-trigger"),t("a-divider",{staticClass:"title"},[t("h2",[e._v("Vue2子应用Counter")])]),t("counter")],1)},o=[],l=(n(47431),n(57287)),a=(n(4778),n(99170)),s=function(){var e=this,t=e._self._c;return e.user?t("div",[t("a-descriptions",{attrs:{title:"来自主应用的数据 User Store Info",bordered:"",column:e.column}},[t("a-descriptions-item",{attrs:{label:"UserName"}},[e._v(e._s(e.user.name))]),t("a-descriptions-item",{attrs:{label:"Age"}},[e._v(e._s(e.user.age))]),t("a-descriptions-item",{attrs:{label:"Gender"}},[e._v(e._s(e.user.gender))]),t("a-descriptions-item",{attrs:{label:"Telephone"}},[e._v(e._s(e.user.phone))])],1)],1):e._e()},i=[],u=(n(46487),n(46725)),d=n(86603),f=n(43334),c={name:"UserInfo",data(){return{column:{xxl:3,xl:2,lg:2,md:2,sm:1,xs:1}}},computed:{...(0,f.rn)(d.L,["user"])},components:{[u.ZP.name]:u.ZP,[u.ZP.Item.name]:u.ZP.Item}},p=c,m=n(3419),v=(0,m.Z)(p,s,i,!1,null,"51e0f0f8",null),h=v.exports,b=n(44982),y=n(32501),g={name:"User",components:{MessageTrigger:y.Z,Counter:b.Z,UserInfo:h,[a.Z.name]:a.Z,[l.ZP.name]:l.ZP}},x=g,_=(0,m.Z)(x,r,o,!1,null,"cf296f60",null),C=_.exports}}]);
//# sourceMappingURL=25.ffcab2d2.js.map