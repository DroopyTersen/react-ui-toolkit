var N=Object.defineProperty,f=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var s=(n,a,t)=>a in n?N(n,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[a]=t,l=(n,a)=>{for(var t in a||(a={}))u.call(a,t)&&s(n,t,a[t]);if(o)for(var t of o(a))p.call(a,t)&&s(n,t,a[t]);return n},m=(n,a)=>f(n,h(a));var d=(n,a)=>{var t={};for(var r in n)u.call(n,r)&&a.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&o)for(var r of o(n))a.indexOf(r)<0&&p.call(n,r)&&(t[r]=n[r]);return t};import"./index.be79fcbf.js";import{c as e,A as C,M as g}from"./Props.dd6274f3.js";import"./iframe.236b0c21.js";import"./jsx-runtime.b789c2e1.js";import"./blocks.f4d26a22.js";import{S}from"./SourceCodeLink.be0a1d60.js";import"./string.bf3fd91c.js";const y={},b="wrapper";function c(t){var r=t,{components:n}=r,a=d(r,["components"]);return e(b,m(l(l({},y),a),{components:n,mdxType:"MDXLayout"}),e(g,{title:"Hooks/useSaveForm",mdxType:"Meta"}),e("h1",null,"useSaveForm"),e("p",null,`A thin wrapper around
React Hook Form that lets you manage a Save Form (New or Edit).`),e("pre",null,e("code",{parentName:"pre",className:"language-typescript"},`import { useSaveForm } from "~ui-toolkit/hooks/useSaveForm";

const { register, isSaving, errors, onSubmit } = useSaveForm({
  initial,
  onSave,
  onSuccess,
});
`)),e("p",null,e("strong",{parentName:"p"},"Params")),e("ul",null,e("li",{parentName:"ul"},e("inlineCode",{parentName:"li"},"initial")," is an object representing the initial values of the form."),e("li",{parentName:"ul"},e("inlineCode",{parentName:"li"},"onSave")," is an async function that will be provided the submitted form values.",e("ul",{parentName:"li"},e("li",{parentName:"ul"},"This will not be invoked until a valid form is submitted."))),e("li",{parentName:"ul"},e("inlineCode",{parentName:"li"},"onSuccess")," will be called when the ",e("inlineCode",{parentName:"li"},"onSave")," function resolves successfully.")),e("p",null,e("strong",{parentName:"p"},"Returns")),e("p",null,"A ",e("a",{parentName:"p",href:"https://react-hook-form.com/api/useform/register"},"full React Hook Form object"),` with a
few extra properties tacked on:`),e("ul",null,e("li",{parentName:"ul"},"An ",e("inlineCode",{parentName:"li"},"isSaving")," flag so you can update UI accordingly"),e("li",{parentName:"ul"},"An ",e("inlineCode",{parentName:"li"},"onSubmit")," handler you can apply directly to your form")),e("h2",null,"Dependencies"),e("pre",null,e("code",{parentName:"pre"},`npm i react-hook-form
`)),e("h2",null,"Import"),e("pre",null,e("code",{parentName:"pre",className:"language-js"},`import { useSaveForm } from "~ui-toolkit/hooks/useSaveForm";
`)),e("p",null,e("em",{parentName:"p"},"Real world example")),e("pre",null,e("code",{parentName:"pre",className:"language-tsx"},`export const ClientForm = ({ initial, lookups, onSuccess, onCancel }: Props) => {
  const form = useSaveForm({ onSave: saveClient, initial, onSuccess });

  return (
    <form onSubmit={form.onSubmit}>
      <fieldset disabled={form.isSaving}>
        <InputField
          name="id"
          id="id"
          label="Tax ID"
          error={form.errors.id}
          ref={form.register({ required: true })}
        />

        <InputField
          name="legalName"
          id="legalName"
          label="Legal Name"
          error={form.errors.legalName}
          ref={form.register({ required: true })}
        />
      </fieldset>
      <div className="form-actions">
        <button className="btn btn-link mr-2" type="button" onClick={() => onCancel()}>
          CANCEL
        </button>
        <button className="btn btn-primary">SAVE</button>
      </div>
    </form>
  );
};

const saveClient = async (client: Client) => {
  await request(\`/api/clients/\${client.id}\`, {
    method: "PUT",
    body: JSON.stringify(client),
  });
  return client;
};
`)),e("h2",null,"Register Inputs"),e("ul",null,e("li",{parentName:"ul"},"The ",e("inlineCode",{parentName:"li"},"useSaveForm")," hook returns a ",e("inlineCode",{parentName:"li"},"register")," that you can use on the ",e("inlineCode",{parentName:"li"},"ref")," of any input in your form",e("ul",{parentName:"li"},e("li",{parentName:"ul"},e("strong",{parentName:"li"},"IMPORTANT"),": The input you set the ",e("inlineCode",{parentName:"li"},"ref"),"/",e("inlineCode",{parentName:"li"},"register")," on MUST have a ",e("inlineCode",{parentName:"li"},"name"),"."),e("li",{parentName:"ul"},"See React Hook Form form more information")))),e("pre",null,e("code",{parentName:"pre",className:"language-tsx"},`<input className="form-input" name="id" id="id" ref={form.register({ required: true })} />
`)),e("h2",null,"Saving (Submit)"),e("ul",null,e("li",{parentName:"ul"},"Set your form's ",e("inlineCode",{parentName:"li"},"onSubmit")," to the ",e("inlineCode",{parentName:"li"},"onSubmit")," returned by the hook"),e("li",{parentName:"ul"},"When the user submit's, if the form is valid, ",e("inlineCode",{parentName:"li"},"onSave")," will be called."),e("li",{parentName:"ul"},"If the ",e("inlineCode",{parentName:"li"},"onSave")," is successful, ",e("inlineCode",{parentName:"li"},"onSuccess")," will be called and passed whatever ",e("inlineCode",{parentName:"li"},"onSave")," returned.")),e("blockquote",null,e("p",{parentName:"blockquote"},"Everything fires off the default ",e("inlineCode",{parentName:"p"},"onSubmit")," event, so no need for an ",e("inlineCode",{parentName:"p"},"onClick"),", just use a button where type is ",e("inlineCode",{parentName:"p"},"submit"),".")),e("pre",null,e("code",{parentName:"pre",className:"language-tsx"},`<form onSubmit={form.onSubmit}>...</form>
`)),e("h2",null,"Validation errors"),e("ul",null,e("li",{parentName:"ul"},e("inlineCode",{parentName:"li"},"useSaveForm")," will return with an ",e("inlineCode",{parentName:"li"},"errors")," object.",e("ul",{parentName:"li"},e("li",{parentName:"ul"},"If your input has an error you can find it on the ",e("inlineCode",{parentName:"li"},"errors")," object by the specified input ",e("inlineCode",{parentName:"li"},"name")))),e("li",{parentName:"ul"},"Wrap each input with a ",e("inlineCode",{parentName:"li"},"FormControl")),e("li",{parentName:"ul"},"Set the FormControl ",e("inlineCode",{parentName:"li"},"error")," prop to be ",e("inlineCode",{parentName:"li"},"form.errors.yourInput"))),e("pre",null,e("code",{parentName:"pre",className:"language-tsx"},`<FormControl name="legalName" id="legalName" label="Legal Name" error={form.errors.legalName}>
  ...
</FormControl>
`)),e("h2",null,"New vs Edit (Hydrating the form)"),e("p",null,"The ",e("inlineCode",{parentName:"p"},"useSaveForm")," doesn't really make a distinction between new and edit. It just takes in ",e("inlineCode",{parentName:"p"},"initial"),". But practically:"),e("ul",null,e("li",{parentName:"ul"},'If it is in "New" mode, then the ',e("inlineCode",{parentName:"li"},"initial")," prop would be empty"),e("li",{parentName:"ul"},"If it is edit mode, a parent component would take care of fetching the item to edit and passing it in as ",e("inlineCode",{parentName:"li"},"initial"))),e("p",null,e("strong",{parentName:"p"},"The parent of the form will try to fetch the item to edit if necessary")),e("pre",null,e("code",{parentName:"pre",className:"language-tsx"},`export const ClientFormView = ({ title }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div>
      <h1>{title}</h1>
      <AsyncData asyncFn={fetchClient} params={[id]}>
        {(data) => (
          <ClientForm
            initial={data.client}
            onCancel={() => history.back()}
            onSuccess={(result) => navigate("/clients/" + result.id)}
          />
        )}
      </AsyncData>
    </div>
  );
};

const fetchClient = async (id) => {
  return id ? await request("/api/clients/" + id) : { client: {} };
};
`)),e(S,{path:"hooks/useSaveForm.ts",mdxType:"SourceCodeLink"},"View Source"))}c.isMDXComponent=!0;const v=()=>{throw new Error("Docs-only story")};v.parameters={docsOnly:!0};const i={title:"Hooks/useSaveForm",includeStories:["__page"]},w={};i.parameters=i.parameters||{};i.parameters.docs=m(l({},i.parameters.docs||{}),{page:()=>e(C,{mdxStoryNameToKey:w,mdxComponentAnnotations:i},e(c,null))});const E=["__page"];export{E as __namedExportsOrder,v as __page,i as default};
//# sourceMappingURL=useSaveForm.stories.f9b15e1a.js.map
