import { createContext, useState } from "react";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
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

  const deletePokemon = (id) => {
    setSelectedPokemons((prev) => prev.filter((pokemon) => pokemon.id !== id));
  };

  const value = {
    selectedPokemons,
    addPokemon,
    deletePokemon,
    setSelectedPokemons,
  };

  return (
    <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>
  );
};
