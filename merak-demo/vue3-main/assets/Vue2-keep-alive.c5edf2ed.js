import{d as n,w as p,o as c,c as s,u as r,$ as l,M as i}from"./index.a5078620.js";const f=n({__name:"Vue2-keep-alive",props:{routePath:{},afterMount:{type:Function}},setup(o){const e=o;function a(){var t;l().emitter.emit("vue2App:router-change",{path:e.routePath,replace:!0}),(t=e.afterMount)==null||t.call(e)}p(()=>e.routePath,async()=>{a()});const u="https://fgsreally.github.io/micro-app-demos/merak-demo/vue2-child/index.html";return(t,m)=>(c(),s(r(i),{name:"vue_cli",url:r(u),"keep-alive":"",props:{router:t.$router},onAfterMount:a},null,8,["url","props"]))}});export{f as default};
//# sourceMappingURL=Vue2-keep-alive.c5edf2ed.js.map