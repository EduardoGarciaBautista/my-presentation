import styled from "styled-components";

const StyledInfo = styled.section`
  text-align: center;
  h1 {
    font-weight: bold;
    font-size: 25px;
  }
  h3 {
    font-weight: bold;
    font-size: 20px;
    line-height: 2rem;
  }
  p {
    font-size: 15px;
    color: var(--font-secondary-color);
    text-align: justify;
  }
`;

export default function Info() {
  return (
    <StyledInfo>
      <h1>Eduardo Garcia Bautista</h1>
      <h3>Front End Developer</h3>
      <p>
        Front-end developer and Computational Systems Engineer with five years
        of experience building web apps, using technologies like JavaScript,
        Angular, or React. In my free time, i like to study new technologies to
        improve my knowledge.
      </p>
    </StyledInfo>
  );
}
