import styled from "styled-components";

const StyledNeumorphic = styled.div`
  border-radius: ${(props) => props.$borderRadius};
  padding: ${(props) => props.$padding || "none"};
  box-shadow: -5px -5px 10px 3px var(--neumorphic-top),
    5px 5px 10px 3px var(--neumorphic-bottom);
  height: fit-content;
  width: fit-content;
`;

function Neumorphic({ children, borderRadius, padding }) {
  return (
    <StyledNeumorphic $borderRadius={borderRadius} $padding={padding}>
      {children}
    </StyledNeumorphic>
  );
}
export default Neumorphic;
