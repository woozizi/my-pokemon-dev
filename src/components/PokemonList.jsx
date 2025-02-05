import React from "react";
import PokemonCard from "./PokemonCard";
import MOCK_DATA from "../assets/MOCK_DATA";
import { ListWrapper } from "../style/PokemonListStyle";

const PokemonList = ({ addPokemon }) => {
  return (
    <ListWrapper>
      {MOCK_DATA.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          addPokemon={addPokemon}
        />
      ))}
    </ListWrapper>
  );
};

export default PokemonList;
