import styled from "styled-components";
import Button from "../../ui/Button";

const ProjectDetails = styled.div`
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
`;

const ProjectImg = styled.figure`
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
`;

const ProjectTitle = styled.h3`
  text-align: center;
`;

const ProjectItem = ({ project }) => {
  const handleOpenTab = (url) => {
    window.open(url, "_blank");
  };
  return (
    <ProjectDetails>
      <ProjectImg>
        <img src={project.icon} alt={project.icon} />
      </ProjectImg>
      <Button onClick={() => handleOpenTab(project.link)}>
        <i className="fa-solid fa-link"></i>
      </Button>
      <Button
        onClick={() => handleOpenTab(project.repo)}
        className={project.repo === "" ? "disabled" : ""}
      >
        <i className="fa-solid fa-code-branch"></i>
      </Button>
      <ProjectTitle>{project.title}</ProjectTitle>
    </ProjectDetails>
  );
};

export default ProjectItem;
