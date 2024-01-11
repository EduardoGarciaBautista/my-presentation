import styled, { css } from "styled-components";

const variations = {
  small: css`
    padding: 8px;
    border-radius: 50%;
    box-shadow: -5px -5px 10px 0px var(--neumorphic-top),
      5px 5px 10px 0px var(--neumorphic-bottom);
  `,
  flat: css`
    border-radius: 0;
    background-color: transparent;
    box-shadow: none;
    padding: 0;
    font-size: 22px;
    i::before {
      text-shadow: -2px 0px 2px var(--neumorphic-top),
        2px 0px 2px var(--neumorphic-bottom);
    }
  `,
};

const Button = styled.button`
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--background);
  height: 30px;
  width: 30px;
  color: ${(props) => (props.active ? "var(--primary-color)" : props.color)};
  ${(props) => (props.type ? variations[props.type] : "")}
  i::before {
    line-height: normal;
  }

  :hover {
    cursor: pointer;
  }
`;

Button.defaultProps = {
  color: "var(--primary-color)",
  type: "small",
  target: "_self",
};

export default Button;
