import{s as o,u as c,j as e,n as p,r as a,_ as s}from"./index-56d4ae40.js";const x=o.a`
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 4px;
  color: ${t=>t.$active?"var(--font-color)":t.$color};
  text-decoration: none;
  font-size: 16px;
`;x.defaultProps={$color:"var(--primary-color)",target:"_self"};const m=o.footer`
  grid-area: menu;
  padding: 0 2rem;
  display: flex;
  justify-content: center;
  ul {
    display: flex;
    width: fit-content;
    justify-content: space-between;
    gap: 1rem;
    list-style: none;
    min-width: 200px;
    padding: 4px 1rem;
    height: fit-content;
    li {
      box-shadow: -5px -5px 10px 0px var(--neumorphic-top),
        5px 5px 10px 0px var(--neumorphic-bottom);
      border-radius: 50%;
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .button {
    font-size: 12px;
  }
`;function f(){const{selectOption:t,selectedMenu:n,menuOptions:i}=c();function u(r){t(r)}return e.jsx(m,{children:e.jsx("ul",{children:i.map((r,d)=>e.jsx("li",{children:e.jsx(x,{type:"link",href:`#carousel-item${d+1}`,$active:n.id===r.id,onClick:()=>u(r),size:"small",children:e.jsx("i",{className:`fa-solid ${r.icon} ${n.id===r.id?"fa-beat":""}`})})},d))})})}const h={small:p`
    padding: 8px;
    border-radius: 50%;
    box-shadow: -5px -5px 10px 0px var(--neumorphic-top),
      5px 5px 10px 0px var(--neumorphic-bottom);
  `,flat:p`
    border-radius: 0;
    background-color: transparent;
    box-shadow: none;
    padding: 0;
    font-size: 22px;
    i::before {
      text-shadow: -2px 0px 2px var(--neumorphic-top),
        2px 0px 2px var(--neumorphic-bottom);
    }
  `},l=o.button`
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--background);
  height: 30px;
  width: 30px;
  color: ${t=>t.active?"var(--primary-color)":t.color};
  ${t=>t.type?h[t.type]:""}
  i::before {
    line-height: normal;
  }

  :hover {
    cursor: pointer;
  }
`;l.defaultProps={color:"var(--primary-color)",type:"small",target:"_self"};const y=o.div`
  box-shadow: -5px -5px 10px 3px var(--neumorphic-top),
    5px 5px 10px 3px var(--neumorphic-bottom);
  border-radius: 40px;
  padding: 8px 1rem;
  font-weight: bold;
  letter-spacing: 4px;
`;function g(){const{selectedMenu:t}=c();return e.jsx(y,{children:t==null?void 0:t.text})}const v=o.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-area: header;
  padding: 0 2rem;
  button:first-of-type {
    color: var(--primary-color);
  }
  button:last-of-type {
    color: var(--disabled);
  }

  @media (prefers-color-scheme: dark) {
    button:first-of-type {
      color: var(--disabled);
    }
    button:last-of-type {
      color: var(--primary-color);
    }
  }
`;function j(){return e.jsxs(v,{children:[e.jsx(l,{children:e.jsx("i",{className:"fa-solid fa-sun"})}),e.jsx(g,{}),e.jsx(l,{children:e.jsx("i",{className:"fa-solid fa-moon"})})]})}const b=o.main`
  overflow: hidden;
  grid-area: main;
  padding-bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`,_=({children:t})=>e.jsx(b,{children:t}),w=o.ul`
  display: flex;
  list-style: none;
  overflow-x: auto;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  height: 100%;
  li {
    flex-shrink: 0;
    width: 100%;
    scroll-snap-align: center;
  }
`,$=({children:t})=>e.jsx(w,{children:t.map((n,i)=>e.jsx("li",{id:`carousel-item${i+1}`,children:n},i))}),E=a.lazy(()=>s(()=>import("./Profile-6643aae8.js"),["assets/Profile-6643aae8.js","assets/index-56d4ae40.js"])),P=a.lazy(()=>s(()=>import("./HistoryJobs-dbc0cb62.js"),["assets/HistoryJobs-dbc0cb62.js","assets/index-56d4ae40.js"])),k=a.lazy(()=>s(()=>import("./Projects-362734f7.js"),["assets/Projects-362734f7.js","assets/index-56d4ae40.js"])),z=a.lazy(()=>s(()=>import("./Tools-178e9679.js"),["assets/Tools-178e9679.js","assets/index-56d4ae40.js"])),O=o.div`
  background-color: var(--primary);
  color: var(--secondary);
  height: 100dvh;
  padding: 2rem 0 0.5rem 0;
  display: grid;
  grid-template-areas: "header" "main" "menu";
  grid-template-rows: 36px 1fr 50px;
  grid-template-columns: 1fr;
  gap: 20px;
  max-width: 600px;
`;function S(){return e.jsxs(O,{children:[e.jsx(j,{}),e.jsx(_,{children:e.jsxs($,{children:[e.jsx(E,{}),e.jsx(P,{}),e.jsx(k,{}),e.jsx(z,{})]})}),e.jsx(f,{})]})}const L=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"}));export{x as B,l as a,L as l};
