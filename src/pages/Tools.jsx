import styled from "styled-components";
import ToolItem from "../components/ToolItem";

const tools = [
  {
    title: "Angular",
    icon: "fa-brands fa-angular",
  },
  {
    title: "React",
    icon: "fa-brands fa-react",
  },
  {
    title: "Jvascript",
    icon: "fa-brands fa-square-js",
  },
  {
    title: "Typescript",
    icon: "fa-solid fa-code",
  },
  {
    title: "Webpack",
    icon: "fa-solid fa-minimize",
  },
  {
    title: "Nginx",
    icon: "fa-regular fa-face-grin-squint",
  },
  {
    title: "NgRx",
    icon: "fa-regular fa-face-grin-squint",
  },
  {
    title: "Css",
    icon: "fa-brands fa-css3",
  },
  {
    title: "SaaS",
    icon: "fa-brands fa-sass",
  },
  {
    title: "Bootstrap",
    icon: "fa-brands fa-bootstrap",
  },
  {
    title: "Html",
    icon: "fa-brands fa-html5",
  },
  {
    title: "MySql",
    icon: "fa-solid fa-database",
  },
  {
    title: "Firebase",
    icon: "fa-brands fa-free-code-camp",
  },
  {
    title: "Git",
    icon: "fa-brands fa-github",
  },
  {
    title: "Jira",
    icon: "fa-brands fa-jira",
  },
  {
    title: "Trello",
    icon: "fa-brands fa-trello",
  },
];

const StyledTools = styled.section`
  overflow-y: auto;
  > p {
    margin-bottom: 1rem;
    /* color: var(--background);
    text-shadow: -1px 0px 3px var(--neumorphic-top),
      1px 0px 3px var(--neumorphic-bottom); */
  }

  .tools-container {
    display: flex;
    flex-wrap: wrap;
    column-gap: 1.5rem;
    row-gap: 1rem;
    justify-content: center;
    align-items: center;
    padding: 8px;
  }
`;

const Tools = () => {
  return (
    <StyledTools>
      <p>
        Here you can see the tools an technologies that ive used alongside my
        career as Developer
      </p>

      <div className="tools-container">
        {tools.map((tool, index) => {
          return <ToolItem key={index} title={tool.title} icon={tool.icon} />;
        })}
      </div>
    </StyledTools>
  );
};

export default Tools;
