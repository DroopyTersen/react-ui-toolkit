var l=Object.defineProperty,y=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var p=(e,r,t)=>r in e?l(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,a=(e,r)=>{for(var t in r||(r={}))L.call(r,t)&&p(e,t,r[t]);if(f)for(var t of f(r))g.call(r,t)&&p(e,t,r[t]);return e},s=(e,r)=>y(e,x(r));import{r as u}from"./index.be79fcbf.js";function h(e,r){switch(r.type){case"start":return s(a({},e),{isLoading:!0,data:r.data||e.data||null,error:""});case"success":return s(a({},e),{isLoading:!1,data:r.data,error:""});case"error":return s(a({},e),{isLoading:!1,error:r.error});case"replace":return s(a({},e),{isLoading:!1,data:r.data,error:""});default:return e}}function w(e,r,t){const[i,c]=u.exports.useReducer(h,{isLoading:!1,error:"",data:t}),d=u.exports.useRef(e);return u.exports.useEffect(()=>{d.current=e}),u.exports.useEffect(()=>{let o=!1;return(async()=>{try{c({type:"start",data:t});const n=await d.current(...r);if(o)return;c({type:"success",data:n})}catch(n){c({type:"error",error:n})}})(),()=>{o=!0}},r),s(a({},i),{replace:o=>c({type:"replace",data:o})})}export{w as u};
//# sourceMappingURL=useAsyncData.85b8bd21.js.map
