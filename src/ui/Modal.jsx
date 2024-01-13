import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  max-height: 80dvh;
  max-width: 90vw;
  padding: 1rem;
  background-color: var(--background);
  box-shadow: -10px -10px 10px 0px var(--neumorphic-top),
    10px 10px 10px 0px var(--neumorphic-bottom);
  border-radius: 25px;
  position: relative;

  @media only screen and (min-width: 800px) {
    max-width: 650px;
  }
`;

const StyledClose = styled.span`
  position: absolute;
  right: 0;
  top: 0;
  font-size: 25px;
  cursor: pointer;
  transition: all 300ms;
  color: ${(props) => props.$color};
  &:hover {
    color: var(--primary-color);
  }
`;

const Title = styled.p`
  font-size: 25px;
  font-weight: 700;
  border-bottom: 1px solid var(--font-secondary-color);
  margin-bottom: 1rem;
  text-align: center;
`;

const initialState = {
  isOpen: "",
};

const ModalContext = createContext(initialState);

const Modal = ({ children, title }) => {
  const [isOpen, setIsOpen] = useState();

  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        toggle,
        title,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

function Open({ children }) {
  const { toggle } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => toggle() });
}

function Close({ children, color = "var(--primary-color)" }) {
  const { toggle } = useContext(ModalContext);
  return (
    <StyledClose $color={color}>
      {cloneElement(children, { onClick: () => toggle() })}
    </StyledClose>
  );
}

function Window({ children }) {
  const { isOpen, title } = useContext(ModalContext);
  if (!isOpen) return null;
  return createPortal(
    <Overlay>
      <Content>
        <Title>{title}</Title>
        {children}
      </Content>
    </Overlay>,
    document.body
  );
}

Modal.Open = Open;
Modal.Close = Close;
Modal.Window = Window;

export default Modal;
