import React from "react";
import { useNavigate } from "react-router-dom";
import { HomeContainer, StartButton } from "../style/HomeStyle";
import pokemonlogo from "../assets/pokemonlogo.svg.webp";

const Home = () => {
  //router
  const navigate = useNavigate();

  const goToDex = () => {
    navigate("/dex");
  };

  return (
    <HomeContainer>
      <img src={pokemonlogo} alt="빈 아이콘" />

      <StartButton onClick={goToDex}>START</StartButton>
    </HomeContainer>
  );
};

export default Home;
