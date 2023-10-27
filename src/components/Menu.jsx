import styled from "styled-components";
import Button from "./Button";
import { useState } from "react";

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
    border-radius: 30px;
    box-shadow: inset -2px -2px 2px 0 var(--neumorphic-top),
      inset 2px 2px 2px 0 var(--neumorphic-bottom);
    padding: 4px 1rem;
    height: fit-content;

    button {
      font-size: 15px;
    }
  }
`;
const fixedButtons = [
  {
    icon: "fa-id-card",
    text: "Presentation",
    active: true,
  },
  {
    icon: "fa-timeline",
    text: "History",
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
            <Button
              color="var(--font-color)"
              type="link"
              link={`#carousel-item${index + 1}`}
              active={button.active}
              onClick={() => handleActiveButton(button.text)}
            >
              <i className={`fa-solid ${button.icon}`}></i>
            </Button>
          </li>
        ))}
      </ul>
    </StyledMenu>
  );
}
