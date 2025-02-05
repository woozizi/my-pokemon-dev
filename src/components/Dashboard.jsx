import React from "react";
import ball from "/public/ball.png";
import { Card, ImgInCard } from "../style/CardStyle";
import {
  DashBoardWrapper,
  PokemonCardWrapper,
  PokemonCardDiv,
  DeletePokemonButton,
} from "../style/DashBoardStyle";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { PokemonContext } from "../context/pokemonContext";

const Dashboard = () => {
  // const deletePokemon = (id) => {
  //   setSelectedPokemons((prev) => prev.filter((pokemon) => pokemon.id !== id));
  // };

  const { selectedPokemons, deletePokemon } = useContext(PokemonContext);

  const navigate = useNavigate();

  const goToDetail = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <>
      <DashBoardWrapper>
        <h1 style={{ marginBottom: "50px", color: "red", padding: "15px" }}>
          나만의 포켓몬
        </h1>

        <PokemonCardWrapper>
          {Array.from({ length: 6 }).map((_, index) => (
            <PokemonCardDiv key={index}>
              {selectedPokemons[index] ? (
                <Card>
                  <ImgInCard
                    src={selectedPokemons[index].img_url}
                    alt={selectedPokemons[index].korean_name}
                    onClick={() => goToDetail(selectedPokemons[index].id)}
                  />
                  <h4>{selectedPokemons[index].korean_name}</h4>
                  <p>No. {selectedPokemons[index].id}</p>
                  <DeletePokemonButton
                    onClick={() => deletePokemon(selectedPokemons[index].id)}
                  >
                    삭제
                  </DeletePokemonButton>
                </Card>
              ) : (
                <img src={ball} alt="빈 아이콘" width="50px" />
              )}
            </PokemonCardDiv>
          ))}
        </PokemonCardWrapper>
      </DashBoardWrapper>
    </>
  );
};

export default Dashboard;
