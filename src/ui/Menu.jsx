import styled from "styled-components";
import ButtonLink from "./ButtonLink";
import { useMenu } from "../contexts/MenuContext";

const StyledMenu = styled.footer`
  grid-area: menu;
  padding: 0 2rem;
  display: flex;
  justify-content: center;
  ul {
    display: flex;
    width: fit-content;
    justify-content: space-between;
    gap: 1rem;
    list-style: none;
    min-width: 200px;
    padding: 4px 1rem;
    height: fit-content;
    li {
      box-shadow: -5px -5px 10px 0px var(--neumorphic-top),
        5px 5px 10px 0px var(--neumorphic-bottom);
      border-radius: 50%;
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .button {
    font-size: 12px;
  }
`;

export default function Menu() {
  const { selectOption, selectedMenu, menuOptions } = useMenu();

  function handleActiveButton(selected) {
    selectOption(selected);
  }

  return (
    <StyledMenu>
      <ul>
        {menuOptions.map((button, index) => (
          <li key={index}>
            <ButtonLink
              type="link"
              href={`#carousel-item${index + 1}`}
              $active={selectedMenu.id === button.id}
              onClick={() => handleActiveButton(button)}
              size="small"
            >
              <i
                className={`fa-solid ${button.icon} ${
                  selectedMenu.id === button.id ? "fa-beat" : ""
                }`}
              ></i>
            </ButtonLink>
          </li>
        ))}
      </ul>
    </StyledMenu>
  );
}
