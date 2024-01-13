import styled from "styled-components";
import Button from "./Button";
import Title from "./Title";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-area: header;
  padding: 0 2rem;
  button:first-of-type {
    color: var(--primary-color);
  }
  button:last-of-type {
    color: var(--disabled);
  }

  @media (prefers-color-scheme: dark) {
    button:first-of-type {
      color: var(--disabled);
    }
    button:last-of-type {
      color: var(--primary-color);
    }
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <Button>
        <i className="fa-solid fa-sun"></i>
      </Button>
      <Title />
      <Button>
        <i className="fa-solid fa-moon"></i>
      </Button>
    </StyledHeader>
  );
}
