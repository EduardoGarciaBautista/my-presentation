import styled from "styled-components";
import JobsTaks from "./JobsTaks";

const StyledJobDetail = styled.div`
  height: fit-content;
  border-radius: 15px;
  padding: 8px;
  display: flex;
  gap: 1rem;
  box-shadow: ${(props) =>
    props.$activeItem
      ? " inset -2px -2px 5px 0px var(--neumorphic-top), inset 2px 2px 5px 0px var(--neumorphic-bottom);"
      : "-2px -2px 5px 0px var(--neumorphic-top),    2px 2px 5px 0px var(--neumorphic-bottom)"};

  .indicator {
    box-shadow: inset -2px -2px 3px 0px var(--neumorphic-top),
      inset 2px 2px 3px 0px var(--neumorphic-bottom);
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bolder;
    i {
      margin: 0;
    }
  }
  i {
    margin-right: 4px;
    font-size: 10px;
    color: var(--primary-color);
  }
  .left-content {
    flex: 1;
  }
`;

const Enterprise = styled.h1`
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  margin-top: 0.5rem;
`;

const JobTitle = styled.h3`
  font-size: 9px;
  font-weight: 400;
  line-height: 24px;
`;

const JobTime = styled.h3`
  font-size: 8px;
`;

const JobDetail = ({ indicator, selectedJob = {} }) => {

  if (!selectedJob) return null;

  const { title, time, job } = selectedJob;

  return (
    <StyledJobDetail>
      <div className="left-content">
        <span className="indicator">{indicator}</span>
        <Enterprise>
          <i className="fa-solid fa-building-user"></i>
          {title}
        </Enterprise>
        <JobTitle>
          <i className="fa-solid fa-keyboard"></i> {job}
        </JobTitle>
        <JobTime>
          <i className="fa-solid fa-business-time"></i>
          {time}
        </JobTime>
      </div>
      <JobsTaks tasks={selectedJob?.tasks} />
    </StyledJobDetail>
  );
};

export default JobDetail;
