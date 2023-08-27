"use strict";(self.webpackChunk_icestark_demo_react_child=self.webpackChunk_icestark_demo_react_child||[]).push([[349],{5691:function(e,t){var n=this&&this.__spreadArrays||function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var o=Array(e),r=0;for(t=0;t<n;t++)for(var i=arguments[t],u=0,a=i.length;u<a;u++,r++)o[r]=i[u];return o};function o(e){return e&&"function"===typeof e&&!function(e){var t=e.prototype&&e.prototype.constructor===e&&Object.getOwnPropertyNames(e.prototype).length>1,n=!t&&e.toString();return t||/^function\s+[A-Z]/.test(n)||"class"===n.slice(0,5)}(e)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e){void 0===e&&(e={}),this.multiMode=!1,this.eventListeners={},this.timeoutIds=[],this.intervalIds=[],this.propertyAdded={},this.originalValues={};var t=e.multiMode;window.Proxy||(console.warn("proxy sandbox is not support by current browser"),this.sandboxDisabled=!0),this.multiMode=t,this.sandbox=null}return e.prototype.createProxySandbox=function(e){var t=this,r=this,i=r.propertyAdded,u=r.originalValues,a=r.multiMode,l=Object.create(null),s=window,c=window.addEventListener,d=window.removeEventListener,f=window.setInterval,p=window.setTimeout;l.addEventListener=function(e,o){for(var r=[],i=2;i<arguments.length;i++)r[i-2]=arguments[i];return t.eventListeners[e]=t.eventListeners[e]||[],t.eventListeners[e].push(o),c.apply(s,n([e,o],r))},l.removeEventListener=function(e,o){for(var r=[],i=2;i<arguments.length;i++)r[i-2]=arguments[i];var u=t.eventListeners[e]||[];return u.includes(o)&&u.splice(u.indexOf(o),1),d.apply(s,n([e,o],r))},l.setTimeout=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var o=p.apply(void 0,e);return t.timeoutIds.push(o),o},l.setInterval=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var o=f.apply(void 0,e);return t.intervalIds.push(o),o};var h=new Proxy(l,{set:function(e,t,n){return s.hasOwnProperty(t)?u.hasOwnProperty(t)||(u[t]=s[t]):i[t]=n,a||(s[t]=n),e[t]=n,!0},get:function(t,n){if(n!==Symbol.unscopables){if(["top","window","self","globalThis"].includes(n))return h;if("hasOwnProperty"===n)return function(e){return!!t[e]||s.hasOwnProperty(e)};var r=t[n];if(void 0!==r)return r;var i=e&&e[n];if(i)return i;var u=s[n];if("eval"===n)return u;if(o(u)){var a=u.bind(s);for(var l in u)a[l]=u[l];return a}return u}},has:function(e,t){return t in e||t in s}});this.sandbox=h},e.prototype.getSandbox=function(){return this.sandbox},e.prototype.getAddedProperties=function(){return this.propertyAdded},e.prototype.execScriptInSandbox=function(e){if(!this.sandboxDisabled){this.sandbox||this.createProxySandbox();try{new Function("sandbox","with (sandbox) {;"+e+"\n}").bind(this.sandbox)(this.sandbox)}catch(t){throw console.error("error occurs when execute script in sandbox: "+t),t}}},e.prototype.clear=function(){var e=this;this.sandboxDisabled||(Object.keys(this.eventListeners).forEach((function(t){(e.eventListeners[t]||[]).forEach((function(e){window.removeEventListener(t,e)}))})),this.timeoutIds.forEach((function(e){return window.clearTimeout(e)})),this.intervalIds.forEach((function(e){return window.clearInterval(e)})),Object.keys(this.originalValues).forEach((function(t){window[t]=e.originalValues[t]})),Object.keys(this.propertyAdded).forEach((function(e){delete window[e]})))},e}();t.default=r},6001:function(e,t,n){var o=this&&this.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},e(t,n)};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},r.apply(this,arguments)},i=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function u(e){try{l(o.next(e))}catch(t){i(t)}}function a(e){try{l(o.throw(e))}catch(t){i(t)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,a)}l((o=o.apply(e,t||[])).next())}))},u=this&&this.__generator||function(e,t){var n,o,r,i,u={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,o=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(r=(r=u.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){u.label=i[1];break}if(6===i[0]&&u.label<r[1]){u.label=r[1],r=i;break}if(r&&u.label<r[2]){u.label=r[2],u.ops.push(i);break}r[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(a){i=[6,a],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},a=this&&this.__rest||function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};Object.defineProperty(t,"__esModule",{value:!0}),t.renderModules=t.renderComponent=void 0;var l=n(2068),s=n(9910),c=n(9905);function d(e,t){return void 0===t&&(t={}),l.isValidElement(e)?l.cloneElement(e,t):l.createElement(e,r({},t))}t.renderComponent=d;var f=function(e){function t(t){var n=e.call(this,t)||this;return n.moduleInfo=null,n.mountNode=null,n.unmout=!1,n.state={loading:!1},n}return o(t,e),t.prototype.componentDidMount=function(){this.mountModule()},t.prototype.componentDidUpdate=function(e){c.shallowCompare(e.moduleInfo||{},this.props.moduleInfo||{})||this.mountModule()},t.prototype.componentWillUnmount=function(){try{this.validateRender()||s.unmoutModule(this.moduleInfo,this.mountNode),this.unmout=!0}catch(e){console.log("[icestark] error occurred when unmount module",e)}},t.prototype.getModuleInfo=function(){var e=this,t=this.props.moduleInfo;this.moduleInfo=t||s.getModules().filter((function(t){return t.name===e.props.moduleName}))[0],this.moduleInfo||console.error("[icestark] Can't find "+this.props.moduleName+" module in modules config")},t.prototype.validateRender=function(){var e=(this.moduleInfo||{}).render;return e&&"function"!==typeof e&&console.error("[icestark]: render should be funtion"),e&&"function"===typeof e},t.prototype.mountModule=function(){return i(this,void 0,void 0,(function(){var e,t,n,o,r,i,l,c,d;return u(this,(function(u){switch(u.label){case 0:if(e=this.props,t=e.sandbox,e.moduleInfo,e.wrapperClassName,e.wrapperStyle,e.loadingComponent,n=e.handleError,o=a(e,["sandbox","moduleInfo","wrapperClassName","wrapperStyle","loadingComponent","handleError"]),!this.moduleInfo)return console.error("Can't find "+this.props.moduleName+" module in modules config"),[2];if(this.validateRender())return[3,4];this.setState({loading:!0}),u.label=1;case 1:return u.trys.push([1,3,,4]),[4,s.loadModule(this.moduleInfo,t)];case 2:return r=u.sent(),i=r.mount,l=r.component,c=i,!this.unmout&&this.setState({loading:!1}),c&&l&&(this.unmout?s.unmoutModule(this.moduleInfo,this.mountNode):c(l,this.mountNode,o)),[3,4];case 3:return d=u.sent(),this.setState({loading:!1}),n(d),[3,4];case 4:return[2]}}))}))},t.prototype.render=function(){var e=this;this.getModuleInfo();var t=this.state.loading,n=(this.moduleInfo||{}).render,o=this.props,r=o.wrapperClassName,i=o.wrapperStyle,u=o.loadingComponent;return t?u:l.createElement("div",{className:r,style:i,ref:function(t){e.mountNode=t}},this.moduleInfo&&this.validateRender()&&n())},t.defaultProps={loadingComponent:null,handleError:function(){}},t}(l.Component);t.default=f,t.renderModules=function(e,t,n,o){var i;return s.registerModules(e),t?d(t,r(r({modules:e},n),{sandbox:o})):(console.warn("Please set render Component, try use MicroModule and mount first module"),l.createElement(f,r({moduleName:null===(i=e[0])||void 0===i?void 0:i.name},n)))}},9905:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.shallowCompare=void 0,t.shallowCompare=function(e,t){return Object.keys(e).every((function(n){return e[n]===t[n]}))}},1509:function(e,t){var n,o,r;Object.defineProperty(t,"__esModule",{value:!0}),t.noteGlobalProps=t.getGlobalProp=void 0;var i=[],u="undefined"!==typeof navigator&&-1!==navigator.userAgent.indexOf("Trident");function a(e,t){return!t.hasOwnProperty(e)||!isNaN(e)&&e<t.length||u&&t[e]&&"undefined"!==typeof window&&t[e].parent===window}t.getGlobalProp=function(e){var t,u=0;for(var l in e)if(!a(l,e)){if(0===u&&l!==n||1===u&&l!==o)return l;u++,t=l}if(t!==r)return t;for(var l in e)i.includes(l)||(t=l);return t},t.noteGlobalProps=function(e){for(var t in n=void 0,o=void 0,i=Object.keys(e),e)a(t,e)||(n?o||(o=t):n=t,r=t);return r}},6370:function(e,t,n){t.ok=t.Vs=void 0;var o=n(9910);Object.defineProperty(t,"Vs",{enumerable:!0,get:function(){return o.mountModule}}),Object.defineProperty(t,"ok",{enumerable:!0,get:function(){return o.unmoutModule}}),n(6001).default},5919:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var o=n(1509),r=function(){function e(){this.importTask={}}return e.prototype.load=function(e,t){void 0===t&&(t=window.fetch);var n=e.url,o=e.name;if(this.importTask[o])return this.importTask[o];var r=Array.isArray(n)?n:[n],i=Promise.all(r.map((function(e){return t(e).then((function(e){return e.text()})).then((function(t){return t+" \n //# sourceURL="+e}))})));return this.importTask[o]=i,i},e.prototype.removeTask=function(e){delete this.importTask[e]},e.prototype.clearTask=function(){this.importTask={}},e.prototype.execModule=function(e,t,n){return this.load(e).then((function(r){var i=null;(null===t||void 0===t?void 0:t.getSandbox)?(t.createProxySandbox(n),i=t.getSandbox()):i=window;var u=e.name,a="";try{r.forEach((function(e,n){var u=n===r.length-1;u&&o.noteGlobalProps(i),(null===t||void 0===t?void 0:t.execScriptInSandbox)?t.execScriptInSandbox(e):(0,eval)(e),u&&(a=o.getGlobalProp(i))}))}catch(s){console.error(s)}var l=a?i[a]:i[u]||{};return i[a]&&delete i[a],l}))},e}();t.default=r},9910:function(e,t,n){var o=this&&this.__assign||function(){return o=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},o.apply(this,arguments)},r=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function u(e){try{l(o.next(e))}catch(t){i(t)}}function a(e){try{l(o.throw(e))}catch(t){i(t)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,a)}l((o=o.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var n,o,r,i,u={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,o=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(r=(r=u.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){u.label=i[1];break}if(6===i[0]&&u.label<r[1]){u.label=r[1],r=i;break}if(r&&u.label<r[2]){u.label=r[2],u.ops.push(i);break}r[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(a){i=[6,a],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.unmoutModule=t.mountModule=t.loadModule=t.getImportedModule=t.getAllImportedModules=t.getModules=t.removeCSS=t.appendCSS=t.parseUrlAssets=t.registerModules=t.registerModule=t.clearModules=t.removeModule=t.registerRuntimes=t.moduleLoader=void 0;var u=n(5691),a=n(5919),l=n(3277),s=[],c={},d={},f=/\.css(\?((?!\.js$).)+)?$/;t.moduleLoader=new a.default,t.registerRuntimes=function(e){return l.parseRuntime(e)},t.removeModule=function(e){s=s.filter((function(t){return t.name!==e})),delete c[e],t.moduleLoader.removeTask(e)},t.clearModules=function(){s=[],c={},t.moduleLoader.clearTask()},t.registerModule=function(e){e.url||e.render?(s.filter((function(t){return t.name===e.name})).length&&t.removeModule(e.name),s.push(e)):console.error("[icestark module] url and render cannot both be empty. name: %s",e.name)},t.registerModules=function(e){e.forEach((function(e){return t.registerModule(e)}))};function p(e,t,n){return void 0===n&&(n=document.getElementsByTagName("head")[0]),new Promise((function(o,r){n||r(new Error("no root element for css assert: "+t));var i=document.createElement("link");i.setAttribute("module",e),i.rel="stylesheet",i.href=t,i.addEventListener("error",(function(){return console.error("css asset loaded error: "+t),o()}),!1),i.addEventListener("load",(function(){return o()}),!1),n.appendChild(i)}))}function h(e,t,n){(t||document).querySelectorAll("link[module="+e+"]").forEach((function(e){(n&&n.includes(e.getAttribute("href"))||!n)&&e.parentNode.removeChild(e)}))}t.parseUrlAssets=function(e){var t=[],n=[];return(Array.isArray(e)?e:[e]).forEach((function(e){f.test(e)?n.push(e):t.push(e)})),{jsList:t,cssList:n}},t.appendCSS=p,t.removeCSS=h,t.getModules=function(){return s||[]},t.getAllImportedModules=function(){return c},t.getImportedModule=function(e){if("string"===typeof e)return c[e];console.error("[icestark-module]: should be string, but get "+typeof e)},t.loadModule=function(e,n){return r(void 0,void 0,void 0,(function(){var r,a,s,f,h,m,v,y,b,w,g,x,E,O,_,M,S;return i(this,(function(i){switch(i.label){case 0:return r=e.name,a=e.url,s=e.runtime,f=null,c[r]?[3,4]:(h=null,s?[4,l.parseRuntime(s)]:[3,2]);case 1:h=i.sent(),i.label=2;case 2:return m=t.parseUrlAssets(a),v=m.jsList,y=m.cssList,f=function(e,t){var n=null;if(t||e)if(e)if("function"===typeof e)n=new e;else{var o="boolean"===typeof e?{}:e;n=new u.default(o)}else n=new u.default;return n}(n,h),[4,t.moduleLoader.execModule({name:r,url:v},f,h)];case 3:b=i.sent(),c[r]={moduleInfo:b,moduleSandbox:f,moduleCSS:y},i.label=4;case 4:return w=c[r],g=w.moduleInfo,x=w.moduleCSS,g?(O=e.mount||(null===g||void 0===g?void 0:g.mount),_=e.unmount||(null===g||void 0===g?void 0:g.unmount),M=g.default||g,O&&_||console.error("[icestark module] Please export mount/unmount function"),(S=function(e){return(e||[]).filter((function(e){return d[e]?(d[e]+=1,!1):(d[e]=1,!0)}))}(x)).length?[4,Promise.all(S.map((function(e){return p(r,e)})))]:[3,6]):(E="load or exec module faild",console.error(E),[2,Promise.reject(new Error(E))]);case 5:i.sent(),i.label=6;case 6:return"undefined"!==typeof g.component&&console.warn("[icestark module] The export function name called component is conflict, please change it or it will be ignored."),[2,o(o({},g),{mount:O,unmount:_,component:M})]}}))}))},t.mountModule=function(e,n,o,u){return void 0===o&&(o={}),r(void 0,void 0,void 0,(function(){var r,a,l;return i(this,(function(i){switch(i.label){case 0:return[4,t.loadModule(e,u)];case 1:return r=i.sent(),a=r.mount,l=r.component,[2,a(l,n,o)]}}))}))},t.unmoutModule=function(e,t){var n,o,r,i=e.name,u=null===(n=c[i])||void 0===n?void 0:n.moduleInfo,a=null===(o=c[i])||void 0===o?void 0:o.moduleSandbox,l=e.unmount||(null===u||void 0===u?void 0:u.unmount),s=function(e){return(e||[]).filter((function(e){return d[e]>1?(d[e]-=1,!1):(delete d[e],!0)}))}(null===(r=c[i])||void 0===r?void 0:r.moduleCSS);if(h(i,document,s),(null===a||void 0===a?void 0:a.clear)&&a.clear(),l&&t)return l(t)}},3277:function(e,t,n){var o=this&&this.__assign||function(){return o=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},o.apply(this,arguments)},r=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function u(e){try{l(o.next(e))}catch(t){i(t)}}function a(e){try{l(o.throw(e))}catch(t){i(t)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,a)}l((o=o.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var n,o,r,i,u={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,o=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(r=(r=u.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){u.label=i[1];break}if(6===i[0]&&u.label<r[1]){u.label=r[1],r=i;break}if(r&&u.label<r[2]){u.label=r[2],u.ops.push(i);break}r[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(a){i=[6,a],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.parseRuntime=t.parseImmediately=t.fetchRuntimeJson=t.cacheDeps=t.updateRuntimeState=t.execute=void 0;var u=n(5691),a=n(997),l=n(9910);!function(){if("function"===typeof window.CustomEvent)return!1;window.CustomEvent=function(e,t){t=t||{bubbles:!1,cancelable:!1,detail:null};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}}();var s={};function c(e,t,n){void 0===n&&(n=new u.default({multiMode:!0})),n.createProxySandbox(t),a.any2AnyArray(e).forEach((function(e){return n.execScriptInSandbox(e)}));var o=n.getAddedProperties();return n.clear(),o}function d(e,t){s[e]||(s[e]={}),s[e].state=t}function f(e,t,n){var o,u,a;return void 0===n&&(n=window.fetch),r(this,void 0,void 0,(function(){var r,f,p,h,m,v,y,b;return i(this,(function(i){switch(i.label){case 0:return r=e.id,f=e.url,"LOADING"!==(null===(o=s[p=r])||void 0===o?void 0:o.state)?[3,2]:[4,new Promise((function(e){return window.addEventListener(p,e)}))];case 1:i.sent(),i.label=2;case 2:if("LOADED"===(null===(u=s[p])||void 0===u?void 0:u.state))return[2,null===(a=s[p])||void 0===a?void 0:a.deps];d(p,"LOADING"),h=l.parseUrlAssets(f),m=h.cssList,v=h.jsList,Promise.all(m.map((function(e){return l.appendCSS("runtime-"+r,e)}))),i.label=3;case 3:return i.trys.push([3,5,,6]),y=s[p],[4,Promise.all(v.map((function(e){return n(e).then((function(e){return e.text()}))}))).then((function(e){return c(e,t)}))];case 4:return y.deps=i.sent(),d(p,"LOADED"),window.dispatchEvent(new CustomEvent(p,{detail:{state:"LOADED"}})),[2,s[p].deps];case 5:return b=i.sent(),d(p,"LOAD_ERROR"),window.dispatchEvent(new CustomEvent(p,{detail:{state:"LOAD_ERROR"}})),console.error("[icestark module] "+r+" fetch or excute js assets error",b),[2,Promise.reject(b)];case 6:return[2]}}))}))}function p(e,t){return void 0===t&&(t=window.fetch),/.json/.test(e)||console.warn("[icestark-module] runtime url should be a json file."),t(e).then((function(e){return e.json()}))}function h(e,t){return void 0===t&&(t=window.fetch),r(this,void 0,void 0,(function(){var n=this;return i(this,(function(u){switch(u.label){case 0:return[4,e.reduce((function(e,u){return r(n,void 0,void 0,(function(){var n,r;return i(this,(function(i){switch(i.label){case 0:return[4,e];case 1:return n=i.sent(),r=[o({},n)],[4,f(u,n,t)];case 2:return[2,o.apply(void 0,r.concat([i.sent()]))]}}))}))}),Promise.resolve({}))];case 1:return[2,u.sent()]}}))}))}t.execute=c,t.updateRuntimeState=d,t.cacheDeps=f,t.fetchRuntimeJson=p,t.parseImmediately=h,t.parseRuntime=function(e,t){return void 0===t&&(t=window.fetch),r(this,void 0,void 0,(function(){return i(this,(function(n){switch(n.label){case 0:return e?"string"!==typeof e?[3,2]:[4,p(e,t)]:[2,null];case 1:return[2,h(n.sent())];case 2:return Array.isArray(e)?[2,h(e)]:[2]}}))}))}},997:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.any2AnyArray=void 0,t.any2AnyArray=function(e){return Array.isArray(e)?e:[e]}},8036:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Object.keys(e).reduce((function(t,n){return!n.startsWith("data-")&&!n.startsWith("aria-")&&"role"!==n||n.startsWith("data-__")||(t[n]=e[n]),t}),{})}},4295:function(e,t,n){var o=n(3448).default,r=n(9283).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(6881)),u=r(n(9220)),a=r(n(4085)),l=r(n(4389)),s=o(n(2068)),c=r(n(9640)),d=function(e){(0,a.default)(n,e);var t=(0,l.default)(n);function n(){var e;return(0,i.default)(this,n),(e=t.apply(this,arguments)).state={error:void 0,info:{componentStack:""}},e}return(0,u.default)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({error:e,info:t})}},{key:"render",value:function(){var e=this.props,t=e.message,n=e.description,o=e.children,r=this.state,i=r.error,u=r.info,a=u&&u.componentStack?u.componentStack:null,l="undefined"===typeof t?(i||"").toString():t,d="undefined"===typeof n?a:n;return i?s.createElement(c.default,{type:"error",message:l,description:s.createElement("pre",null,d)}):o}}]),n}(s.Component),f=d;t.default=f},9640:function(e,t,n){var o=n(3448).default,r=n(9283).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(8450)),u=r(n(7738)),a=r(n(495)),l=r(n(5831)),s=r(n(9832)),c=r(n(9061)),d=r(n(5182)),f=r(n(1636)),p=r(n(5513)),h=r(n(6212)),m=r(n(9)),v=r(n(4580)),y=r(n(2493)),b=r(n(1426)),w=o(n(2068)),g=n(4136),x=r(n(8036)),E=n(5136),O=r(n(4295)),_=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n},M={success:l.default,info:m.default,error:c.default,warning:p.default},S={success:s.default,info:v.default,error:d.default,warning:h.default},P=function(e){var t=e.description,n=e.icon,o=e.prefixCls,r=e.type,i=(t?S:M)[r]||null;return n?(0,E.replaceElement)(n,w.createElement("span",{className:"".concat(o,"-icon")},n),(function(){return{className:(0,y.default)("".concat(o,"-icon"),(0,a.default)({},n.props.className,n.props.className))}})):w.createElement(i,{className:"".concat(o,"-icon")})},C=function(e){var t=e.isClosable,n=e.closeText,o=e.prefixCls,r=e.closeIcon,i=e.handleClose;return t?w.createElement("button",{type:"button",onClick:i,className:"".concat(o,"-close-icon"),tabIndex:0},n?w.createElement("span",{className:"".concat(o,"-close-text")},n):r):null},k=function(e){var t,n=e.description,o=e.prefixCls,r=e.message,l=e.banner,s=e.className,c=void 0===s?"":s,d=e.style,p=e.onMouseEnter,h=e.onMouseLeave,m=e.onClick,v=e.afterClose,E=e.showIcon,O=e.closable,M=e.closeText,S=e.closeIcon,k=void 0===S?w.createElement(f.default,null):S,I=e.action,j=_(e,["description","prefixCls","message","banner","className","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","closeIcon","action"]),A=w.useState(!1),L=(0,u.default)(A,2),N=L[0],T=L[1],R=w.useRef(),D=w.useContext(g.ConfigContext),G=D.getPrefixCls,U=D.direction,V=G("alert",o),W=function(e){var t;T(!0),null===(t=j.onClose)||void 0===t||t.call(j,e)},B=!!M||O,H=function(){var e=j.type;return void 0!==e?e:l?"warning":"info"}(),J=!(!l||void 0!==E)||E,$=(0,y.default)(V,"".concat(V,"-").concat(H),(t={},(0,a.default)(t,"".concat(V,"-with-description"),!!n),(0,a.default)(t,"".concat(V,"-no-icon"),!J),(0,a.default)(t,"".concat(V,"-banner"),!!l),(0,a.default)(t,"".concat(V,"-rtl"),"rtl"===U),t),c),q=(0,x.default)(j);return w.createElement(b.default,{visible:!N,motionName:"".concat(V,"-motion"),motionAppear:!1,motionEnter:!1,onLeaveStart:function(e){return{maxHeight:e.offsetHeight}},onLeaveEnd:v},(function(e){var t=e.className,o=e.style;return w.createElement("div",(0,i.default)({ref:R,"data-show":!N,className:(0,y.default)($,t),style:(0,i.default)((0,i.default)({},d),o),onMouseEnter:p,onMouseLeave:h,onClick:m,role:"alert"},q),J?w.createElement(P,{description:n,icon:j.icon,prefixCls:V,type:H}):null,w.createElement("div",{className:"".concat(V,"-content")},r?w.createElement("div",{className:"".concat(V,"-message")},r):null,n?w.createElement("div",{className:"".concat(V,"-description")},n):null),I?w.createElement("div",{className:"".concat(V,"-action")},I):null,w.createElement(C,{isClosable:!!B,closeText:M,prefixCls:V,closeIcon:k,handleClose:W}))}))};k.ErrorBoundary=O.default;var I=k;t.default=I},2853:function(e,t,n){n(9428),n(9542)},9542:function(e,t,n){n.r(t)}}]);
//# sourceMappingURL=349.314979e7.chunk.js.map