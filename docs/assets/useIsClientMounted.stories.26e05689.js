var g=Object.defineProperty,m=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var d=(e,t,n)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,i=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&d(e,n,t[n]);if(a)for(var n of a(t))u.call(t,n)&&d(e,n,t[n]);return e},l=(e,t)=>m(e,w(t));var p=(e,t)=>{var n={};for(var r in e)h.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&a)for(var r of a(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n};import"./index.be79fcbf.js";import{c as o,A as y,M as f}from"./Props.dd6274f3.js";import"./iframe.236b0c21.js";import"./jsx-runtime.b789c2e1.js";import"./index.7fa186ee.js";import"./string.bf3fd91c.js";const M={},b="wrapper";function c(n){var r=n,{components:e}=r,t=p(r,["components"]);return o(b,l(i(i({},M),t),{components:e,mdxType:"MDXLayout"}),o(f,{title:"Hooks/useIsClientMounted",mdxType:"Meta"}),o("h1",null,"useIsClientMounted"),o("p",null,"Tells you whether the client side app has hydrated. This is useful for only rendering things that should appear clientside."),o("p",null,`If you aren't careful, and render too quickly you'll get an issue where the server render doesn't
match the initial pass of the client render, which will cause Next to throw an error as it tries to rehydrate the app.`),o("pre",null,o("code",{parentName:"pre",className:"language-tsx"},`import { useIsClientMounted } from "~ui-toolkit/hooks/useIsClientMounted";

// The Right way
const Demo = () => {
  let { isLoggedIn } = useAuth();
  let isClientMounted = useIsClientMounted();

  return (
    <header>
      {/*
      If its pre-rendering (on the server) we def won't
      have a logged in user, but we don't want to render the
      login button or there might be a blip when the clientside
      app hypdrates with a logged in user.
    */}
      {isClientMounted && !isLoggedIn && (
        <a className="btn btn-link" href={apiRoutes.login(location.href)}>
          Login
        </a>
      )}
    </header>
  );
};
`)),o("p",null,"First instinct might be to do something like this. But it will cause a NextJS hydration error because the server render won't match the first pass of the client render."),o("pre",null,o("code",{parentName:"pre",className:"language-tsx"},`// The incorrect way
const Demo = () => {
  let { isLoggedIn } = useAuth();
  let isServer = checkIsServer();

  return (
    <header>
      {/*
      If its pre-rendering (on the server) we def won't
      have a logged in user, but we don't want to render the
      login button or there might be a blip when the clientside
      app hypdrates with a logged in user.
    */}

      {!isServer && !isLoggedIn && (
        <a className="btn btn-link" href={apiRoutes.login(location.href)}>
          Login
        </a>
      )}
    </header>
  );
};
`)))}c.isMDXComponent=!0;const I=()=>{throw new Error("Docs-only story")};I.parameters={docsOnly:!0};const s={title:"Hooks/useIsClientMounted",includeStories:["__page"]},C={};s.parameters=s.parameters||{};s.parameters.docs=l(i({},s.parameters.docs||{}),{page:()=>o(y,{mdxStoryNameToKey:C,mdxComponentAnnotations:s},o(c,null))});const T=["__page"];export{T as __namedExportsOrder,I as __page,s as default};
//# sourceMappingURL=useIsClientMounted.stories.26e05689.js.map
