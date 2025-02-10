import React from "react";
import { useNavigate } from "react-router-dom";
import { AddPokemonButton, Card, ImgInCard } from "../style/CardStyle";
import usePokemonHandler from "../hooks/usePokemonHandler";

const PokemonCard = ({ pokemon }) => {
  //router
  const navigate = useNavigate();
  const goToDetail = () => navigate(`/detail/${pokemon.id}`);

  //handler
  const { handleAddPokemon } = usePokemonHandler();

  return (
    <Card>
      <ImgInCard
        src={pokemon.img_url}
        alt={pokemon.korean_name}
        onClick={goToDetail}
      />
      <h4>{pokemon.korean_name}</h4>
      <p>No. {pokemon.id}</p>
      <AddPokemonButton onClick={() => handleAddPokemon(pokemon)}>
        추가
      </AddPokemonButton>
    </Card>
  );
};

export default PokemonCard;
