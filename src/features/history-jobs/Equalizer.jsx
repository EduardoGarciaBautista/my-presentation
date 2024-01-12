import styled from "styled-components";
import EqualizerItem from "./EqualizerItem";
import { useJobs } from "../../contexts/JobsContext";

const StyledEqualizer = styled.div`
  height: 150px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Equalizer = () => {
  const { jobList } = useJobs();

  return (
    <StyledEqualizer className="equalizer">
      {jobList.map((jobItem) => (
        <EqualizerItem
          jobItem={jobItem}
          key={jobItem.title}
        />
      ))}
    </StyledEqualizer>
  );
};

export default Equalizer;
