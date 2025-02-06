import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  DetailWrapper,
  Card,
  ButtonIndetail,
} from "../style/PokemonDetailStyle";
import { useContext } from "react";
import { PokemonContext } from "../context/pokemonContext";

const PokemonDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { pokemonList, addPokemon, selectedPokemons, deletePokemon } =
    useContext(PokemonContext);
  const pokemon = pokemonList.find((p) => p.id === Number(id));

  const isAdded = selectedPokemons.some((sp) => {
    return sp.id === pokemon.id;
  });

  return (
    <>
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
            <ButtonIndetail onClick={() => addPokemon(pokemon)}>
              도감 추가
            </ButtonIndetail>
          ) : (
            <ButtonIndetail onClick={() => deletePokemon(pokemon)}>
              도감 삭제
            </ButtonIndetail>
          )}
        </Card>
        <ButtonIndetail onClick={() => navigate(-1)}>뒤로 가기</ButtonIndetail>
      </DetailWrapper>
    </>
  );
};

export default PokemonDetail;
