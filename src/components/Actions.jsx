import styled from "styled-components";
import Button from "./Button";

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
      <Button type="flat">
        <i className="fa-brands fa-linkedin-in"></i>
      </Button>
      <Button type="flat">
        <i className="fa-brands fa-github"></i>
      </Button>
      <Button type="flat">
        <i className="fa-solid fa-print"></i>
      </Button>
      <Button type="flat">
        <i className="fa-brands fa-whatsapp"></i>
      </Button>
    </StyledActions>
  );
}
export default Actions;
