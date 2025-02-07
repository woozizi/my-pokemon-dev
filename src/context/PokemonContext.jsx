import { createContext, useState } from "react";
import MOCK_DATA from "../assets/MOCK_DATA";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [selectedPokemons, setSelectedPokemons] = useState([]);
  const [pokemonList, setPokomonList] = useState(MOCK_DATA);

  const addPokemon = (newPokemon) => {
    if (selectedPokemons.some((pokemon) => pokemon.id === newPokemon.id)) {
      alert("이미 추가된 포켓몬입니다. ");
      return;
    }

    if (selectedPokemons.length >= 6) {
      alert("포켓몬의 쵀대 6개까지만 추가 가능합니다.");
      return;
    }
    setSelectedPokemons((selectedPokemons) => [
      ...selectedPokemons,
      newPokemon,
    ]);
    alert("도감에 추가했습니다.");
  };

  const deletePokemon = (pokemon) => {
    setSelectedPokemons((prev) => {
      return prev.filter((p) => p.id !== pokemon.id);
    });
    alert("도감에 삭제했습니다.");
  };

  const value = {
    selectedPokemons,
    addPokemon,
    deletePokemon,
    setSelectedPokemons,
    pokemonList,
    setPokomonList,
  };

  return (
    <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>
  );
};
