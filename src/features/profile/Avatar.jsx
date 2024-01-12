import styled from "styled-components";

const StyledAvatar = styled.figure`
  box-shadow: -5px -5px 10px 3px var(--neumorphic-top),
    5px 5px 10px 3px var(--neumorphic-bottom);
  border-radius: 40px;
  align-self: center;

  img {
    width: 200px;
    height: 200px;
    padding: 1rem;
    border-radius: 40px;
    object-fit: cover;
    object-position: top;
  }
`;
function Avatar({ route }) {
  return (
    <StyledAvatar>
      <img src={route} alt="profile-image" />
    </StyledAvatar>
  );
}

export default Avatar;
