import styled from "styled-components";
import JobItem from "../components/JobItem";

const StyledHistory = styled.section`
  section {
    padding: 2rem 0;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
  }
  > p {
    text-align: center;
  }
`;

const list = [
  {
    title: "Indra",
    job: "Front End Developer",
    icon: "fa-brands fa-html5",
    time: 'Jun 2022 - Present'
  },
  {
    title: "Neoris",
    job: "Front End Developer",
    icon: "fa-brands fa-html5",
    time: 'Feb 2021 - Jun 2022'
  },
  {
    title: "Upax",
    job: "Front End Developer",
    icon: "fa-brands fa-html5",
    time: 'Jun 2020 - Nov 2020'
  },
  {
    title: "IDS Comercial",
    job: "Full Stack Developer",
    icon: "fa-brands fa-html5",
    time: 'Sept 2018 - Jun 2020'
  },
];

const History = () => {
  return (
    <StyledHistory>
      <p>Here you can see all my work history.</p>

      <section>
        {list.map((item, index) => (
          <JobItem
            key={item.title}
            title={item.title}
            job={item.job}
            icon={item.icon}
            index={index + 1}
            time={item.time}
          />
        ))}
      </section>
    </StyledHistory>
  );
};

export default History;
