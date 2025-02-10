import React from "react";
import ball from "../assets/ball.png";
import { Card, ImgInCard } from "../style/CardStyle";
import {
  DashBoardWrapper,
  PokemonCardWrapper,
  PokemonCardDiv,
  DeletePokemonButton,
} from "../style/DashBoardStyle";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import usePokemonHandler from "../hooks/usePokemonHandler";

const Dashboard = () => {
  // router
  const navigate = useNavigate();
  const goToDetail = (pokemon) => navigate(`/detail/${pokemon.id}`);

  //redux
  const selectedPokemons = useSelector(
    (state) => state.pokemon.selectedPokemons
  );

  //handler
  const { handleDeletePokemon } = usePokemonHandler();

  return (
    <DashBoardWrapper>
      <h1 style={{ marginBottom: "50px", color: "red", padding: "15px" }}>
        나만의 포켓몬 도감
      </h1>
      <PokemonCardWrapper>
        {Array.from({ length: 6 }).map((_, idx) => {
          const pokemon = selectedPokemons[idx];
          return (
            <PokemonCardDiv key={idx}>
              {pokemon ? (
                <Card>
                  <ImgInCard
                    src={pokemon.img_url}
                    alt={pokemon.korean_name}
                    onClick={() => goToDetail(pokemon)}
                  />
                  <h4>{pokemon.korean_name}</h4>
                  <p>No. {pokemon.id}</p>
                  <DeletePokemonButton
                    onClick={() => handleDeletePokemon(pokemon)}
                  >
                    삭제
                  </DeletePokemonButton>
                </Card>
              ) : (
                <img src={ball} alt="빈 아이콘" width="50px" />
              )}
            </PokemonCardDiv>
          );
        })}
      </PokemonCardWrapper>
    </DashBoardWrapper>
  );
};

export default Dashboard;
