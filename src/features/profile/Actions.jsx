import styled from "styled-components";
import ButtonLink from "../../ui/ButtonLink";

const StyledActions = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  align-items: center;
  align-self: center;
  padding: 8px 2rem;
  border-radius: 40px;
  box-shadow: -6px -6px 8px 0px var(--neumorphic-top),
    6px 6px 8px 0px var(--neumorphic-bottom);
  width: fit-content;
`;
function Actions({ options = [] }) {
  return (
    <StyledActions>
      {options.map((option) => (
        <ButtonLink
          key={option.id}
          href={option.link}
          color="var(--primary-color)"
          target="_blank"
        >
          <i className={option.icon}></i>
        </ButtonLink>
      ))}
    </StyledActions>
  );
}
export default Actions;
