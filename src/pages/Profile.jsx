import styled from "styled-components";
import Actions from "../components/Actions";
import Avatar from "../components/Avatar";
import Info from "../components/Info";

const route =
  "https://res.cloudinary.com/dv6lfepzc/image/upload/v1668789057/profile_vihmh0.jpg";
const StyledProfile = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export default function Profile() {
  return (
    <StyledProfile>
      <Avatar route={route} />
      <Actions />
      <Info />
    </StyledProfile>
  );
}
