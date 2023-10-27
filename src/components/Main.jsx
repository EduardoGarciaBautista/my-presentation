import styled from "styled-components";

const StyledMain = styled.main`
  overflow: hidden;
  grid-area: main;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = ({ children }) => {
  return <StyledMain>{children}</StyledMain>;
};

export default Main;
