import{d as i,o as r,q as p,y as u,D as c,a_ as l}from"./index.b4e7b42b.js";const m=["name","url","baseroute","data"],v={name:"ViteKeepAliveView"},A=i({...v,setup(d){const{apps:n}=r(),e=p(()=>{const a=n.find(t=>t.name==="viteApp");return{...a,name:a.name+"KeepAlive"}}),o=p(()=>({path:"/viteApp/tab-view",abstract:!0}));function s(){l.setData("viteAppKeepAlive",{path:"/viteApp/tab-view",abstract:!0})}return(a,t)=>(u(),c("micro-app",{name:e.value.name,url:e.value.url,baseroute:e.value.baseroute,data:o.value,onMounted:s,inline:"",disableSandbox:"","keep-alive":""},null,40,m))}});export{A as default};
