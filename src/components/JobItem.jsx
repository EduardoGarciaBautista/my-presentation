import styled from "styled-components";

const StyledJobItem = styled.div`
  box-shadow: -2px -2px 5px 0px var(--neumorphic-top),
    2px 2px 5px 0px var(--neumorphic-bottom);
  width: 130px;
  height: 130px;
  border-radius: 15px;
  padding: 8px;

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
  }
  h1 {
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    margin-top: 0.5rem;
  }
  h3 {
    font-size: 9px;
    font-weight: 400;
    line-height: 24px;
  }
  p {
    font-size: 8px;
  }
  i {
    margin-right: 4px;
    font-size: 10px;
    color: var(--primary-color);
  }
`;
const JobItem = ({ title, job, time, index }) => {
  return (
    <StyledJobItem>
      <span className="indicator">{index}</span>
      <h1>
        <i className="fa-solid fa-building-user"></i>
        {title}
      </h1>
      <h3>
        <i className="fa-solid fa-keyboard"></i> {job}
      </h3>
      <p>
        <i className="fa-solid fa-business-time"></i>
        {time}
      </p>
    </StyledJobItem>
  );
};

export default JobItem;
