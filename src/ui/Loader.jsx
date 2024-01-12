import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const rotateHue = keyframes`
    0% {
      filter: hue-rotate(0deg);
    }
    100% {
      filter: hue-rotate(360deg);
    }
`;

const scannerAnimation = keyframes`
    0%,
    100% {
      height: 0;
    }
    50% {
      height: 100%;
    }
`;

const blink = keyframes`
    0%, 100% {
      opacity: 1;
    }
    
    50% {
      opacity: 0;
    }
`;

const Rotate = keyframes`
    0%{
      transform: rotate(0deg)
    }
    
    100% {
      transform: rotate(360deg);
    }
`;

const RotateInverted = keyframes`
    0%{
      transform: rotate(360deg)
    }
    
    100% {
      transform: rotate(0deg);
    }
`;

const Overlay = styled.div`
  position: fixed;
  z-index: 10;
  inset: 0;
  background-color: var(--background);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;

const Scaner = styled.div`
  width: var(--scanner-size);
  height: var(--scanner-size);
  position: relative;
  background-image: url("./face-recognition-b.svg");
  background-position: center;
  background-size: 100%;
  &::before {
    content: "";
    width: 100%;
    height: 0;
    background-image: url("./face-recognition.svg");
    background-size: 100%;
    position: absolute;
    animation: ${scannerAnimation} var(--scanner-duration) linear infinite,
      ${rotateHue} var(--scanner-duration) linear infinite;
  }
`;

const Circle = styled.div`
  width: var(--scanner-size);
  height: var(--scanner-size);
  border-radius: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotateHue} var(--scanner-duration) linear infinite;

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    border-top: 5px solid var(--cyan);
    border-right: 5px solid var(--cyan);
    border-left: 5px solid transparent;
    border-bottom: 5px solid transparent;
    position: absolute;
    border-radius: 50%;
    box-sizing: border-box;
    animation: ${Rotate} var(--scanner-duration) linear infinite;
  }

  &::before {
    content: "";
    width: 90%;
    height: 90%;
    border-top: 5px solid transparent;
    border-right: 5px solid transparent;
    border-left: 5px solid var(--cyan);
    border-bottom: 5px solid var(--cyan);
    position: absolute;
    border-radius: 50%;
    box-sizing: border-box;
    animation: ${RotateInverted} var(--scanner-duration) linear infinite;
  }
`;

const ScannerText = styled.p`
  color: var(--cyan);
  animation: ${blink} var(--scanner-duration) linear infinite,
    ${rotateHue} var(--scanner-duration) linear infinite;
    font-size: 20px;
`;

const LOADET_TIME = 2000;

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      return () => clearTimeout(timer);
    }, LOADET_TIME);
  }, []);

  if (!isLoading) return null;

  return (
    <Overlay>
      <Circle>
        <Scaner />
      </Circle>

      <ScannerText>Loading...</ScannerText>
    </Overlay>
  );
};

export default Loader;
