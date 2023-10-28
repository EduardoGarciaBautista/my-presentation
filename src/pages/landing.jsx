import styled from "styled-components";
import Button from "../components/Button";
import Title from "../components/Title";
import Menu from "../components/Menu";
import Header from "../components/Header";
import Profile from "./Profile";
import { useState } from "react";
import Main from "../components/Main";
import Carousel from "../components/Carousel";
import History from "./History";
import Tools from "./Tools";

const StyledLanding = styled.div`
  background-color: var(--primary);
  color: var(--secondary);
  height: 100dvh;
  padding: 2rem 0 .5rem 0;
  display: grid;
  grid-template-areas: "header" "main" "menu";
  grid-template-rows: 36px 1fr 38px;
  grid-template-columns: 1fr;
  gap: 20px;
  max-width: 600px;
`;

function Landing() {
  const [title, setTitle] = useState("Perfil");

  function handleSelectMenuOption(option) {
    setTitle(option);
  }

  return (
    <StyledLanding>
      <Header>
        <Button>
          <i className="fa-solid fa-sun"></i>
        </Button>
        <Title title={title} />
        <Button>
          <i className="fa-solid fa-moon"></i>
        </Button>
      </Header>

      <Main>
        <Carousel selected={title}>
          <Profile />
          <History />
          <Tools />
        </Carousel>
      </Main>

      <Menu onSelect={handleSelectMenuOption} />
    </StyledLanding>
  );
}

export default Landing;
