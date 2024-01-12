import styled from "styled-components";
import ToolItem from "../features/Tools/ToolItem";
import ToolsList from "../features/Tools/ToolsList";

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
    title: "Jenkins",
    icon: "fa-brands fa-jenkins",
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
  {
    title: "Java",
    icon: "fa-brands fa-java",
  },
];

const StyledTools = styled.section`
  overflow-y: auto;
  height: 100%;
  > p {
    margin-bottom: 1rem;
    text-align: center;
  }

  .tools-container {
  }
`;

const Tools = () => {
  return (
    <StyledTools>
      <p>
        Tools and technologies that ive used throughout my career as Developer
      </p>

      <ToolsList>
        {tools.map((tool, index) => {
          return <ToolItem key={index} title={tool.title} icon={tool.icon} />;
        })}
      </ToolsList>
    </StyledTools>
  );
};

export default Tools;
