import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  DetailWrapper,
  Card,
  ButtonIndetail,
} from "../style/PokemonDetailStyle";
import { useSelector } from "react-redux";
import usePokemonHandler from "../hooks/usePokemonHandler";

const PokemonDetail = () => {
  // router
  const { id } = useParams();
  const navigate = useNavigate();

  //redux
  const pokemonList = useSelector((state) => state.pokemon.pokemonList);
  const selectedPokemons = useSelector(
    (state) => state.pokemon.selectedPokemons
  );

  //check
  const pokemon = pokemonList.find((p) => p.id === Number(id));
  const isAdded = selectedPokemons.some((selpoke) => selpoke.id === pokemon.id);

  //handler
  const { handleAddPokemon, handleDeletePokemon } = usePokemonHandler();

  return (
    <DetailWrapper>
      <h1>{pokemon.korean_name}</h1>
      <Card>
        <img src={pokemon.img_url} alt={pokemon.korean_name} width="150px" />
        <p>
          <strong>타입:</strong> {pokemon.types.join(", ")}
        </p>
        <p>
          <strong>설명:</strong> {pokemon.description}
        </p>
        {!isAdded ? (
          <ButtonIndetail onClick={() => handleAddPokemon(pokemon)}>
            도감 추가
          </ButtonIndetail>
        ) : (
          <ButtonIndetail onClick={() => handleDeletePokemon(pokemon)}>
            도감 삭제
          </ButtonIndetail>
        )}
      </Card>
      <ButtonIndetail onClick={() => navigate(-1)}>뒤로 가기</ButtonIndetail>
    </DetailWrapper>
  );
};

export default PokemonDetail;
