import{s,j as e,r as c,b as p}from"./index-56d4ae40.js";const d=s.div`
  flex: 1.5;
`,x=s.ul`
  list-style: none;
  font-size: 11px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`,h=s.li`
  li {
    padding-left: 1rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    i {
      color: var(--primary-color);
      position: absolute;
      left: 0;
    }
  }
`,u=({tasks:t=[]})=>e.jsx(d,{children:e.jsx(x,{children:t.map(i=>e.jsxs(h,{children:[e.jsx("i",{className:"fa-regular fa-circle-check"}),i]},i))})}),f=s.div`
  height: fit-content;
  border-radius: 15px;
  padding: 8px;
  display: flex;
  gap: 1rem;
  box-shadow: ${t=>t.$activeItem?" inset -2px -2px 5px 0px var(--neumorphic-top), inset 2px 2px 5px 0px var(--neumorphic-bottom);":"-2px -2px 5px 0px var(--neumorphic-top),    2px 2px 5px 0px var(--neumorphic-bottom)"};

  .indicator {
    box-shadow: inset -2px -2px 3px 0px var(--neumorphic-top),
      inset 2px 2px 3px 0px var(--neumorphic-bottom);
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bolder;
    i {
      margin: 0;
    }
  }
  i {
    margin-right: 4px;
    font-size: 10px;
    color: var(--primary-color);
  }
  .left-content {
    flex: 1.1;
  }
`,m=s.h1`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  margin-top: 0.5rem;
`,g=s.h2`
  font-size: 12px;
  font-weight: 600;
  line-height: 24px;
`,j=s.h3`
  font-size: 10px;
  font-weight: 500;
`,b=({indicator:t,selectedJob:i={}})=>{if(!i)return null;const{title:o,time:r,job:n}=i;return e.jsxs(f,{children:[e.jsxs("div",{className:"left-content",children:[e.jsx("span",{className:"indicator",children:t}),e.jsxs(m,{children:[e.jsx("i",{className:"fa-solid fa-building-user"}),o]}),e.jsxs(g,{children:[e.jsx("i",{className:"fa-solid fa-keyboard"})," ",n]}),e.jsxs(j,{children:[e.jsx("i",{className:"fa-solid fa-business-time"}),r]})]}),e.jsx(u,{tasks:i==null?void 0:i.tasks})]})},y=s.div`
  min-height: 30px;
  width: 100%;
  box-shadow: -1px 1px 1px 1px var(--neumorphic-top),
    1px -1px 1px 0px var(--neumorphic-bottom);
  border-radius: 30px;
  display: flex;
  align-items: center;
  position: relative;
  display: flex;
  span {
    position: absolute;
    width: max-content;
    right: 1rem;
  }
  &:hover {
    cursor: pointer;
  }

  .active {
    width: 100% !important;
  }
`,v=s.div`
  height: 100%;
  width: 50%;
  background-color: var(--primary-color);
  border-radius: 30px;
  transition-duration: 300ms;
  width: ${t=>t.$size};
`,w=s.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: absolute;
  background-color: var(--background);
  z-index: 1;
  bottom: -1px;
  border: 2px solid var(--font-color);
  color: var(--primary-color);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
`,z=({jobItem:t,selectedJob:i,selectJob:o})=>{const r=i.title===t.title;function n(){o(t)}return e.jsxs(y,{onClick:n,children:[e.jsx("span",{children:t.title}),e.jsx(v,{$size:r?"100%":t.percentage}),e.jsx(w,{children:r&&e.jsx("i",{className:"fa-regular fa-circle-play"})})]})},k=s.div`
  height: 150px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,E=({children:t})=>e.jsx(k,{className:"equalizer",children:t});async function L(){return await(await fetch("./jobs.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}})).json()}const N={isLoading:!1,selectedJob:null,jobList:[]};function J(t,i){var o;switch(i.type){case"jobs/loading":return{...t,isLoading:!0};case"jobs/load":return{...t,jobList:i.payload,isLoading:!1,selectedJob:(o=i.payload)==null?void 0:o[0]};case"jobs/select":return{...t,selectedJob:i.payload};default:return t}}const q=s.section`
  overflow-y: auto;
  height: 100%;
  padding-top: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 180px 1fr;
  gap: 2rem;
`,S=()=>{const[{selectedJob:t,jobList:i},o]=c.useReducer(J,N),r=()=>o({type:"jobs/loading"}),n=a=>o({type:"jobs/load",payload:a}),l=a=>o({type:"jobs/select",payload:a});return p({loading:r,fetch:L,loadData:n}),e.jsxs(q,{children:[e.jsx(b,{selectedJob:t,indicator:e.jsx("i",{className:"fa-solid fa-info"})}),e.jsx(E,{children:i.map(a=>e.jsx(z,{jobItem:a,selectJob:l,selectedJob:t},a.title))})]})};export{S as default};
