import styled from "styled-components";

const StyledCarousel = styled.ul`
  padding-top: 1rem;
  display: flex;
  list-style: none;
  overflow: auto;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  li {
    flex-shrink: 0;
    width: 100%;
    scroll-snap-align: center;
  }
`;

const Carousel = ({ children }) => {
  return (
    <StyledCarousel>
      {children.map((child, index) => (
        <li id={`carousel-item${index + 1}`} key={index}>
          {child}
        </li>
      ))}
    </StyledCarousel>
  );
};

export default Carousel;
