var u=Object.defineProperty,y=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var c=(a,t,n)=>t in a?u(a,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[t]=n,i=(a,t)=>{for(var n in t||(t={}))p.call(t,n)&&c(a,n,t[n]);if(s)for(var n of s(t))m.call(t,n)&&c(a,n,t[n]);return a},l=(a,t)=>y(a,N(t));var d=(a,t)=>{var n={};for(var r in a)p.call(a,r)&&t.indexOf(r)<0&&(n[r]=a[r]);if(a!=null&&s)for(var r of s(a))t.indexOf(r)<0&&m.call(a,r)&&(n[r]=a[r]);return n};import"./index.be79fcbf.js";import{c as e,A as D,M as g}from"./Props.dd6274f3.js";import"./iframe.236b0c21.js";import"./jsx-runtime.b789c2e1.js";import"./blocks.f4d26a22.js";import"./string.bf3fd91c.js";const A={},j="wrapper";function h(n){var r=n,{components:a}=r,t=d(r,["components"]);return e(j,l(i(i({},A),t),{components:a,mdxType:"MDXLayout"}),e(g,{title:"Async Data/1. AsyncData vs useAsyncData",mdxType:"Meta"}),e("h1",null,"AsyncData vs useAsyncData"),e("p",null,"There are 2 primary ways to fetch data in the application:"),e("ol",null,e("li",{parentName:"ol"},"The ",e("inlineCode",{parentName:"li"},"AsyncData")," component"),e("li",{parentName:"ol"},"The ",e("inlineCode",{parentName:"li"},"useAsyncData")," hook")),e("p",null,"Both share the same API, but ",e("inlineCode",{parentName:"p"},"AsyncData")," is a higher level abstraction."),e("ul",null,e("li",{parentName:"ul"},"Try to leverage ",e("inlineCode",{parentName:"li"},"AsyncData")," first"),e("li",{parentName:"ul"},"Drop down to ",e("inlineCode",{parentName:"li"},"useAsyncData")," for more control and/or outlier scenarios.")),e("p",null,"Here is an example that searches projects with ",e("inlineCode",{parentName:"p"},"useAsyncData"),"."),e("p",null,e("em",{parentName:"p"},"NOTE: ",e("strong",{parentName:"em"},"This would not be the preferred approach"),". See further below for the ",e("inlineCode",{parentName:"em"},"AsyncData")," example.")),e("pre",null,e("code",{parentName:"pre",className:"language-tsx"},`const DataDemoPage: NextPage = () => {
  // Use React state to track the search text
  let [name, setName] = useState("");

  // get an instance of the Projects Data Service
  let projects = useProjectService();

  // Pass the name to the searchProjects method. Only make the request if the user has typed 2 charachters.
  let { data, isLoading, error } = useAsyncData(projects.searchProjects, [name], {
    skip: !name || name?.length < 3,
  });

  return (
    <Main className="data-demo-page">
      {/* User input for the search text */}
      <InputField
        type="search"
        label="Search Projects"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {/* If its loading show a spinner */}
      {isLoading && <Loading />}

      {/* If there is an error let the user know */}
      {error && <ErrorContainer title="Unable to search Projects" />}

      {/* If there is data, show the results */}
      {data && (
        <Grid>
          {data?.map((project) => (
            <Card key={project.projectId} title={project.projectName} />
          ))}
        </Grid>
      )}
    </Main>
  );
};

export default DataDemoPage;
`)),e("ul",null,e("li",{parentName:"ul"},"Notice how in the JSX we have to do checks for ",e("inlineCode",{parentName:"li"},"isLoading")," and ",e("inlineCode",{parentName:"li"},"error"),"?",e("ul",{parentName:"li"},e("li",{parentName:"ul"},"That's tedious and very common"),e("li",{parentName:"ul"},`We technically aren't being totally exhaustive here because we could
get into an impossible state where we show both error container and a data grid.`)))),e("p",null,"The ",e("inlineCode",{parentName:"p"},"AsyncData")," component abstracts away the render checks for ",e("inlineCode",{parentName:"p"},"error")," and ",e("inlineCode",{parentName:"p"},"isLoading"),". Here is the same same example as above, but with ",e("inlineCode",{parentName:"p"},"AsyncData"),":"),e("pre",null,e("code",{parentName:"pre",className:"language-tsx"},`const DataDemoPage: NextPage = () => {
  // Use React state to track the search text
  let [name, setName] = useState("");

  // get an instance of the Projects Data Service
  let projects = useProjectService();

  return (
    <Main className="data-demo-page">
      {/* User input for the search text */}
      <InputField
        type="search"
        label="Search Projects"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {/* The AsyncData component can be used instead of useAsyncData for most scenarios. */}
      <AsyncData
        asyncFn={projects.searchProjects}
        params={[name]}
        options={{ skip: !name || name.length < 3 }}
      >
        {(data) => (
          <Grid>
            {data?.map((project) => (
              <Card key={project.projectId} title={project.projectName} />
            ))}
          </Grid>
        )}
      </AsyncData>
    </Main>
  );
};

export default DataDemoPage;
`)))}h.isMDXComponent=!0;const f=()=>{throw new Error("Docs-only story")};f.parameters={docsOnly:!0};const o={title:"Async Data/1. AsyncData vs useAsyncData",includeStories:["__page"]},C={};o.parameters=o.parameters||{};o.parameters.docs=l(i({},o.parameters.docs||{}),{page:()=>e(D,{mdxStoryNameToKey:C,mdxComponentAnnotations:o},e(h,null))});const T=["__page"];export{T as __namedExportsOrder,f as __page,o as default};
//# sourceMappingURL=AsyncData-useAsyncData.stories.664590fb.js.map
