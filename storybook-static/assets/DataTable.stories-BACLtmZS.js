import{j as e}from"./jsx-runtime-CDt2p4po.js";import"./index-GiUgBvb1.js";const l=({columns:n,data:d})=>e.jsxs("table",{className:"min-w-full border border-gray-300",children:[e.jsx("thead",{className:"bg-gray-100",children:e.jsx("tr",{children:n.map(a=>e.jsx("th",{className:"px-4 py-2 border-b text-left",children:a.label},a.key))})}),e.jsx("tbody",{children:d.map((a,c)=>e.jsx("tr",{className:"hover:bg-gray-50",children:n.map(s=>e.jsx("td",{className:"px-4 py-2 border-b",children:a[s.key]},s.key))},c))})]});l.__docgenInfo={description:"",methods:[],displayName:"DataTable",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"Column"}],raw:"Column[]"},description:""},data:{required:!0,tsType:{name:"Array",elements:[{name:"Record",elements:[{name:"string"},{name:"any"}],raw:"Record<string, any>"}],raw:"Record<string, any>[]"},description:""}}};const y={title:"Components/DataTable",component:l},r={args:{columns:[{key:"name",label:"Name"}],data:[{name:"Alice"},{name:"Bob"}]}};var t,m,o;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    columns: [{
      key: "name",
      label: "Name"
    }],
    data: [{
      name: "Alice"
    }, {
      name: "Bob"
    }]
  }
}`,...(o=(m=r.parameters)==null?void 0:m.docs)==null?void 0:o.source}}};const b=["Default"];export{r as Default,b as __namedExportsOrder,y as default};
