import styled from "styled-components";
import Button from "./Button";

const options = [
  {
    id: 1,
    icon: "fa-brands fa-linkedin-in",
    link: "www.linkedin.com/in/eduardogb97",
  },
  {
    id: 2,
    icon: "fa-brands fa-github",
    link: "https://github.com/EduardoGarciaBautista",
  },
  {
    id: 3,
    icon: "fa-solid fa-print",
    link: "https://res.cloudinary.com/dv6lfepzc/image/upload/v1698381398/portfolio/lb5bbbgbkbm5motnbcm2.pdf",
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
        <Button type="link" target="_blank" key={option.id} link={option.link}>
          <i className={option.icon}></i>
        </Button>
      ))}
    </StyledActions>
  );
}
export default Actions;
