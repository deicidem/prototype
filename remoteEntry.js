import{i as c,r as u}from"./assets/root__mf_v__runtimeInit__mf_v__-CpgtMQsQ.js";import n from"./assets/virtualExposes-BIHI7g3E.js";const m={},_=[],o={},s="default",a="root";async function l(t={},e=[]){const r=c.init({name:a,remotes:_,shared:m,plugins:[],shareStrategy:"version-first"});var i=o[s];if(i||(i=o[s]={from:a}),!(e.indexOf(i)>=0)){e.push(i),r.initShareScopeMap("default",t);try{await Promise.all(await r.initializeSharing("default",{strategy:"version-first",from:"build",initScope:e}))}catch(f){console.error(f)}return u.initResolve(r),r}}function p(t){if(!(t in n))throw new Error(`Module ${t} does not exist in container.`);return n[t]().then(e=>()=>e)}export{p as get,l as init};
