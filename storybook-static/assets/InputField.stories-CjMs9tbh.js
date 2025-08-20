import{j as e}from"./jsx-runtime-CDt2p4po.js";import"./index-GiUgBvb1.js";const c=({label:u,placeholder:m,type:f="text",invalid:a=!1,errorMessage:n})=>e.jsxs("div",{className:"flex flex-col space-y-1",children:[e.jsx("label",{className:"font-medium",children:u}),e.jsx("input",{type:f,placeholder:m,className:`border rounded p-2 focus:outline-none focus:ring ${a?"border-red-500 focus:ring-red-300":"border-gray-300 focus:ring-blue-300"}`}),a&&n&&e.jsx("span",{className:"text-red-500 text-sm",children:n})]});c.__docgenInfo={description:"",methods:[],displayName:"InputField",props:{label:{required:!0,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"text"',computed:!1}},invalid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},errorMessage:{required:!1,tsType:{name:"string"},description:""}}};const y={title:"Components/InputField",component:c},r={args:{label:"Username",placeholder:"Enter your name"}},s={args:{label:"Password",type:"password",invalid:!0,errorMessage:"Password required"}};var t,o,l;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    label: "Username",
    placeholder: "Enter your name"
  }
}`,...(l=(o=r.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var d,i,p;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: "Password",
    type: "password",
    invalid: true,
    errorMessage: "Password required"
  }
}`,...(p=(i=s.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const b=["Default","Invalid"];export{r as Default,s as Invalid,b as __namedExportsOrder,y as default};
