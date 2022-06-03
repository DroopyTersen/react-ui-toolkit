import{r as i}from"./index.be79fcbf.js";import{a as c,j as r}from"./jsx-runtime.b789c2e1.js";function l({children:a,onClear:t,className:n=""}){return c("div",{className:`d-flex align-items-center bg-primary bg-opacity-10 rounded-pill text-small text-spaced text-uppercase ${n}`,children:[r("span",{className:"ps-3",children:a}),r("button",{type:"button",className:"btn-close","aria-label":"clear filter",onClick:()=>t(),style:{fontSize:".6rem",lineHeight:".6rem",padding:".7rem",borderRadius:"50%"}})]})}try{l.displayName="ClearablePill",l.__docgenInfo={description:"",displayName:"ClearablePill",props:{onClear:{defaultValue:null,description:"",name:"onClear",required:!0,type:{name:"() => void"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/ui-toolkit/components/ClearablePill/ClearablePill.tsx#ClearablePill"]={docgenInfo:l.__docgenInfo,name:"ClearablePill",path:"src/ui-toolkit/components/ClearablePill/ClearablePill.tsx#ClearablePill"})}catch{}var d={parameters:{storySource:{source:`import React from "react";
import { useCallback, useState } from "react";
import { ClearablePill } from "./ClearablePill";

export default {
  title: "Forms & Inputs/ClearablePill",
  component: ClearablePill,
  argTypes: {
    children: {
      control: false,
    },
  },
};

export const Basic = () => {
  let [items, setItems] = useState(["One", "Two", "Three", "Four", "Five", "Six"]);
  let clearItem = useCallback(
    (item: string) => {
      setItems((prev) => prev.filter((i) => i !== item));
    },
    [setItems]
  );
  return (
    <div className="d-flex gap-2 align-items-center">
      {items.map((item) => (
        <ClearablePill key={item} onClear={() => clearItem(item)}>
          {item}
        </ClearablePill>
      ))}
    </div>
  );
};
`,locationsMap:{basic:{startLoc:{col:21,line:15},endLoc:{col:1,line:32},startBody:{col:21,line:15},endBody:{col:1,line:32}}}}},title:"Forms & Inputs/ClearablePill",component:l,argTypes:{children:{control:!1}}};const u=()=>{let[a,t]=i.exports.useState(["One","Two","Three","Four","Five","Six"]),n=i.exports.useCallback(e=>{t(s=>s.filter(o=>o!==e))},[t]);return r("div",{className:"d-flex gap-2 align-items-center",children:a.map(e=>r(l,{onClear:()=>n(e),children:e},e))})},C=["Basic"];export{u as Basic,C as __namedExportsOrder,d as default};
//# sourceMappingURL=ClearablePill.stories.1f61aa5c.js.map
