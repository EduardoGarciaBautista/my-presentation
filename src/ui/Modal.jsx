import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  max-width: 80vw;
  max-height: 80dvh;
  padding: 1rem;
  background-color: var(--background);
  box-shadow: -10px -10px 10px 0px var(--neumorphic-top),
    10px 10px 10px 0px var(--neumorphic-bottom);
  border-radius: 25px;
  position: relative;
`;

const StyledClose = styled.span`
  position: absolute;
  right: 1rem;
  top: 1.2rem;
  font-size: 20px;
  cursor: pointer;
  transition: all 300ms;
  &:hover {
    color: var(--primary-color);
  }
`;

const Title = styled.p`
  font-size: 25px;
  font-weight: 700;
  padding-right: 2rem;
  border-bottom: 1px solid var(--font-secondary-color);
  margin-bottom: 1rem;
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

function Close({ children }) {
  const { toggle } = useContext(ModalContext);
  return (
    <StyledClose>
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
