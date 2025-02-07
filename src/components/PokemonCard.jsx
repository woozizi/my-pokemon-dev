import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AddPokemonButton, Card, ImgInCard } from "../style/CardStyle";
import { useDispatch } from "react-redux";
import { addPokemon } from "../redux/slices/pokemonSlice";

const PokemonCard = ({ pokemon }) => {
  const dispatch = useDispatch();
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
      <AddPokemonButton onClick={() => dispatch(addPokemon(pokemon))}>
        추가
      </AddPokemonButton>
    </Card>
  );
};

export default PokemonCard;
