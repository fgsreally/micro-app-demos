import{d as u,w as c,o as s,c as p,u as r,$ as l,M as m}from"./index.f3b6fc7c.js";const f=u({__name:"Vue2",props:{routePath:{},afterMount:{type:Function}},setup(a){const e=a;function o(){var t;l().emitter.emit("vue2App:router-change",{path:e.routePath,replace:!0}),(t=e.afterMount)==null||t.call(e)}c(()=>e.routePath,async()=>{console.log("watch"),o()});const n="https://fgsreally.github.io/micro-app-demos/merak-demo/vue2-child/index.html";return(t,h)=>(s(),p(r(m),{name:"vue_cli",url:r(n),props:{router:t.$router},onAfterMount:o},null,8,["url","props"]))}});export{f as _};
//# sourceMappingURL=Vue2.vue_vue_type_script_setup_true_lang.3233e655.js.map