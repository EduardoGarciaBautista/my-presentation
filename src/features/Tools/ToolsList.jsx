import styled from "styled-components";

const StyledToolsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 1rem;
  row-gap: 1rem;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

const ToolsList = ({children}) => {
  return <StyledToolsList>
    {children}
  </StyledToolsList>;
};

export default ToolsList;
