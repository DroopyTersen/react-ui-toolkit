var h=Object.defineProperty,N=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var d=(a,t,l)=>t in a?h(a,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[t]=l,i=(a,t)=>{for(var l in t||(t={}))p.call(t,l)&&d(a,l,t[l]);if(n)for(var l of n(t))m.call(t,l)&&d(a,l,t[l]);return a},c=(a,t)=>N(a,f(t));var u=(a,t)=>{var l={};for(var s in a)p.call(a,s)&&t.indexOf(s)<0&&(l[s]=a[s]);if(a!=null&&n)for(var s of n(a))t.indexOf(s)<0&&m.call(a,s)&&(l[s]=a[s]);return l};import"./index.be79fcbf.js";import{c as e,A as S,M as y}from"./Props.ae9119dc.js";import"./iframe.ad13290e.js";import"./jsx-runtime.b789c2e1.js";import"./blocks.ff828c40.js";import{S as o}from"./Surface.7721de2e.js";import"./string.bf3fd91c.js";const w={},b="wrapper";function g(l){var s=l,{components:a}=s,t=u(s,["components"]);return e(b,c(i(i({},w),t),{components:a,mdxType:"MDXLayout"}),e(y,{title:"Design System/Grid Layout",mdxType:"Meta"}),e("h1",null,"Grid Layouts"),e("p",null,"Bootstrap 5 comes with two separate grid systems. ",e("strong",{parentName:"p"},"We are using the new one based on CSS Grid")),e("p",null,e("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/layout/css-grid/#examples"},"Bootstrap CSS Grid Docs")),e("blockquote",null,e("p",{parentName:"blockquote"},e("strong",{parentName:"p"},"Important!"),` If you go to the docs, currently the
default `,e("a",{parentName:"p",href:"https://getbootstrap.com/docs/5.1/layout/grid/"},"Grid")," layout is ",e("strong",{parentName:"p"},"NOT"),` what we want.
`,e("strong",{parentName:"p"},"We want ",e("a",{parentName:"strong",href:"https://getbootstrap.com/docs/5.1/layout/css-grid/#examples"},"CSS Grid")),".")),e("h2",null,"Grid Basics"),e("ul",null,e("li",{parentName:"ul"},"Bootstrap's new grid system is based on ",e("inlineCode",{parentName:"li"},"12")),e("li",{parentName:"ul"},"The grid parent gets a class of ",e("inlineCode",{parentName:"li"},"grid")),e("li",{parentName:"ul"},"Each direct child gets a class of ",e("inlineCode",{parentName:"li"},"grid-col-*")," where ",e("inlineCode",{parentName:"li"},"*")," is a number between 1 and 12")),e("blockquote",null,e("p",{parentName:"blockquote"},"The old grid system was based on 12 too, but with the new the markup is cleaner. It no longer needs a wrapper ",e("inlineCode",{parentName:"p"},".row")," and no longer uses negative margins (phew...).")),e("pre",null,e("code",{parentName:"pre",className:"language-tsx"},`<div className="grid">
  <Surface className="g-col-8">
    <h2>Main Stuff</h2>
  </Surface>

  <Surface className="g-col-4">
    <h2>Right Widget</h2>
  </Surface>

  <Surface className="g-col-12">
    <h2>Full Width</h2>
  </Surface>
</div>
`)),e("div",{className:"grid bg-body p-4"},e(o,{className:"g-col-8",mdxType:"Surface"},e("h2",null,"Main Stuff")),e(o,{className:"g-col-4",mdxType:"Surface"},e("h2",null,"Right Widget")),e(o,{className:"g-col-12",mdxType:"Surface"},e("h2",null,"Full Width"))),e("h2",null,"Responsive Grids"),e("p",null,"If we wanted the previous layout to switch to a vertical stack on mobile, we could do..."),e("ul",null,e("li",{parentName:"ul"},"The first class ",e("inlineCode",{parentName:"li"},"g-col-12")," is applies to everything"),e("li",{parentName:"ul"},"The second class ",e("inlineCode",{parentName:"li"},"g-col-md-8")," only kicks in if the device width is at least the configured ",e("inlineCode",{parentName:"li"},"md")," breakpoint.")),e("pre",null,e("code",{parentName:"pre",className:"language-tsx"},`<div className="grid">
  <Surface className="g-col-12 g-col-md-8">
    <h2>Main Stuff</h2>
  </Surface>

  <Surface className="g-col-12 g-col-md-4">
    <h2>Right Widget</h2>
  </Surface>

  <Surface className="g-col-12">
    <h2>Full Width</h2>
  </Surface>
</div>
`)),e("div",{className:"grid bg-body p-4"},e(o,{className:"g-col-12 g-col-md-8",mdxType:"Surface"},e("h2",null,"Main Stuff")),e(o,{className:"g-col-12 g-col-md-4",mdxType:"Surface"},e("h2",null,"Right Widget")),e(o,{className:"g-col-12",mdxType:"Surface"},e("h2",null,"Full Width"))),e("h2",null,"Start Column (offsets)"),e("p",null,"If you want a grid child to line up at a specific column, you can use the ",e("inlineCode",{parentName:"p"},"g-start-*")," class."),e("pre",null,e("code",{parentName:"pre",className:"language-tsx"},`<div className="grid">
  <Surface className="g-col-6 g-start-6">
    <h2>Right Aligned Widget</h2>
  </Surface>
  <Surface className="g-col-12">
    <h2>Full Width</h2>
  </Surface>
</div>
`)),e("div",{className:"grid bg-body p-4"},e(o,{className:"g-col-6 g-start-7",mdxType:"Surface"},e("h2",null,"Right Aligned idget")),e(o,{className:"g-col-12",mdxType:"Surface"},e("h2",null,"Full Width"))))}g.isMDXComponent=!0;const x=()=>{throw new Error("Docs-only story")};x.parameters={docsOnly:!0};const r={title:"Design System/Grid Layout",includeStories:["__page"]},C={};r.parameters=r.parameters||{};r.parameters.docs=c(i({},r.parameters.docs||{}),{page:()=>e(S,{mdxStoryNameToKey:C,mdxComponentAnnotations:r},e(g,null))});const R=["__page"];export{R as __namedExportsOrder,x as __page,r as default};
//# sourceMappingURL=GridLayout.stories.78882d08.js.map
