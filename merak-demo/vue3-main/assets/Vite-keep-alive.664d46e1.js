import{d as u,w as p,o as c,c as s,u as r,$ as i,M as l}from"./index.a5078620.js";const f=u({__name:"Vite-keep-alive",props:{routePath:{},afterMount:{type:Function}},setup(o){const e=o;function a(){var t;i().emitter.emit("viteApp:router-change",{path:e.routePath,replace:!0}),(t=e.afterMount)==null||t.call(e)}p(()=>e.routePath,async()=>{a()});const n="https://fgsreally.github.io/micro-app-demos/merak-demo/vite-child/index.html";return(t,m)=>(c(),s(r(l),{name:"vite_react",url:r(n),"keep-alive":"",props:{router:t.$router},onAfterMount:a},null,8,["url","props"]))}});export{f as default};
//# sourceMappingURL=Vite-keep-alive.664d46e1.js.map