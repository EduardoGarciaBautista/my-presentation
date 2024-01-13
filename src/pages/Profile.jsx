import styled from "styled-components";
import Actions from "../features/profile/Actions";
import Avatar from "../features/profile/Avatar";
import Info from "../features/profile/Info";
import { useReducer } from "react";
import { useFetch } from "../hooks/useFetch";
import { fetchProfile } from "../services/profileService";
import Loader from "../ui/Loader";

const initialState = {
  isLoading: false,
  profile: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: true,
      };
    case "profile/load":
      return {
        ...state,
        profile: action.payload,
        isLoading: false,
      };

    default:
      break;
  }
}

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
  const [{ isLoading, profile }, dispatch] = useReducer(reducer, initialState);
  console.log(isLoading);

  const loading = () =>
    dispatch({
      type: "loading",
    });

  const loadProfile = (profile) =>
    dispatch({
      type: "profile/load",
      payload: profile,
    });

  useFetch({
    loading: loading,
    loadData: loadProfile,
    fetch: fetchProfile,
  });

  if (isLoading) return <Loader />;
  if (!profile) return;

  const { profileImg, actions } = profile;

  return (
    <StyledProfile>
      <Avatar route={profileImg} />
      <Actions options={actions} />
      <Info profile={profile} />
    </StyledProfile>
  );
}
