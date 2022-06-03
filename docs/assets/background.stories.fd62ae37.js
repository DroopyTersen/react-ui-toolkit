var d=Object.defineProperty;var c=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var n=(o,t,e)=>t in o?d(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,i=(o,t)=>{for(var e in t||(t={}))p.call(t,e)&&n(o,e,t[e]);if(c)for(var e of c(t))g.call(t,e)&&n(o,e,t[e]);return o};import{s as m}from"./storybook.utils.67de74f5.js";import{j as l}from"./jsx-runtime.b789c2e1.js";import"./index.be79fcbf.js";function r({colors:o,className:t=""}){return l("div",{className:"w-50 d-flex flex-column "+t,children:o.map(e=>l(a,i({},e),e.color))})}function a({color:o,text:t="dark",className:e=""}){return l("div",{className:`p-4 ${o} text-${t} ${e}`,children:o})}try{r.displayName="ColorPalette",r.__docgenInfo={description:"",displayName:"ColorPalette",props:{colors:{defaultValue:null,description:"",name:"colors",required:!0,type:{name:"ColorConfig[]"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/ui-toolkit/components/theme/ColorPalette.tsx#ColorPalette"]={docgenInfo:r.__docgenInfo,name:"ColorPalette",path:"src/ui-toolkit/components/theme/ColorPalette.tsx#ColorPalette"})}catch{}try{a.displayName="ColorSwatch",a.__docgenInfo={description:"",displayName:"ColorSwatch",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"string"}},text:{defaultValue:{value:"dark"},description:"",name:"text",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/ui-toolkit/components/theme/ColorPalette.tsx#ColorSwatch"]={docgenInfo:a.__docgenInfo,name:"ColorSwatch",path:"src/ui-toolkit/components/theme/ColorPalette.tsx#ColorSwatch"})}catch{}const S={title:"Design System",component:r,argTypes:{children:{control:!1}}},{createStory:s}=m(r),u=[{color:"bg-primary",text:"light"},{color:"bg-secondary",text:"light"},{color:"bg-body",text:"dark"},{color:"bg-success",text:"light"},{color:"bg-info",text:"light"},{color:"bg-warning",text:"dark"},{color:"bg-danger",text:"light"},{color:"bg-dark",text:"light"},{color:"bg-light",text:"dark"}],x=s({colors:u}),y=[{color:"bg-primary",text:"light"},{color:"bg-primary bg-opacity-75",text:"light"},{color:"bg-primary bg-opacity-50",text:"dark"},{color:"bg-primary bg-opacity-25",text:"dark"},{color:"bg-primary bg-opacity-10",text:"dark"}],b=s({colors:y,className:"bg-white"}),O=["BackgroundColors","BackgroundOpacity"];export{x as BackgroundColors,b as BackgroundOpacity,O as __namedExportsOrder,S as default};
//# sourceMappingURL=background.stories.fd62ae37.js.map