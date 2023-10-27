import styled from "styled-components";

const StyledTitle = styled.div`
  box-shadow: -5px -5px 10px 3px var(--neumorphic-top),
    5px 5px 10px 3px var(--neumorphic-bottom);
  border-radius: 40px;
  padding: 8px 1rem;
  font-weight: bold;
  letter-spacing: 4px;
`;

function Title({title}) {
  return <StyledTitle>{title}</StyledTitle>;
}

export default Title;
