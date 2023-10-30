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
            <Button
              className="button"
              color="var(--font-color)"
              type="link"
              link={`#carousel-item${index + 1}`}
              active={button.active}
              onClick={() => handleActiveButton(button.text)}
            >
              <i
                className={`fa-solid ${button.icon} ${
                  button.active ? "fa-beat" : ""
                }`}
              ></i>
            </Button>
          </li>
        ))}
      </ul>
    </StyledMenu>
  );
}
