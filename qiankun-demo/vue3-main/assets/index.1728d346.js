import{f as i,a1 as v,a5 as g,a6 as w,U as y,a7 as s,r as S,p as E}from"./index.7fa304ed.js";var h=function(e,a){var u=i({},e);return Object.keys(a).forEach(function(r){var t=u[r];if(t)t.type||t.default?t.default=a[r]:t.def?t.def(a[r]):u[r]={type:t,default:a[r]};else throw new Error("not have ".concat(r," prop"))}),u};const U=h;var l=function(e){return setTimeout(e,16)},d=function(e){return clearTimeout(e)};typeof window<"u"&&"requestAnimationFrame"in window&&(l=function(e){return window.requestAnimationFrame(e)},d=function(e){return window.cancelAnimationFrame(e)});var c=0,f=new Map;function p(n){f.delete(n)}function x(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;c+=1;var a=c;function u(r){if(r===0)p(a),n();else{var t=l(function(){u(r-1)});f.set(a,t)}}return u(e),a}x.cancel=function(n){var e=f.get(n);return p(e),d(e)};function G(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,u=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,r=n;if(Array.isArray(n)&&(r=v(n)[0]),!r)return null;var t=g(r,e,u);return t.props=a?i(i({},t.props),e):t.props,w(y(t.props.class)!=="object","class must be string"),t}var A=function(){return s()&&window.document.documentElement},m=function(e){if(s()&&window.document.documentElement){var a=Array.isArray(e)?e:[e],u=window.document.documentElement;return a.some(function(r){return r in u.style})}return!1},D=function(e,a){if(!m(e))return!1;var u=document.createElement("div"),r=u.style[e];return u.style[e]=a,u.style[e]!==r};function C(n,e){return!Array.isArray(n)&&e!==void 0?D(n,e):m(n)}var o,b=function(){if(!A())return!1;if(o!==void 0)return o;var e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e),o=e.scrollHeight===1,document.body.removeChild(e),o};const j=function(){var n=S(!1);return E(function(){n.value=b()}),n};export{C as a,G as c,U as i,j as u,x as w};
