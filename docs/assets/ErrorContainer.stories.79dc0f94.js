import{s as i}from"./storybook.utils.67de74f5.js";import{a as n,j as r,F as c}from"./jsx-runtime.b789c2e1.js";import"./index.be79fcbf.js";const e=({title:t="Something unexpectedly went wrong! \u{1F622}",children:a=void 0,className:s=""})=>n("section",{className:"p-4 bg-light rounded shadow-sm "+s,children:[t&&r("h1",{className:"text-danger",children:t}),a]});try{e.displayName="ErrorContainer",e.__docgenInfo={description:"",displayName:"ErrorContainer",props:{title:{defaultValue:{value:"Something unexpectedly went wrong! \u{1F622}"},description:"The primary error message to display",name:"title",required:!1,type:{name:"string"}},children:{defaultValue:{value:"undefined"},description:"Additional error details",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/ui-toolkit/components/ErrorContainer/ErrorContainer.tsx#ErrorContainer"]={docgenInfo:e.__docgenInfo,name:"ErrorContainer",path:"src/ui-toolkit/components/ErrorContainer/ErrorContainer.tsx#ErrorContainer"})}catch{}var m={parameters:{storySource:{source:`import React from "react";

import { setupStories } from "../_storybook/storybook.utils";
import { ErrorContainer, ErrorContainerProps } from "./ErrorContainer";

export default {
  title: "Surfaces/ErrorContainer",
  component: ErrorContainer,
  argTypes: { children: { control: false } },
};

const { createStory } = setupStories<ErrorContainerProps>(ErrorContainer);

export const Basic = createStory({
  title: "Uh oh something went wrong!",
});

export const WithDetailsMessage = createStory({
  title: "Unable to save item",
  children: <p className="font-monospace">The request to the server responded with 500.</p>,
});
export const WithCustomErrorBody = createStory({
  title: "Unable to save item",
  children: (
    <>
      <p className="font-monospace">The request to the server responded with 500.</p>
      <button className="btn btn-primary">Try again</button>
    </>
  ),
});
`,locationsMap:{basic:{startLoc:{col:21,line:14},endLoc:{col:2,line:16},startBody:{col:21,line:14},endBody:{col:2,line:16}},"with-details-message":{startLoc:{col:34,line:18},endLoc:{col:2,line:21},startBody:{col:34,line:18},endBody:{col:2,line:21}},"with-custom-error-body":{startLoc:{col:35,line:22},endLoc:{col:2,line:30},startBody:{col:35,line:22},endBody:{col:2,line:30}}}}},title:"Surfaces/ErrorContainer",component:e,argTypes:{children:{control:!1}}};const{createStory:o}=i(e),h=o({title:"Uh oh something went wrong!"}),u=o({title:"Unable to save item",children:r("p",{className:"font-monospace",children:"The request to the server responded with 500."})}),y=o({title:"Unable to save item",children:n(c,{children:[r("p",{className:"font-monospace",children:"The request to the server responded with 500."}),r("button",{className:"btn btn-primary",children:"Try again"})]})}),f=["Basic","WithDetailsMessage","WithCustomErrorBody"];export{h as Basic,y as WithCustomErrorBody,u as WithDetailsMessage,f as __namedExportsOrder,m as default};
//# sourceMappingURL=ErrorContainer.stories.79dc0f94.js.map
