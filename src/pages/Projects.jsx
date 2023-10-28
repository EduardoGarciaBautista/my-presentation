import styled from "styled-components";
import Button from "../components/Button";
const projects = [
  {
    title: "Twitter Layout",
    link: "https://eduardogarciabautista.github.io/my-presentation/",
    icon: "https://firebasestorage.googleapis.com/v0/b/portfolio-ed.appspot.com/o/images%2Ftwitter%2Fc3.PNG?alt=media&token=47ae977b-53a9-4640-8c5d-282deab1d1d6",
  },
  {
    title: "Store",
    link: "https://ng-store-2b2df.web.app/#/home",
    icon: "https://firebasestorage.googleapis.com/v0/b/portfolio-ed.appspot.com/o/images%2Fstore%2FScreenshot_20201228-192653.png?alt=media&token=3b0cd8fe-77dd-4923-874a-301a7445b6f3",
  },
  {
    title: "Search Gif",
    link: "https://eduardogarciabautista.github.io/GIFY-APP/",
    icon: "https://firebasestorage.googleapis.com/v0/b/portfolio-ed.appspot.com/o/images%2Fgify%2Fc2.PNG?alt=media&token=fe9a5b49-5aab-4c9a-9b4e-8ff72ed987b3",
  },
];
const StyledProject = styled.section`
  height: 100%;
  overflow-y: auto;
  .details {
    position: relative;
    margin: 2rem 1rem;
    box-shadow: -2px -2px 5px 0px var(--neumorphic-top),
      2px 2px 5px 0px var(--neumorphic-bottom);
    border-radius: 10px;
    display: flex;
    align-items: center;
    figure {
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
    }
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
    h3 {
      text-align: center;
    }
  }
`;

const Projects = () => {
  return (
    <StyledProject>
      {projects.map((project) => (
        <div className="details" key={project.title}>
          <figure>
            <img src={project.icon} alt="" />
          </figure>
          <Button>
            <i className="fa-solid fa-link"></i>
          </Button>
          <Button>
            <i className="fa-solid fa-code-branch"></i>
          </Button>
          <h3>{project.title}</h3>
        </div>
      ))}
    </StyledProject>
  );
};

export default Projects;
