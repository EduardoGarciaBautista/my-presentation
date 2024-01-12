import styled from "styled-components";
import Actions from "../features/profile/Actions";
import Avatar from "../features/profile/Avatar";
import Info from "../features/profile/Info";

const route =
  "https://res.cloudinary.com/dv6lfepzc/image/upload/v1668789057/profile_vihmh0.jpg";
const StyledProfile = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  height: 100%;
  overflow-y: auto;
  padding-top: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
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
