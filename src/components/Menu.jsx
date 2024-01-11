import styled from "styled-components";
import { useState } from "react";
import ButtonLink from "./ButtonLink";

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
const fixedButtons = [
  {
    icon: "fa-user",
    text: "Presentation",
    active: true,
  },
  {
    icon: "fa-timeline",
    text: "History",
    active: false,
  },
  {
    icon: "fa-regular fa-folder-open",
    text: "Projects",
    active: false,
  },
  {
    icon: "fa-code",
    text: "Tools",
    active: false,
  },
];
export default function Menu({ onSelect }) {
  const [buttons, setButtons] = useState(fixedButtons);

  function handleActiveButton(selected) {
    setButtons((currentButtons) =>
      currentButtons.map((button) => ({
        ...button,
        active: button.text === selected,
      }))
    );
    onSelect(selected);
  }

  return (
    <StyledMenu>
      <ul>
        {buttons.map((button, index) => (
          <li key={index}>
            <ButtonLink
              type="link"
              href={`#carousel-item${index + 1}`}
              $active={button.active ? 1 : 0}
              onClick={() => handleActiveButton(button.text)}
              size="small"
            >
              <i
                className={`fa-solid ${button.icon} ${
                  button.active ? "fa-beat" : ""
                }`}
              ></i>
            </ButtonLink>
          </li>
        ))}
      </ul>
    </StyledMenu>
  );
}
