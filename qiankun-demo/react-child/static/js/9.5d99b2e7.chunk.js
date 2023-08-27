"use strict";(window["webpackJsonp_@qiankun-demo/react-child"]=window["webpackJsonp_@qiankun-demo/react-child"]||[]).push([[9],{16613:function(e,t,n){n(59428),n(60770)},53479:function(e,t,n){var a=n(23448).default,r=n(89283).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(n(40495)),o=r(n(16881)),u=r(n(39220)),i=r(n(94085)),c=r(n(74389)),s=r(n(59061)),f=r(n(62493)),d=a(n(72068)),v=n(43592),p=n(15136),m=n(84305),g=(0,n(27043).tuple)("text","input");var h=function(e){(0,i.default)(n,e);var t=(0,c.default)(n);function n(){return(0,o.default)(this,n),t.apply(this,arguments)}return(0,u.default)(n,[{key:"renderClearIcon",value:function(e){var t,n=this.props,a=n.value,r=n.disabled,o=n.readOnly,u=n.handleReset,i=n.suffix,c=!r&&!o&&a,v="".concat(e,"-clear-icon");return d.createElement(s.default,{onClick:u,onMouseDown:function(e){return e.preventDefault()},className:(0,f.default)((t={},(0,l.default)(t,"".concat(v,"-hidden"),!c),(0,l.default)(t,"".concat(v,"-has-suffix"),!!i),t),v),role:"button"})}},{key:"renderTextAreaWithClearIcon",value:function(e,t,n){var a,r=this.props,o=r.value,u=r.allowClear,i=r.className,c=r.focused,s=r.style,v=r.direction,g=r.bordered,h=r.hidden,x=r.status,b=n.status,C=n.hasFeedback;if(!u)return(0,p.cloneElement)(t,{value:o});var y,w=(0,f.default)("".concat(e,"-affix-wrapper"),"".concat(e,"-affix-wrapper-textarea-with-clear-btn"),(0,m.getStatusClassNames)("".concat(e,"-affix-wrapper"),(0,m.getMergedStatus)(b,x),C),(a={},(0,l.default)(a,"".concat(e,"-affix-wrapper-focused"),c),(0,l.default)(a,"".concat(e,"-affix-wrapper-rtl"),"rtl"===v),(0,l.default)(a,"".concat(e,"-affix-wrapper-borderless"),!g),(0,l.default)(a,"".concat(i),!((y=this.props).addonBefore||y.addonAfter)&&i),a));return d.createElement("span",{className:w,style:s,hidden:h},(0,p.cloneElement)(t,{style:null,value:o}),this.renderClearIcon(e))}},{key:"render",value:function(){var e=this;return d.createElement(v.FormItemInputContext.Consumer,null,(function(t){var n=e.props,a=n.prefixCls,r=n.inputType,l=n.element;if(r===g[0])return e.renderTextAreaWithClearIcon(a,l,t)}))}}]),n}(d.Component),x=h;t.default=x},1064:function(e,t,n){var a=n(23448).default,r=n(89283).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.fixControlledValue=function(e){if("undefined"===typeof e||null===e)return"";return String(e)},t.resolveOnChange=function(e,t,n,a){if(!n)return;var r=t;if("click"===t.type){var l=e.cloneNode(!0);return r=Object.create(t,{target:{value:l},currentTarget:{value:l}}),l.value="",void n(r)}if(void 0!==a)return r=Object.create(t,{target:{value:e},currentTarget:{value:e}}),e.value=a,void n(r);n(r)},t.triggerFocus=function(e,t){if(!e)return;e.focus(t);var n=(t||{}).cursor;if(n){var a=e.value.length;switch(n){case"start":e.setSelectionRange(0,0);break;case"end":e.setSelectionRange(a,a);break;default:e.setSelectionRange(0,a)}}};var l=r(n(40495)),o=r(n(18450)),u=r(n(92115)),i=r(n(59061)),c=r(n(62493)),s=r(n(41916)),f=n(6736),d=a(n(72068)),v=n(24136),p=r(n(24638)),m=r(n(97754)),g=n(43592),h=n(43479),x=n(84305),b=(r(n(29628)),r(n(75671))),C=n(98526),y=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};var w=(0,d.forwardRef)((function(e,t){var n,a,r,w=e.prefixCls,S=e.bordered,E=void 0===S||S,N=e.status,z=e.size,A=e.disabled,Z=e.onBlur,R=e.onFocus,O=e.suffix,P=e.allowClear,k=e.addonAfter,F=e.addonBefore,I=e.className,T=e.onChange,j=y(e,["prefixCls","bordered","status","size","disabled","onBlur","onFocus","suffix","allowClear","addonAfter","addonBefore","className","onChange"]),V=d.default.useContext(v.ConfigContext),B=V.getPrefixCls,M=V.direction,D=V.input,_=B("input",w),H=(0,d.useRef)(null),K=(0,h.useCompactItemContext)(_,M),L=K.compactSize,W=K.compactItemClassnames,q=d.default.useContext(m.default),J=L||z||q,Y=d.default.useContext(p.default),X=null!==A&&void 0!==A?A:Y,G=(0,d.useContext)(g.FormItemInputContext),Q=G.status,U=G.hasFeedback,$=G.feedbackIcon,ee=(0,x.getMergedStatus)(Q,N),te=(0,C.hasPrefixSuffix)(e)||!!U,ne=(0,d.useRef)(te);(0,d.useEffect)((function(){te&&ne.current,ne.current=te}),[te]);var ae,re=(0,b.default)(H,!0),le=(U||O)&&d.default.createElement(d.default.Fragment,null,O,U&&$);return"object"===(0,u.default)(P)&&(null===P||void 0===P?void 0:P.clearIcon)?ae=P:P&&(ae={clearIcon:d.default.createElement(i.default,null)}),d.default.createElement(s.default,(0,o.default)({ref:(0,f.composeRef)(t,H),prefixCls:_,autoComplete:null===D||void 0===D?void 0:D.autoComplete},j,{disabled:X||void 0,onBlur:function(e){re(),null===Z||void 0===Z||Z(e)},onFocus:function(e){re(),null===R||void 0===R||R(e)},suffix:le,allowClear:ae,className:(0,c.default)(I,W),onChange:function(e){re(),null===T||void 0===T||T(e)},addonAfter:k&&d.default.createElement(h.NoCompactStyle,null,d.default.createElement(g.NoFormStyle,{override:!0,status:!0},k)),addonBefore:F&&d.default.createElement(h.NoCompactStyle,null,d.default.createElement(g.NoFormStyle,{override:!0,status:!0},F)),inputClassName:(0,c.default)((n={},(0,l.default)(n,"".concat(_,"-sm"),"small"===J),(0,l.default)(n,"".concat(_,"-lg"),"large"===J),(0,l.default)(n,"".concat(_,"-rtl"),"rtl"===M),(0,l.default)(n,"".concat(_,"-borderless"),!E),n),!te&&(0,x.getStatusClassNames)(_,ee)),affixWrapperClassName:(0,c.default)((a={},(0,l.default)(a,"".concat(_,"-affix-wrapper-sm"),"small"===J),(0,l.default)(a,"".concat(_,"-affix-wrapper-lg"),"large"===J),(0,l.default)(a,"".concat(_,"-affix-wrapper-rtl"),"rtl"===M),(0,l.default)(a,"".concat(_,"-affix-wrapper-borderless"),!E),a),(0,x.getStatusClassNames)("".concat(_,"-affix-wrapper"),ee,U)),wrapperClassName:(0,c.default)((0,l.default)({},"".concat(_,"-group-rtl"),"rtl"===M)),groupClassName:(0,c.default)((r={},(0,l.default)(r,"".concat(_,"-group-wrapper-sm"),"small"===J),(0,l.default)(r,"".concat(_,"-group-wrapper-lg"),"large"===J),(0,l.default)(r,"".concat(_,"-group-wrapper-rtl"),"rtl"===M),r),(0,x.getStatusClassNames)("".concat(_,"-group-wrapper"),ee,U))}))}));t.default=w},28461:function(e,t,n){var a=n(23448).default,r=n(89283).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(n(92115)),o=r(n(40495)),u=r(n(18450)),i=r(n(67738)),c=r(n(58210)),s=r(n(62493)),f=r(n(27774)),d=r(n(14921)),v=r(n(59977)),p=a(n(72068)),m=n(24136),g=r(n(24638)),h=r(n(97754)),x=n(43592),b=n(84305),C=r(n(53479)),y=n(1064),w=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};function S(e,t){return(0,c.default)(e||"").slice(0,t).join("")}function E(e,t,n,a){var r=n;return e?r=S(n,a):(0,c.default)(t||"").length<n.length&&(0,c.default)(n||"").length>a&&(r=t),r}var N=p.forwardRef((function(e,t){var n,a=e.prefixCls,r=e.bordered,N=void 0===r||r,z=e.showCount,A=void 0!==z&&z,Z=e.maxLength,R=e.className,O=e.style,P=e.size,k=e.disabled,F=e.onCompositionStart,I=e.onCompositionEnd,T=e.onChange,j=e.onFocus,V=e.onBlur,B=e.status,M=w(e,["prefixCls","bordered","showCount","maxLength","className","style","size","disabled","onCompositionStart","onCompositionEnd","onChange","onFocus","onBlur","status"]),D=p.useContext(m.ConfigContext),_=D.getPrefixCls,H=D.direction,K=p.useContext(h.default),L=p.useContext(g.default),W=null!==k&&void 0!==k?k:L,q=p.useContext(x.FormItemInputContext),J=q.status,Y=q.hasFeedback,X=q.isFormItemInput,G=q.feedbackIcon,Q=(0,b.getMergedStatus)(J,B),U=p.useRef(null),$=p.useRef(null),ee=p.useState(!1),te=(0,i.default)(ee,2),ne=te[0],ae=te[1],re=p.useState(!1),le=(0,i.default)(re,2),oe=le[0],ue=le[1],ie=p.useRef(),ce=p.useRef(0),se=(0,d.default)(M.defaultValue,{value:M.value}),fe=(0,i.default)(se,2),de=fe[0],ve=fe[1],pe=M.hidden,me=function(e,t){void 0===M.value&&(ve(e),null===t||void 0===t||t())},ge=Number(Z)>0;p.useEffect((function(){ue((function(e){return!W&&e}))}),[W]);var he=_("input",a);p.useImperativeHandle(t,(function(){var e;return{resizableTextArea:null===(e=U.current)||void 0===e?void 0:e.resizableTextArea,focus:function(e){var t,n;(0,y.triggerFocus)(null===(n=null===(t=U.current)||void 0===t?void 0:t.resizableTextArea)||void 0===n?void 0:n.textArea,e)},blur:function(){var e;return null===(e=U.current)||void 0===e?void 0:e.blur()}}}));var xe=p.createElement(f.default,(0,u.default)({},(0,v.default)(M,["allowClear"]),{disabled:W,className:(0,s.default)((n={},(0,o.default)(n,"".concat(he,"-borderless"),!N),(0,o.default)(n,R,R&&!A),(0,o.default)(n,"".concat(he,"-sm"),"small"===K||"small"===P),(0,o.default)(n,"".concat(he,"-lg"),"large"===K||"large"===P),n),(0,b.getStatusClassNames)(he,Q)),style:A?{resize:null===O||void 0===O?void 0:O.resize}:O,prefixCls:he,onCompositionStart:function(e){ae(!0),ie.current=de,ce.current=e.currentTarget.selectionStart,null===F||void 0===F||F(e)},onChange:function(e){var t=e.target.value;!ne&&ge&&(t=E(e.target.selectionStart>=Z+1||e.target.selectionStart===t.length||!e.target.selectionStart,de,t,Z));me(t),(0,y.resolveOnChange)(e.currentTarget,e,T,t)},onBlur:function(e){ue(!1),null===V||void 0===V||V(e)},onFocus:function(e){ue(!0),null===j||void 0===j||j(e)},onCompositionEnd:function(e){var t;ae(!1);var n=e.currentTarget.value;ge&&(n=E(ce.current>=Z+1||ce.current===(null===(t=ie.current)||void 0===t?void 0:t.length),ie.current,n,Z));n!==de&&(me(n),(0,y.resolveOnChange)(e.currentTarget,e,T,n)),null===I||void 0===I||I(e)},ref:U})),be=(0,y.fixControlledValue)(de);ne||!ge||null!==M.value&&void 0!==M.value||(be=S(be,Z));var Ce=p.createElement(C.default,(0,u.default)({disabled:W,focused:oe},M,{prefixCls:he,direction:H,inputType:"text",value:be,element:xe,handleReset:function(e){var t,n,a;me(""),null===(t=U.current)||void 0===t||t.focus(),(0,y.resolveOnChange)(null===(a=null===(n=U.current)||void 0===n?void 0:n.resizableTextArea)||void 0===a?void 0:a.textArea,e,T)},ref:$,bordered:N,status:B,style:A?void 0:O}));if(A||Y){var ye,we=(0,c.default)(be).length,Se="";return Se="object"===(0,l.default)(A)?A.formatter({value:be,count:we,maxLength:Z}):"".concat(we).concat(ge?" / ".concat(Z):""),p.createElement("div",{hidden:pe,className:(0,s.default)("".concat(he,"-textarea"),(ye={},(0,o.default)(ye,"".concat(he,"-textarea-rtl"),"rtl"===H),(0,o.default)(ye,"".concat(he,"-textarea-show-count"),A),(0,o.default)(ye,"".concat(he,"-textarea-in-form-item"),X),ye),(0,b.getStatusClassNames)("".concat(he,"-textarea"),Q,Y),R),style:O,"data-count":Se},Ce,Y&&p.createElement("span",{className:"".concat(he,"-textarea-suffix")},G))}return Ce}));t.default=N},75671:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=(0,a.useRef)([]),r=function(){n.current.push(setTimeout((function(){var t,n,a,r;(null===(t=e.current)||void 0===t?void 0:t.input)&&"password"===(null===(n=e.current)||void 0===n?void 0:n.input.getAttribute("type"))&&(null===(a=e.current)||void 0===a?void 0:a.input.hasAttribute("value"))&&(null===(r=e.current)||void 0===r||r.input.removeAttribute("value"))})))};return(0,a.useEffect)((function(){return t&&r(),function(){return n.current.forEach((function(e){e&&clearTimeout(e)}))}}),[]),r};var a=n(72068)},37837:function(e,t,n){n(59428),n(44151),n(16613)},98526:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.hasPrefixSuffix=function(e){return!!(e.prefix||e.suffix||e.allowClear)}},41916:function(e,t,n){n.r(t),n.d(t,{BaseInput:function(){return d},default:function(){return C}});var a=n(48760),r=n(14896),l=n(72068),o=n(62493),u=n.n(o);function i(e){return!(!e.addonBefore&&!e.addonAfter)}function c(e){return!!(e.prefix||e.suffix||e.allowClear)}function s(e,t,n,a){if(n){var r=t;if("click"===t.type){var l=e.cloneNode(!0);return r=Object.create(t,{target:{value:l},currentTarget:{value:l}}),l.value="",void n(r)}if(void 0!==a)return r=Object.create(t,{target:{value:e},currentTarget:{value:e}}),e.value=a,void n(r);n(r)}}function f(e){return"undefined"===typeof e||null===e?"":String(e)}var d=function(e){var t=e.inputElement,n=e.prefixCls,o=e.prefix,s=e.suffix,f=e.addonBefore,d=e.addonAfter,v=e.className,p=e.style,m=e.affixWrapperClassName,g=e.groupClassName,h=e.wrapperClassName,x=e.disabled,b=e.readOnly,C=e.focused,y=e.triggerFocus,w=e.allowClear,S=e.value,E=e.handleReset,N=e.hidden,z=(0,l.useRef)(null),A=(0,l.cloneElement)(t,{value:S,hidden:N});if(c(e)){var Z,R="".concat(n,"-affix-wrapper"),O=u()(R,(Z={},(0,a.Z)(Z,"".concat(R,"-disabled"),x),(0,a.Z)(Z,"".concat(R,"-focused"),C),(0,a.Z)(Z,"".concat(R,"-readonly"),b),(0,a.Z)(Z,"".concat(R,"-input-with-clear-btn"),s&&w&&S),Z),!i(e)&&v,m),P=(s||w)&&l.createElement("span",{className:"".concat(n,"-suffix")},function(){var e;if(!w)return null;var t=!x&&!b&&S,o="".concat(n,"-clear-icon"),i="object"===(0,r.Z)(w)&&null!==w&&void 0!==w&&w.clearIcon?w.clearIcon:"\u2716";return l.createElement("span",{onClick:E,onMouseDown:function(e){return e.preventDefault()},className:u()(o,(e={},(0,a.Z)(e,"".concat(o,"-hidden"),!t),(0,a.Z)(e,"".concat(o,"-has-suffix"),!!s),e)),role:"button",tabIndex:-1},i)}(),s);A=l.createElement("span",{className:O,style:p,hidden:!i(e)&&N,onClick:function(e){var t;null!==(t=z.current)&&void 0!==t&&t.contains(e.target)&&(null===y||void 0===y||y())},ref:z},o&&l.createElement("span",{className:"".concat(n,"-prefix")},o),(0,l.cloneElement)(t,{style:null,value:S,hidden:null}),P)}if(i(e)){var k="".concat(n,"-group"),F="".concat(k,"-addon"),I=u()("".concat(n,"-wrapper"),k,h),T=u()("".concat(n,"-group-wrapper"),v,g);return l.createElement("span",{className:T,style:p,hidden:N},l.createElement("span",{className:I},f&&l.createElement("span",{className:F},f),(0,l.cloneElement)(A,{style:null,hidden:null}),d&&l.createElement("span",{className:F},d)))}return A},v=n(2443),p=n(9108),m=n(40917),g=n(19290),h=n(37918),x=n(17403),b=["autoComplete","onChange","onFocus","onBlur","onPressEnter","onKeyDown","prefixCls","disabled","htmlSize","className","maxLength","suffix","showCount","type","inputClassName"],C=(0,l.forwardRef)((function(e,t){var n=e.autoComplete,o=e.onChange,C=e.onFocus,y=e.onBlur,w=e.onPressEnter,S=e.onKeyDown,E=e.prefixCls,N=void 0===E?"rc-input":E,z=e.disabled,A=e.htmlSize,Z=e.className,R=e.maxLength,O=e.suffix,P=e.showCount,k=e.type,F=void 0===k?"text":k,I=e.inputClassName,T=(0,g.Z)(e,b),j=(0,x.Z)(e.defaultValue,{value:e.value}),V=(0,m.Z)(j,2),B=V[0],M=V[1],D=(0,l.useState)(!1),_=(0,m.Z)(D,2),H=_[0],K=_[1],L=(0,l.useRef)(null),W=function(e){L.current&&function(e,t){if(e){e.focus(t);var n=(t||{}).cursor;if(n){var a=e.value.length;switch(n){case"start":e.setSelectionRange(0,0);break;case"end":e.setSelectionRange(a,a);break;default:e.setSelectionRange(0,a)}}}}(L.current,e)};(0,l.useImperativeHandle)(t,(function(){return{focus:W,blur:function(){var e;null===(e=L.current)||void 0===e||e.blur()},setSelectionRange:function(e,t,n){var a;null===(a=L.current)||void 0===a||a.setSelectionRange(e,t,n)},select:function(){var e;null===(e=L.current)||void 0===e||e.select()},input:L.current}})),(0,l.useEffect)((function(){K((function(e){return(!e||!z)&&e}))}),[z]);var q=function(t){void 0===e.value&&M(t.target.value),L.current&&s(L.current,t,o)},J=function(e){w&&"Enter"===e.key&&w(e),null===S||void 0===S||S(e)},Y=function(e){K(!0),null===C||void 0===C||C(e)},X=function(e){K(!1),null===y||void 0===y||y(e)};return l.createElement(d,(0,p.Z)({},T,{prefixCls:N,className:Z,inputElement:function(){var t=(0,h.Z)(e,["prefixCls","onPressEnter","addonBefore","addonAfter","prefix","suffix","allowClear","defaultValue","showCount","affixWrapperClassName","groupClassName","inputClassName","wrapperClassName","htmlSize"]);return l.createElement("input",(0,p.Z)({autoComplete:n},t,{onChange:q,onFocus:Y,onBlur:X,onKeyDown:J,className:u()(N,(0,a.Z)({},"".concat(N,"-disabled"),z),I,!i(e)&&!c(e)&&Z),ref:L,size:A,type:F}))}(),handleReset:function(e){M(""),W(),L.current&&s(L.current,e,o)},value:f(B),focused:H,triggerFocus:W,suffix:function(){var e=Number(R)>0;if(O||P){var t=f(B),n=(0,v.Z)(t).length,o="object"===(0,r.Z)(P)?P.formatter({value:t,count:n,maxLength:R}):"".concat(n).concat(e?" / ".concat(R):"");return l.createElement(l.Fragment,null,!!P&&l.createElement("span",{className:u()("".concat(N,"-show-count-suffix"),(0,a.Z)({},"".concat(N,"-show-count-has-suffix"),!!O))},o),O)}return null}(),disabled:z}))}))},27774:function(e,t,n){n.r(t),n.d(t,{ResizableTextArea:function(){return N},default:function(){return z}});var a,r=n(9108),l=n(56082),o=n(51141),u=n(25389),i=n(51191),c=n(72068),s=n(48760),f=n(54406),d=n(14896),v=n(40917),p=n(19290),m=n(76832),g=n(40707),h=n(40197),x=n(17403),b=n(62493),C=n.n(b),y=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","font-variant","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing","word-break"],w={};function S(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;a||((a=document.createElement("textarea")).setAttribute("tab-index","-1"),a.setAttribute("aria-hidden","true"),document.body.appendChild(a)),e.getAttribute("wrap")?a.setAttribute("wrap",e.getAttribute("wrap")):a.removeAttribute("wrap");var l=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.getAttribute("id")||e.getAttribute("data-reactid")||e.getAttribute("name");if(t&&w[n])return w[n];var a=window.getComputedStyle(e),r=a.getPropertyValue("box-sizing")||a.getPropertyValue("-moz-box-sizing")||a.getPropertyValue("-webkit-box-sizing"),l=parseFloat(a.getPropertyValue("padding-bottom"))+parseFloat(a.getPropertyValue("padding-top")),o=parseFloat(a.getPropertyValue("border-bottom-width"))+parseFloat(a.getPropertyValue("border-top-width")),u={sizingStyle:y.map((function(e){return"".concat(e,":").concat(a.getPropertyValue(e))})).join(";"),paddingSize:l,borderSize:o,boxSizing:r};return t&&n&&(w[n]=u),u}(e,t),o=l.paddingSize,u=l.borderSize,i=l.boxSizing,c=l.sizingStyle;a.setAttribute("style","".concat(c,";").concat("\n  min-height:0 !important;\n  max-height:none !important;\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important;\n  pointer-events: none !important;\n")),a.value=e.value||e.placeholder||"";var s,f=void 0,d=void 0,v=a.scrollHeight;if("border-box"===i?v+=u:"content-box"===i&&(v-=o),null!==n||null!==r){a.value=" ";var p=a.scrollHeight-o;null!==n&&(f=p*n,"border-box"===i&&(f=f+o+u),v=Math.max(f,v)),null!==r&&(d=p*r,"border-box"===i&&(d=d+o+u),s=v>d?"":"hidden",v=Math.min(d,v))}var m={height:v,overflowY:s,resize:"none"};return f&&(m.minHeight=f),d&&(m.maxHeight=d),m}var E=["prefixCls","onPressEnter","defaultValue","value","autoSize","onResize","className","style","disabled","onChange","onInternalAutoSize"],N=c.forwardRef((function(e,t){var n=e.prefixCls,a=void 0===n?"rc-textarea":n,l=(e.onPressEnter,e.defaultValue),o=e.value,u=e.autoSize,i=e.onResize,b=e.className,y=e.style,w=e.disabled,N=e.onChange,z=(e.onInternalAutoSize,(0,p.Z)(e,E)),A=(0,x.Z)(l,{value:o,postState:function(e){return null!==e&&void 0!==e?e:""}}),Z=(0,v.Z)(A,2),R=Z[0],O=Z[1],P=c.useRef();c.useImperativeHandle(t,(function(){return{textArea:P.current}}));var k=c.useMemo((function(){return u&&"object"===(0,d.Z)(u)?[u.minRows,u.maxRows]:[]}),[u]),F=(0,v.Z)(k,2),I=F[0],T=F[1],j=!!u,V=c.useState(2),B=(0,v.Z)(V,2),M=B[0],D=B[1],_=c.useState(),H=(0,v.Z)(_,2),K=H[0],L=H[1],W=function(){D(0)};(0,g.Z)((function(){j&&W()}),[o,I,T,j]),(0,g.Z)((function(){if(0===M)D(1);else if(1===M){var e=S(P.current,!1,I,T);D(2),L(e)}else!function(){try{if(document.activeElement===P.current){var e=P.current,t=e.selectionStart,n=e.selectionEnd,a=e.scrollTop;P.current.setSelectionRange(t,n),P.current.scrollTop=a}}catch(r){}}()}),[M]);var q=c.useRef(),J=function(){h.Z.cancel(q.current)};c.useEffect((function(){return J}),[]);var Y=j?K:null,X=(0,f.Z)((0,f.Z)({},y),Y);return 0!==M&&1!==M||(X.overflowY="hidden",X.overflowX="hidden"),c.createElement(m.default,{onResize:function(e){2===M&&(null===i||void 0===i||i(e),u&&(J(),q.current=(0,h.Z)((function(){W()}))))},disabled:!(u||i)},c.createElement("textarea",(0,r.Z)({},z,{ref:P,style:X,className:C()(a,b,(0,s.Z)({},"".concat(a,"-disabled"),w)),disabled:w,value:R,onChange:function(e){O(e.target.value),null===N||void 0===N||N(e)}})))})),z=function(e){(0,u.Z)(n,e);var t=(0,i.Z)(n);function n(e){var a;(0,l.Z)(this,n),(a=t.call(this,e)).resizableTextArea=void 0,a.focus=function(){a.resizableTextArea.textArea.focus()},a.saveTextArea=function(e){a.resizableTextArea=e},a.handleChange=function(e){var t=a.props.onChange;a.setValue(e.target.value),t&&t(e)},a.handleKeyDown=function(e){var t=a.props,n=t.onPressEnter,r=t.onKeyDown;13===e.keyCode&&n&&n(e),r&&r(e)};var r="undefined"===typeof e.value||null===e.value?e.defaultValue:e.value;return a.state={value:r},a}return(0,o.Z)(n,[{key:"setValue",value:function(e,t){"value"in this.props||this.setState({value:e},t)}},{key:"blur",value:function(){this.resizableTextArea.textArea.blur()}},{key:"render",value:function(){return c.createElement(N,(0,r.Z)({},this.props,{value:this.state.value,onKeyDown:this.handleKeyDown,onChange:this.handleChange,ref:this.saveTextArea}))}}],[{key:"getDerivedStateFromProps",value:function(e){return"value"in e?{value:e.value}:null}}]),n}(c.Component)},60770:function(e,t,n){n.r(t)},44151:function(e,t,n){n.r(t)}}]);
//# sourceMappingURL=9.5d99b2e7.chunk.js.map