import { lazy } from "react";

import Menu from "../ui/Menu";
import Header from "../ui/Header";
import Main from "../ui/Main";
import Carousel from "../ui/Carousel";
import styled from "styled-components";

const Profile = lazy(() => import("./Profile"));
const HistoryJobs = lazy(() => import("./HistoryJobs"));
const Projects = lazy(() => import("./Projects"));
const Tools = lazy(() => import("./Tools"));

const StyledLanding = styled.div`
  background-color: var(--primary);
  color: var(--secondary);
  height: 100dvh;
  padding: 2rem 0 0.5rem 0;
  display: grid;
  grid-template-areas: "header" "main" "menu";
  grid-template-rows: 36px 1fr 50px;
  grid-template-columns: 1fr;
  gap: 20px;
  max-width: 600px;
`;

function Landing() {
  return (
    <StyledLanding>
      <Header />

      <Main>
        <Carousel>
          <Profile />
          <HistoryJobs />
          <Projects />
          <Tools />
        </Carousel>
      </Main>

      <Menu />
    </StyledLanding>
  );
}

export default Landing;
