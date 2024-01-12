import styled from "styled-components";
import { useMenu } from "../contexts/MenuContext";

const StyledTitle = styled.div`
  box-shadow: -5px -5px 10px 3px var(--neumorphic-top),
    5px 5px 10px 3px var(--neumorphic-bottom);
  border-radius: 40px;
  padding: 8px 1rem;
  font-weight: bold;
  letter-spacing: 4px;
`;

function Title() {
  const { selectedMenu } = useMenu();
  return <StyledTitle>{selectedMenu?.text}</StyledTitle>;
}

export default Title;
