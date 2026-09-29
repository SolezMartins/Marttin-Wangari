
import React,{__setRootRenderer,__beginInstance,__flushEffects,Fragment} from './react.js';
const VNODE=Symbol('vnode');
let container=null, oldTree=null, rootVnode=null;
export function createRoot(el){container=el; const render=v=>{if(v!==undefined) rootVnode=v; oldTree=patch(container,oldTree,rootVnode,'0'); __flushEffects();}; __setRootRenderer(()=>render(rootVnode)); return {render};}
function isText(v){return typeof v==='string'||typeof v==='number';}
function norm(v){ if(v==null||v===false||v===true)return null; if(Array.isArray(v))return {type:Fragment,props:{children:v},key:null}; return v; }
function childList(v){const c=(v?.props?.children)||[]; return Array.isArray(c)?c:[c];}
function setProp(el,k,v,prev){
  if(k==='children'||k==='key'||k==='ref'||k==='dangerouslySetInnerHTML')return;
  if(k==='className'){el.className=v??'';return;}
  if(k==='style' && v && typeof v==='object'){for(const [a,b] of Object.entries(v))el.style[a]=b??'';return;}
  if(k==='value'||k==='checked'||k==='selected'){el[k]=v; return;}
  if(k.startsWith('on')&&typeof v==='function'){const evt=k.slice(2).toLowerCase(); if(prev)el.removeEventListener(evt,prev); el.addEventListener(evt,v); return;}
  if(v===false||v==null){el.removeAttribute(k); return;}
  if(v===true){el.setAttribute(k,''); return;}
  el.setAttribute(k,String(v));
}
function createDom(v,path){v=norm(v); if(v==null)return null; if(isText(v))return document.createTextNode(String(v)); if(v.type===Fragment){const f=document.createDocumentFragment(); childList(v).forEach((c,i)=>{const n=createDom(c,path+'.'+i); if(n)f.appendChild(n)}); const wrap=document.createElement('span'); wrap.setAttribute('data-fragment',''); wrap.style.display='contents'; [...f.childNodes].forEach(n=>wrap.appendChild(n)); return wrap;}
  if(typeof v.type==='function'){__beginInstance(path+'|'+(v.type.name||'anon')); const child=v.type(v.props||{}); const dom=createDom(child,path+'.f'); if(dom){dom.__vnode=child; dom.__childVnode=child;} return dom;}
  const el=document.createElement(v.type); el.__vnode=v; Object.entries(v.props||{}).forEach(([k,val])=>setProp(el,k,val)); childList(v).forEach((c,i)=>{const n=createDom(c,path+'.'+i); if(n)el.appendChild(n)}); return el;
}
function patch(parent,oldV,newV,path,index=0){newV=norm(newV); oldV=norm(oldV); const childNode=parent.childNodes[index];
  if(oldV==null){const n=createDom(newV,path); if(n)parent.appendChild(n); return newV;}
  if(newV==null){if(childNode)parent.removeChild(childNode); return null;}
  if(isText(oldV)||isText(newV)){ if(isText(oldV)&&isText(newV)){ if(String(oldV)!==String(newV))childNode.textContent=String(newV); return newV; } const n=createDom(newV,path); if(n)parent.replaceChild(n,childNode); return newV; }
  if(oldV.type!==newV.type){const n=createDom(newV,path); if(n)parent.replaceChild(n,childNode); return newV;}
  if(typeof newV.type==='function'){__beginInstance(path+'|'+(newV.type.name||'anon')); const childNew=newV.type(newV.props||{}); const childOld=childNode?.__childVnode??oldV.__childVnode; const result=patch(parent,childOld,childNew,path+'.f',index); const dom=parent.childNodes[index]; if(dom)dom.__childVnode=childNew; newV.__childVnode=childNew; return newV; }
  const el=childNode; const oldP=oldV.props||{}, newP=newV.props||{}; const names=new Set([...Object.keys(oldP),...Object.keys(newP)]); names.forEach(k=>{if(k==='children'||k==='key')return; if(oldP[k]!==newP[k])setProp(el,k,newP[k],oldP[k]);});
  const oc=childList(oldV), nc=childList(newV); const max=Math.max(oc.length,nc.length); for(let i=max-1;i>=0;i--){ if(i>=nc.length){if(el.childNodes[i])el.removeChild(el.childNodes[i]);} else if(i>=oc.length){const n=createDom(nc[i],path+'.'+i);if(n)el.appendChild(n);} else patch(el,oc[i],nc[i],path+'.'+i,i); }
  el.__vnode=newV; return newV;
}
