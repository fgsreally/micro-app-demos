import{d as u,u as s,w as c,o as l,c as m,a as n,$ as h,n as f,M as v}from"./index.04c0725a.js";const d=u({__name:"Vite",props:{routePath:{},keepAlive:{type:Boolean},afterMount:{type:Function}},setup(p){const t=p,a=s();function o(){var e;h().emitter.emit("viteApp:router-change",{path:t.routePath||a.path.replace("/viteApp",""),replace:!0}),(e=t.afterMount)==null||e.call(t)}c(()=>a.path,async(e,r)=>{e.includes("vite")&&r.includes("vite")&&(await f(),o())});const i="https://fgsreally.github.io/micro-app-demos/merak-demo/vite-child/index.html";return(e,r)=>(l(),m(n(v),{name:"vite_react",url:n(i),"keep-alive":e.keepAlive,props:{router:e.$router},onAfterMount:o},null,8,["url","keep-alive","props"]))}});export{d as _};
//# sourceMappingURL=Vite.vue_vue_type_script_setup_true_lang.8774e764.js.map
