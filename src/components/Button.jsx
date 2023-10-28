import styled from "styled-components";

const StyledBaseButton = styled.button`
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  background-color: var(--background);
  box-shadow: -5px -5px 10px 0px var(--neumorphic-top),
    5px 5px 10px 0px var(--neumorphic-bottom);
  i::before {
    line-height: normal;
  }
  color: ${(props) => (props.$active ? "var(--primary-color)" : props.$color)};
`;

const StyledFlatButton = styled(StyledBaseButton)`
  border-radius: 0;
  background-color: transparent;
  box-shadow: none;
  padding: 0;
  font-size: 22px;
  i::before {
    text-shadow: -2px 0px 2px var(--neumorphic-top),
      2px 0px 2px var(--neumorphic-bottom);
  }
`;

const StyledLink = styled.a`
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 4px;
  color: ${(props) => (props.$active ? "var(--primary-color)" : props.$color)};
  font-size: 18px;
  text-decoration: none;
`;

function Button({
  children,
  color = "var(--primary-color)",
  type = "small",
  onClick,
  active = false,
  link,
  target = "_self",
  className,
}) {
  return (
    <>
      {type === "small" && (
        <StyledBaseButton
          className={className}
          onClick={onClick}
          $active={active}
          $color={color}
        >
          {children}
        </StyledBaseButton>
      )}
      {type === "flat" && (
        <StyledFlatButton
          className={className}
          onClick={onClick}
          $active={active}
          $color={color}
        >
          {children}
        </StyledFlatButton>
      )}
      {type === "link" && (
        <StyledLink
          className={className}
          href={link}
          onClick={onClick}
          $active={active}
          $color={color}
          target={target}
        >
          {children}
        </StyledLink>
      )}
    </>
  );
}
export default Button;
