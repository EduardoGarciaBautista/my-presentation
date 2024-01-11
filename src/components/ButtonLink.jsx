import styled from "styled-components";

const ButtonLink = styled.a`
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 4px;
  color: ${(props) => (props.$active ? "var(--font-color)" : props.$color)};
  text-decoration: none;
  font-size: 16px;
`;

ButtonLink.defaultProps = {
  $color: "var(--primary-color)",
  target: "_self",
};

export default ButtonLink;
