import{j as t,b as o,F as n}from"./index.97a837d1.js";import"./TextArea.4ae8bb25.js";import{B as p,S as c}from"./button.5d14dbc4.js";import{T as r}from"./index.68ec52ec.js";function h(){const e=({path:u})=>{const a=window.Garfish.getGlobalObject().__MAIN_ROUTER__;a&&a.push(u)},i=[{path:"/main/communication-test",label:"\u8DF3\u8F6C\u81F3\u4E3B\u5E94\u7528 page1"},{path:"/vue2App/communication-test",label:"\u8DF3\u8F6C\u81F3Vue2\u5B50\u5E94\u7528"},{path:"/reactApp/communication-test",label:"\u8DF3\u8F6C\u81F3React18\u5B50\u5E94\u7528"},{path:"/viteApp/communication-test",label:"\u8DF3\u8F6C\u81F3Vite\u5B50\u5E94\u7528"}].map(u=>t(p,{type:"primary",onClick:()=>e(u),children:u.label},u.path));return o(n,{children:[t(r.Title,{children:"Vite\u5B50\u5E94\u7528\u5185\u63A7\u5236\u8DF3\u8F6C"}),t(c,{size:20,children:i})]})}export{h as default};