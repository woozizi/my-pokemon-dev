import React from "react";
import PokemonCard from "./PokemonCard";
import { ListWrapper } from "../style/PokemonListStyle";
import { useContext } from "react";
import { PokemonContext } from "../context/pokemonContext";

const PokemonList = () => {
  const { pokemonList } = useContext(PokemonContext);

  return (
    <ListWrapper>
      {pokemonList.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </ListWrapper>
  );
};

export default PokemonList;
