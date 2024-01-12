import styled from "styled-components";

const StyledEqualizerItem = styled.div`
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
  &:hover {
    cursor: pointer;
  }

  .active {
    width: 100% !important;
  }
`;

const EqualizerBar = styled.div`
  height: 100%;
  width: 50%;
  background-color: var(--primary-color);
  border-radius: 30px;
  transition-duration: 300ms;
  width: ${(props) => props.$size};
`;

const EqualizerCircle = styled.div`
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
`;

const EqualizerItem = ({ jobItem, selectedJob, selectJob }) => {
  const isActive = selectedJob.title === jobItem.title;

  function handleClick() {
    selectJob(jobItem);
  }

  return (
    <StyledEqualizerItem onClick={handleClick}>
      <span>{jobItem.title}</span>
      <EqualizerBar
        $size={isActive ? "100%" : jobItem.percentage}
      ></EqualizerBar>
      <EqualizerCircle>
        {isActive && <i className="fa-regular fa-circle-play"></i>}
      </EqualizerCircle>
    </StyledEqualizerItem>
  );
};

export default EqualizerItem;
