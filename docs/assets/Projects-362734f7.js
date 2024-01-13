import{s as e,j as t}from"./index-56d4ae40.js";import{a}from"./landing-7d52836f.js";const s=e.div`
  position: relative;
  margin: 2rem 1rem;
  box-shadow: -2px -2px 5px 0px var(--neumorphic-top),
    2px 2px 5px 0px var(--neumorphic-bottom);
  border-radius: 10px;
  display: flex;
  align-items: center;

  button {
    position: absolute;
    top: 10px;
    right: 10px;
    top: -15px;
  }

  button:nth-child(1) {
    right: 1rem;
  }

  button:nth-child(2) {
    right: 3.5rem;
  }

  .disabled {
    pointer-events: none;
    color: var(--disabled);
  }
`,p=e.figure`
  width: 100px;
  height: 100px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: -5px -5px 5px 0px var(--neumorphic-top),
    5px 5px 5px 0px var(--neumorphic-bottom);
  margin-right: 2rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }
`,n=e.h3`
  text-align: center;
`,l=({project:o})=>{const i=r=>{window.open(r,"_blank")};return t.jsxs(s,{children:[t.jsx(p,{children:t.jsx("img",{src:o.icon,alt:o.icon})}),t.jsx(a,{onClick:()=>i(o.link),children:t.jsx("i",{className:"fa-solid fa-link"})}),t.jsx(a,{onClick:()=>i(o.repo),className:o.repo===""?"disabled":"",children:t.jsx("i",{className:"fa-solid fa-code-branch"})}),t.jsx(n,{children:o.title})]})},c=[{title:"Twitter Layout",link:"https://eduardogarciabautista.github.io/twitter-layout/",icon:"https://firebasestorage.googleapis.com/v0/b/portfolio-ed.appspot.com/o/images%2Ftwitter%2Fc3.PNG?alt=media&token=47ae977b-53a9-4640-8c5d-282deab1d1d6",repo:"https://github.com/EduardoGarciaBautista/twitter-layout"},{title:"Git Hub Profile",link:"https://app-init--gh-profilerun.netlify.app/",icon:"https://res.cloudinary.com/dv6lfepzc/image/upload/f_auto,q_auto/v1/portfolio/izqtmbarojdcllmh9p2k",repo:"https://github.com/EduardoGarciaBautista/github-profile"},{title:"Angular Store",link:"https://ng-store-2b2df.web.app/#/home",icon:"https://firebasestorage.googleapis.com/v0/b/portfolio-ed.appspot.com/o/images%2Fstore%2FScreenshot_20201228-192653.png?alt=media&token=3b0cd8fe-77dd-4923-874a-301a7445b6f3",repo:""}],d=e.section`
  height: 100%;
  overflow-y: auto;
  p {
    text-align: center;
  }
`,x=()=>t.jsxs(d,{children:[t.jsx("p",{children:"Some small projects to practice 💪"}),c.map(o=>t.jsx(l,{project:o},o.title))]});export{x as default};
