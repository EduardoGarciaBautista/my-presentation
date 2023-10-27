import styled from "styled-components";

const StyledCard = styled.div`
  padding: 1rem;
  border-radius: 10px;
  box-shadow: -5px -5px 10px 3px var(--neumorphic-top),
    5px 5px 10px 3px var(--neumorphic-bottom);
    overflow: hidden;
`;

const Card = ({ children, className }) => {
  return <StyledCard className={className}>{children}</StyledCard>;
};

export default Card;
