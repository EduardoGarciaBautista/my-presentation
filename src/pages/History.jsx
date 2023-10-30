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
    percentage: 40,
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
    percentage: 40,
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
    percentage: 40,
  },
  {
    title: "IDS Comercial",
    job: "Full Stack Developer",
    icon: "fa-brands fa-html5",
    time: "Sep 2018 - Jun 2020",
    tasks: [
      "Bootstrap integration",
      "Apis integration",
      "Data base tables update",
      "Update API endpoints",
      "Fix bugs",
      "User stories analysis",
      "Use cases analysis",
    ],
    percentage: 40,
  },
];

const StyledHistory = styled.section`
  overflow-y: auto;
  height: 100%;
  padding-top: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 180px 1fr;
  gap: 2rem;

  .job-list {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    padding-bottom: 1rem;
  }

  .card {
    height: 200px;
    position: relative;
    margin: auto;
    position: sticky;
    background-color: var(--background);
    top: 0;
    box-shadow: inset -2px -2px 6px 2px var(--neumorphic-top),
      inset 2px 2px 6px 2px var(--neumorphic-bottom);
    border-radius: 30px;
    margin-bottom: 3rem;
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
    font-size: 9px;
  }

  .task-list {
    list-style: none;
    font-size: 11px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
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

  .equalizer {
    height: 150px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .equalizer-item {
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
    :hover {
      cursor: pointer;
    }
  }

  .equalizer-bar {
    height: 100%;
    width: 50%;
    background-color: var(--primary-color);
    border-radius: 30px;
    transition-duration: 300ms;
  }

  .equalizer-circle {
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
  }

  .active {
    width: 100% !important;
  }
`;

const History = () => {
  const [view, setView] = useState(list[0]);

  return (
    <StyledHistory>
      {view && (
        <JobItem
          indicator={<i className="fa-solid fa-info"></i>}
          title={view.title}
          job={view.job}
          time={view.time}
        >
          <ul className="task-list">
            {view?.tasks.map((task) => (
              <li key={task}>
                <i className="fa-regular fa-circle-check"></i>
                {task}
              </li>
            ))}
          </ul>
        </JobItem>
      )}

      <div className="equalizer">
        {list.map((item) => (
          <div
            className="equalizer-item"
            key={item.title}
            onClick={() => setView(item)}
          >
            <span>{item.title}</span>
            <div
              className={`equalizer-bar ${
                view.title === item.title ? "active" : ""
              }`}
              style={{ width: item.percentage + "%" }}
            ></div>
            <div className="equalizer-circle">
              {view.title === item.title && (
                <i className="fa-regular fa-circle-play"></i>
              )}
            </div>
          </div>
        ))}
      </div>
    </StyledHistory>
  );
};

export default History;
