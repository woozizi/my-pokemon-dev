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
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deletePokemon } from "../redux/slices/pokemonSlice";

const Dashboard = () => {
  const selectedPokemons = useSelector(
    (state) => state.pokemon.selectedPokemons
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goToDetail = (pokemon) => {
    navigate(`/detail/${pokemon.id}`);
  };

  const fullPokemons = useMemo(() => {
    return Array.from({ length: 6 }).map((_, index) => selectedPokemons[index]);
  }, [selectedPokemons]);
  return (
    <>
      <DashBoardWrapper>
        <h1 style={{ marginBottom: "50px", color: "red", padding: "15px" }}>
          나만의 포켓몬
        </h1>

        <PokemonCardWrapper>
          {fullPokemons.map((pokemon, index) => (
            <PokemonCardDiv key={index}>
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
                    onClick={() => dispatch(deletePokemon(pokemon))}
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
