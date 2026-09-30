
let rootRender = null;
let currentInstance = null;
let hookIndex = 0;
const hookStore = new Map();
const effectQueue = [];
const Fragment = Symbol('Fragment');
function getHooks(){ if(!hookStore.has(currentInstance)) hookStore.set(currentInstance,[]); return hookStore.get(currentInstance); }
export function createElement(type, props, ...children){
  props = props ? {...props} : {};
  const flat=[]; const add=v=>{if(Array.isArray(v))v.forEach(add); else if(v===null||v===undefined||v===false||v===true){} else flat.push(v)}; children.forEach(add);
  props.children = flat;
  return {type, props, key: props.key ?? null};
}
export function cloneElement(el, extra, ...children){ return createElement(el.type, {...el.props,...extra}, ...(children.length?children:el.props?.children||[])); }
export function useState(initial){ const hooks=getHooks(); const i=hookIndex++; if(!(i in hooks)) hooks[i]=typeof initial==='function'?initial():initial; const set=v=>{const next=typeof v==='function'?v(hooks[i]):v; if(Object.is(next,hooks[i]))return; hooks[i]=next; schedule();}; return [hooks[i],set]; }
export function useMemo(factory,deps){ const hooks=getHooks(); const i=hookIndex++; const prev=hooks[i]; if(!prev || deps==null || deps.some((d,j)=>!Object.is(d,prev.deps[j]))){ hooks[i]={deps, value:factory()}; } return hooks[i].value; }
export function useEffect(effect,deps){ const hooks=getHooks(); const i=hookIndex++; const prev=hooks[i]; const changed=!prev || deps==null || deps.some((d,j)=>!Object.is(d,prev.deps[j])); hooks[i]={deps,cleanup:prev?.cleanup}; if(changed) effectQueue.push(()=>{ try{prev?.cleanup?.();}catch{} const c=effect(); hooks[i].cleanup=typeof c==='function'?c:undefined; }); }
export { Fragment };
export default {createElement,cloneElement,useState,useEffect,useMemo,Fragment};
function schedule(){ queueMicrotask(()=>rootRender?.()); }
export function __setRootRenderer(fn){rootRender=fn;}
export function __beginInstance(id){currentInstance=id;hookIndex=0;}
export function __flushEffects(){ while(effectQueue.length){ const fn=effectQueue.shift(); try{fn();}catch(e){console.error(e);} } }
