import React from "react";
import PokemonCard from "./PokemonCard";
import { ListWrapper } from "../style/PokemonListStyle";
import { useSelector } from "react-redux";

const PokemonList = () => {
  const pokemonList = useSelector((state) => state.pokemon.pokemonList);
  return (
    <ListWrapper>
      {pokemonList.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </ListWrapper>
  );
};

export default PokemonList;
