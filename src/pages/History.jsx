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
  },
  {
    title: "Neoris",
    job: "Front End Developer",
    icon: "fa-brands fa-html5",
    time: "Feb 2021 - Jun 2022",
  },
  {
    title: "Upax",
    job: "Front End Developer",
    icon: "fa-brands fa-html5",
    time: "Jun 2020 - Nov 2020",
  },
  {
    title: "IDS Comercial",
    job: "Full Stack Developer",
    icon: "fa-brands fa-html5",
    time: "Sept 2018 - Jun 2020",
  },
];

const StyledHistory = styled.section`
  overflow-y: auto;
  height: 100%;
  padding-top: 1.5rem;

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
    background: rgb(39, 39, 39);
    background: linear-gradient(
      51deg,
      rgba(39, 39, 39, 1) 0%,
      rgba(64, 64, 64, 1) 50%,
      rgba(75, 75, 75, 1) 100%
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
  .experience-description {
    color: var(--font-secondary-color);
    font-size: 12px;
    width: 50%;
    position: absolute;
    right: 1rem;
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
        <p className="experience-description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
          asperiores? Consequatur suscipit culpa, odio nihil at placeat nostrum
          distinctio ipsum omnis voluptas, quaerat perspiciatis ullam pariatur
          perferendis dicta, aliquid officiis.
        </p>
      </Card>
      <div className="job-list">
        {list.map((item, index) => (
          <JobItem
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
