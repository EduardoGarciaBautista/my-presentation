import{s as r,j as o,r as i,a as f,b as h,L as m}from"./index-56d4ae40.js";import{B as g}from"./landing-7d52836f.js";const j=r.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  align-items: center;
  align-self: center;
  padding: 8px 2rem;
  border-radius: 40px;
  box-shadow: -6px -6px 8px 0px var(--neumorphic-top),
    6px 6px 8px 0px var(--neumorphic-bottom);
  width: fit-content;
`;function b({options:e=[]}){return o.jsx(j,{children:e.map(t=>o.jsx(g,{href:t.link,color:"var(--primary-color)",target:"_blank",children:o.jsx("i",{className:t.icon})},t.id))})}const v=r.figure`
  box-shadow: -5px -5px 10px 3px var(--neumorphic-top),
    5px 5px 10px 3px var(--neumorphic-bottom);
  border-radius: 40px;
  align-self: center;

  img {
    width: 200px;
    height: 200px;
    padding: 1rem;
    border-radius: 40px;
    object-fit: cover;
    object-position: top;
  }
`;function y({route:e}){return o.jsx(v,{children:o.jsx("img",{src:e,alt:"profile-image"})})}const w=r.div`
  position: fixed;
  inset: 0;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
`,S=r.div`
  max-height: 80dvh;
  max-width: 90vw;
  padding: 1rem;
  background-color: var(--background);
  box-shadow: -10px -10px 10px 0px var(--neumorphic-top),
    10px 10px 10px 0px var(--neumorphic-bottom);
  border-radius: 25px;
  position: relative;

  @media only screen and (min-width: 800px) {
    max-width: 650px;
  }
`,C=r.span`
  position: absolute;
  right: 0;
  top: 0;
  font-size: 25px;
  cursor: pointer;
  transition: all 300ms;
  color: ${e=>e.$color};
  &:hover {
    color: var(--primary-color);
  }
`,E=r.p`
  font-size: 25px;
  font-weight: 700;
  border-bottom: 1px solid var(--font-secondary-color);
  margin-bottom: 1rem;
  text-align: center;
`,k={isOpen:""},a=i.createContext(k),l=({children:e,title:t})=>{const[n,s]=i.useState();function d(){s(!n)}return o.jsx(a.Provider,{value:{isOpen:n,toggle:d,title:t},children:e})};function P({children:e}){const{toggle:t}=i.useContext(a);return i.cloneElement(e,{onClick:()=>t()})}function I({children:e,color:t="var(--primary-color)"}){const{toggle:n}=i.useContext(a);return o.jsx(C,{$color:t,children:i.cloneElement(e,{onClick:()=>n()})})}function L({children:e}){const{isOpen:t,title:n}=i.useContext(a);return t?f.createPortal(o.jsx(w,{children:o.jsxs(S,{children:[o.jsx(E,{children:n}),e]})}),document.body):null}l.Open=P;l.Close=I;l.Window=L;const c=l,O=[/Android/i,/webOS/i,/iPhone/i,/iPad/i,/iPod/i,/BlackBerry/i,/Windows Phone/i];function A(){return{isMovile:!!O.some(t=>navigator.userAgent.match(t))}}function M(){return document.documentElement.clientHeight}const z=230,B=630,_=170,$=r.section`
  text-align: center;
  h1 {
    font-weight: bold;
    font-size: 25px;
  }
  h3 {
    font-weight: bold;
    font-size: 20px;
    line-height: 2rem;
  }
`,T=r.p`
  color: var(--font-secondary-color);
  text-align: justify;
  padding: 0 1rem;
  line-height: 1.5rem;
`,W=r.p`
  font-size: 15px;
  color: var(--font-secondary-color);
  text-align: justify;
  > span {
    font-size: 15px;
    background-color: transparent;
    color: var(--font-color);
    border: none;
    margin-left: 5px;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;function D({profile:e={}}){const{isMovile:t}=A(),n=M()<B?_:z,s=t?e.description.slice(0,n):e.description;return o.jsxs($,{children:[o.jsx("h1",{children:e.name}),o.jsx("h3",{children:e.jobDescription}),o.jsxs(c,{title:"More about me",children:[o.jsxs(W,{children:[s,t&&o.jsxs(o.Fragment,{children:["...",o.jsx(c.Open,{children:o.jsx("span",{children:"See more"})})]})]}),o.jsxs(c.Window,{children:[o.jsx(c.Close,{children:o.jsx("i",{className:"fa-regular fa-circle-xmark"})}),o.jsx(T,{children:e.description})]})]})]})}async function F(){return await(await N(fetch("./profile.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}))).json()}function N(e){return new Promise(t=>{setTimeout(()=>{t(e)},2e3)})}const R={isLoading:!1,profile:null};function Z(e,t){switch(t.type){case"loading":return{...e,isLoading:!0};case"profile/load":return{...e,profile:t.payload,isLoading:!1}}}const H=r.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  height: 100%;
  overflow-y: auto;
  padding-top: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;function J(){const[{isLoading:e,profile:t},n]=i.useReducer(Z,R);if(console.log(e),h({loading:()=>n({type:"loading"}),loadData:u=>n({type:"profile/load",payload:u}),fetch:F}),e)return o.jsx(m,{});if(!t)return;const{profileImg:p,actions:x}=t;return o.jsxs(H,{children:[o.jsx(y,{route:p}),o.jsx(b,{options:x}),o.jsx(D,{profile:t})]})}export{J as default};
