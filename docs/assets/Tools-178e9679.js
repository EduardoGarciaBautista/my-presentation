import{s as e,j as t}from"./index-56d4ae40.js";const o=e.div`
  width: 60px;
  height: 60px;
  box-shadow: -4px -4px 6px 0px var(--neumorphic-top),
    4px 4px 6px 0px var(--neumorphic-bottom);
  border-radius: 5px;
  border: 4px solid var(--background);
`,n=e.div`
  box-shadow: inset -2px -2px 4px 0px var(--neumorphic-top),
    inset 2px 2px 4px 0px var(--neumorphic-bottom);
  border-radius: 5px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  i {
    font-size: 15px;
    color: var(--primary-color);
    text-shadow: -2px -2px 4px var(--neumorphic-top),
      2px 2px 4px var(--neumorphic-bottom);
  }
  p {
    font-size: 10px;
    margin-top: 4px;
    font-weight: 500;
  }
`,r=({title:a,icon:i})=>t.jsx(o,{children:t.jsxs(n,{className:"box",children:[t.jsx("i",{className:i}),t.jsx("p",{children:a})]})}),s=e.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 1rem;
  row-gap: 1rem;
  justify-content: center;
  align-items: center;
  padding: 8px;
`,l=({children:a})=>t.jsx(s,{children:a}),c=[{title:"Angular",icon:"fa-brands fa-angular"},{title:"React",icon:"fa-brands fa-react"},{title:"Jvascript",icon:"fa-brands fa-square-js"},{title:"Typescript",icon:"fa-solid fa-code"},{title:"Webpack",icon:"fa-solid fa-minimize"},{title:"Nginx",icon:"fa-regular fa-face-grin-squint"},{title:"NgRx",icon:"fa-regular fa-face-grin-squint"},{title:"Jenkins",icon:"fa-brands fa-jenkins"},{title:"Css",icon:"fa-brands fa-css3"},{title:"SaaS",icon:"fa-brands fa-sass"},{title:"Bootstrap",icon:"fa-brands fa-bootstrap"},{title:"Html",icon:"fa-brands fa-html5"},{title:"MySql",icon:"fa-solid fa-database"},{title:"Firebase",icon:"fa-brands fa-free-code-camp"},{title:"Git",icon:"fa-brands fa-github"},{title:"Jira",icon:"fa-brands fa-jira"},{title:"Trello",icon:"fa-brands fa-trello"},{title:"Java",icon:"fa-brands fa-java"}],p=e.section`
  overflow-y: auto;
  height: 100%;
  > p {
    margin-bottom: 1rem;
    text-align: center;
    padding: 0 1rem;
  }

  .tools-container {
  }
`,d=()=>t.jsxs(p,{children:[t.jsx("p",{children:"Tools and technologies that ive used throughout my career as Developer"}),t.jsx(l,{children:c.map((a,i)=>t.jsx(r,{title:a.title,icon:a.icon},i))})]});export{d as default};
