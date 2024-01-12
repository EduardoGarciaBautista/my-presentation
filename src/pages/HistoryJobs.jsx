import styled from "styled-components";
import JobDetail from "../features/history-jobs/JobDetail";
import Equalizer from "../features/history-jobs/Equalizer";

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
`;

const HistoryJobs = () => {
  return (
    <StyledHistory>
      <JobDetail indicator={<i className="fa-solid fa-info"></i>}></JobDetail>
      <Equalizer />
    </StyledHistory>
  );
};

export default HistoryJobs;
