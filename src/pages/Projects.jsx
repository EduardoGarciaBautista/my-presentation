import styled from "styled-components";
import ProjectItem from "../features/Projects/ProjectItem";
const projects = [
  {
    title: "Twitter Layout",
    link: "https://eduardogarciabautista.github.io/twitter-layout/",
    icon: "https://firebasestorage.googleapis.com/v0/b/portfolio-ed.appspot.com/o/images%2Ftwitter%2Fc3.PNG?alt=media&token=47ae977b-53a9-4640-8c5d-282deab1d1d6",
    repo: "https://github.com/EduardoGarciaBautista/twitter-layout",
  },
  {
    title: "Git Hub Profile",
    link: "https://app-init--gh-profilerun.netlify.app/",
    icon: "https://res.cloudinary.com/dv6lfepzc/image/upload/f_auto,q_auto/v1/portfolio/izqtmbarojdcllmh9p2k",
    repo: "https://github.com/EduardoGarciaBautista/github-profile",
  },
  {
    title: "Angular Store",
    link: "https://ng-store-2b2df.web.app/#/home",
    icon: "https://firebasestorage.googleapis.com/v0/b/portfolio-ed.appspot.com/o/images%2Fstore%2FScreenshot_20201228-192653.png?alt=media&token=3b0cd8fe-77dd-4923-874a-301a7445b6f3",
    repo: "",
  },
];
const StyledProjects = styled.section`
  height: 100%;
  overflow-y: auto;
  p {
    text-align: center;
  }
`;

const Projects = () => {
  return (
    <StyledProjects>
      <p>Some small projects to practice 💪</p>
      {projects.map((project) => (
        <ProjectItem project={project} key={project.title}></ProjectItem>
      ))}
    </StyledProjects>
  );
};

export default Projects;
