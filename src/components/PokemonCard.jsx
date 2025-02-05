import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Card, ImgInCard } from "../style/CardStyle";

const AddPokemonButton = styled.button`
  background-color: red;
  border: none;
  color: white;
  border-radius: 10px;
  padding: 5px 10px;
  cursor: pointer;
`;

const PokemonCard = ({ pokemon, addPokemon }) => {
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`/detail/${pokemon.id}`);
  };

  return (
    <Card>
      <ImgInCard
        src={pokemon.img_url}
        alt={pokemon.korean_name}
        onClick={goToDetail}
      />
      <h4>{pokemon.korean_name}</h4>
      <p>No. {pokemon.id}</p>
      <AddPokemonButton onClick={() => addPokemon(pokemon)}>
        추가
      </AddPokemonButton>
    </Card>
  );
};

export default PokemonCard;
