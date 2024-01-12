import styled from "styled-components";

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

export default function Header({ children }) {
  return <StyledHeader>{children}</StyledHeader>;
}
