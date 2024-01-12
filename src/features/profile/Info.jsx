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
    text-align: center;
  }
`;

export default function Info({ profile ={} }) {
  return (
    <StyledInfo>
      <h1>{profile.name}</h1>
      <h3>{profile.jobDescription}</h3>
      <p>{profile.description}</p>
    </StyledInfo>
  );
}
