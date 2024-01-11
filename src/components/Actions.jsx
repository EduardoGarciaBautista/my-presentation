import styled from "styled-components";
import ButtonLink from "./ButtonLink";

const options = [
  {
    id: 1,
    icon: "fa-brands fa-linkedin-in",
    link: "https://www.linkedin.com/in/eduardogb97",
  },
  {
    id: 2,
    icon: "fa-brands fa-github",
    link: "https://github.com/EduardoGarciaBautista",
  },
  {
    id: 4,
    icon: "fa-solid fa-phone-volume",
    link: "tel:5521945266",
  },
];

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
function Actions() {
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
