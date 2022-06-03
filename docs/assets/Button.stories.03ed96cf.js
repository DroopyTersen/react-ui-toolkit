import{s as t}from"./storybook.utils.67de74f5.js";import{B as o}from"./Button.14fb5068.js";import{j as e,a as c,F as r}from"./jsx-runtime.b789c2e1.js";import"./index.be79fcbf.js";import"./index.a228f116.js";import"./index.0c35013c.js";var p={parameters:{storySource:{source:`import React from "react";

import { setupStories } from "../_storybook/storybook.utils";
import { Button, ButtonProps } from "./Button";

export default {
  title: "Forms & Inputs/Button",
  component: Button,
};

const { createStory } = setupStories<ButtonProps>(Button);

export const Primary = createStory({
  color: "primary",
  children: "Click Me",
});

export const Secondary = createStory({
  color: "secondary",
  children: "Click Me",
});

export const Danger = createStory({
  color: "danger",
  children: "Click Me",
});

export const Default = createStory({
  children: "Click Me",
});

export const Disabled = createStory({
  children: "You can't click me",
  color: "primary",
  disabled: true,
});

export const Outlined = createStory({
  color: "primary",
  variant: "outline",
  children: "Click Me",
});

export const Link = createStory({
  to: "/clients",
  variant: "link",
  children: "Clients",
});

export const ButtonLink = createStory({
  to: "/clients",
  children: "This renders as an <a> tag because the 'to' prop was set",
});
export const Large = createStory({
  color: "primary",
  scale: "lg",
  children: "Click Me",
});

export const Small = createStory({
  color: "primary",
  scale: "sm",
  children: "Click Me",
});

export const IconButton = createStory({
  color: "primary",
  children: <i className="bi bi-pencil"></i>,
});

export const TextWithIcon = createStory({
  variant: "outline",
  color: "danger",
  children: (
    <>
      Menu <i className="fas fa-bars"></i>
    </>
  ),
});
`,locationsMap:{primary:{startLoc:{col:23,line:13},endLoc:{col:2,line:16},startBody:{col:23,line:13},endBody:{col:2,line:16}},secondary:{startLoc:{col:25,line:18},endLoc:{col:2,line:21},startBody:{col:25,line:18},endBody:{col:2,line:21}},danger:{startLoc:{col:22,line:23},endLoc:{col:2,line:26},startBody:{col:22,line:23},endBody:{col:2,line:26}},default:{startLoc:{col:23,line:28},endLoc:{col:2,line:30},startBody:{col:23,line:28},endBody:{col:2,line:30}},disabled:{startLoc:{col:24,line:32},endLoc:{col:2,line:36},startBody:{col:24,line:32},endBody:{col:2,line:36}},outlined:{startLoc:{col:24,line:38},endLoc:{col:2,line:42},startBody:{col:24,line:38},endBody:{col:2,line:42}},link:{startLoc:{col:20,line:44},endLoc:{col:2,line:48},startBody:{col:20,line:44},endBody:{col:2,line:48}},"button-link":{startLoc:{col:26,line:50},endLoc:{col:2,line:53},startBody:{col:26,line:50},endBody:{col:2,line:53}},large:{startLoc:{col:21,line:54},endLoc:{col:2,line:58},startBody:{col:21,line:54},endBody:{col:2,line:58}},small:{startLoc:{col:21,line:60},endLoc:{col:2,line:64},startBody:{col:21,line:60},endBody:{col:2,line:64}},"icon-button":{startLoc:{col:26,line:66},endLoc:{col:2,line:69},startBody:{col:26,line:66},endBody:{col:2,line:69}},"text-with-icon":{startLoc:{col:28,line:71},endLoc:{col:2,line:79},startBody:{col:28,line:71},endBody:{col:2,line:79}}}}},title:"Forms & Inputs/Button",component:o};const{createStory:n}=t(o),m=n({color:"primary",children:"Click Me"}),u=n({color:"secondary",children:"Click Me"}),B=n({color:"danger",children:"Click Me"}),h=n({children:"Click Me"}),L=n({children:"You can't click me",color:"primary",disabled:!0}),k=n({color:"primary",variant:"outline",children:"Click Me"}),S=n({to:"/clients",variant:"link",children:"Clients"}),x=n({to:"/clients",children:"This renders as an <a> tag because the 'to' prop was set"}),b=n({color:"primary",scale:"lg",children:"Click Me"}),g=n({color:"primary",scale:"sm",children:"Click Me"}),M=n({color:"primary",children:e("i",{className:"bi bi-pencil"})}),f=n({variant:"outline",color:"danger",children:c(r,{children:["Menu ",e("i",{className:"fas fa-bars"})]})}),C=["Primary","Secondary","Danger","Default","Disabled","Outlined","Link","ButtonLink","Large","Small","IconButton","TextWithIcon"];export{x as ButtonLink,B as Danger,h as Default,L as Disabled,M as IconButton,b as Large,S as Link,k as Outlined,m as Primary,u as Secondary,g as Small,f as TextWithIcon,C as __namedExportsOrder,p as default};
//# sourceMappingURL=Button.stories.03ed96cf.js.map
