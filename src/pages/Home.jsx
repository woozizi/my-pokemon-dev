import React from "react";
import { useNavigate } from "react-router-dom";
import { HomeContainer, StartButton } from "../style/HomeStyle";

const Home = () => {
  const navigate = useNavigate();

  const goToDex = () => {
    navigate("/dex");
  };

  return (
    <>
      <HomeContainer>
        <h1>POKEMON</h1>
        <StartButton onClick={goToDex}>포켓몬 도감 시작하기</StartButton>
      </HomeContainer>
    </>
  );
};

export default Home;
