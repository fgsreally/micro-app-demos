import{d as c,w as u,o as s,c as p,u as r,$ as l,M as h}from"./index.f3b6fc7c.js";const f=c({__name:"React",props:{routePath:{},afterMount:{type:Function}},setup(a){const e=a;function o(){var t;console.log("change",e.routePath),l().emitter.emit("reactApp:router-change",{path:e.routePath,replace:!0}),(t=e.afterMount)==null||t.call(e)}u(()=>e.routePath,async()=>{console.log("routechange"),o()});const n="https://fgsreally.github.io/micro-app-demos/merak-demo/react-child/index.html";return(t,m)=>(s(),p(r(h),{name:"react",url:r(n),props:{router:t.$router},onAfterMount:o},null,8,["url","props"]))}});export{f as _};
//# sourceMappingURL=React.vue_vue_type_script_setup_true_lang.49212901.js.map