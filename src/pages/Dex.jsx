import React from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import { useState } from "react";
const Dex = () => {
  const [selectedPokemons, setSelectedPokemons] = useState([]);

  const addPokemon = (newPokemon) => {
    if (selectedPokemons.some((pokemon) => pokemon.id === newPokemon.id)) {
      alert("이미 추가된 포켓몬입니다. ");
      return;
    }

    if (selectedPokemons.length >= 6) {
      alert("포켓몬의 쵀대 6개까지만 추가 가능합니다.");
      return;
    }

    setSelectedPokemons([...selectedPokemons, newPokemon]);
  };

  return (
    <>
      <Dashboard
        selectedPokemons={selectedPokemons}
        setSelectedPokemons={setSelectedPokemons}
      />
      <PokemonList addPokemon={addPokemon} />
    </>
  );
};

export default Dex;
