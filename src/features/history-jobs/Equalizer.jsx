import styled from "styled-components";
import EqualizerItem from "./EqualizerItem";

const StyledEqualizer = styled.div`
  height: 150px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Equalizer = ({children}) => {

  return (
    <StyledEqualizer className="equalizer">
      {children}
    </StyledEqualizer>
  );
};

export default Equalizer;
