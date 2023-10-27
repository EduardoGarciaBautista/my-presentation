import styled from "styled-components";
import JobItem from "../components/JobItem";
import Card from "../components/Card";
import { useState } from "react";
const list = [
  {
    title: "Indra",
    job: "Front End Developer",
    icon: "fa-brands fa-html5",
    time: "Jun 2022 - Present",
    tasks: [
      "Apis integration",
      "UI designs to web pages",
      "Mobile first design",
      "Reverse proxies",
      "Task documentation",
      "Fix production defects",
      "User stories analysis",
      "Join me to scrum ceremonies",
      "Code review",
      "Deploy features into different environments ",
    ],
  },
  {
    title: "Neoris",
    job: "Front End Developer",
    icon: "fa-brands fa-html5",
    time: "Feb 2021 - Jun 2022",
    tasks: [
      "Apis integration",
      "Third party libraries",
      "UI designs to web pages",
      "Responsive design",
      "Google maps integration",
      "Translate whole page to different languages",
      "Creation of new modules and features",
      "Fix production bugs",
    ],
  },
  {
    title: "Upax",
    job: "Front End Developer",
    icon: "fa-brands fa-html5",
    time: "Jun 2020 - Nov 2020",
    tasks: [
      "Apis integration",
      "Third party libraries",
      "UI designs to web pages",
      "Responsive design",
      "React js experience",
    ],
  },
  {
    title: "IDS Comercial",
    job: "Full Stack Developer",
    icon: "fa-brands fa-html5",
    time: "Sept 2018 - Jun 2020",
    tasks: [
      "Bootstrap integration",
      "Apis integration",
      "Data base tables update",
      "Update API endpoints",
      "Fix bugs",
      "User stories analysis",
      "Use cases analysis",
    ],
  },
];

const StyledHistory = styled.section`
  overflow-y: auto;
  height: 100%;
  padding-top: 1rem;

  .job-list {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    padding-bottom: 1rem;
  }
  .card {
    width: 90%;
    height: 200px;
    position: relative;
    margin: auto;
    margin-bottom: 2rem;
    position: sticky;
    background-color: var(--background);
    top: 0;
  }
  .card::before {
    content: "";
    position: absolute;
    width: 100px;
    height: 100px;
    background: linear-gradient(
      50deg,
      var(--font-secondary-color),
      var(--primary-color)
    );
    border-radius: 50%;
    left: -50px;
    bottom: 24%;
    z-index: 9;
  }
  > p {
    text-align: center;
  }

  .circle {
    position: absolute;
    bottom: 25%;
    width: 100px;
    height: 100px;
    box-shadow: -3px 3px 8px 3px var(--neumorphic-bottom),
      3px -3px 8px 3px var(--neumorphic-top);
    border-radius: 50%;
    background: linear-gradient(
      51deg,
      var(--circle-color-1) 0%,
      var(--circle-color-2) 50%,
      var(--circle-color-3) 100%
    );
    z-index: 10;
    padding: 6px;
  }
  .circle-content {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    box-shadow: -1px 1px 1px 1px var(--neumorphic-top),
      1px -1px 1px 0px var(--neumorphic-bottom);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    p {
      font-size: 12px;
    }
  }
  .experience {
    color: var(--primary-color);
    display: block;
  }

  .task-list {
    list-style: none;
    font-size: 11px;
    width: 50%;
    position: absolute;
    right: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    top: 0;
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
  }
`;

const History = () => {
  const [view, setView] = useState(list[0]);

  return (
    <StyledHistory>
      <Card className="card">
        <div className="circle">
          <div className="circle-content">
            <p>
              {view.title}
              <span className="experience">Experience</span>
            </p>
          </div>
        </div>
        <ul className="task-list">
          {view?.tasks.map((task, index) => (
            <li key={index}>
              <i className="fa-regular fa-circle-check"></i>
              {task}
            </li>
          ))}
        </ul>
      </Card>
      <div className="job-list">
        {list.map((item, index) => (
          <JobItem
            activeItem={view.title === item.title}
            onSelected={() => setView(item)}
            key={item.title}
            title={item.title}
            job={item.job}
            icon={item.icon}
            index={index + 1}
            time={item.time}
          />
        ))}
      </div>
    </StyledHistory>
  );
};

export default History;
