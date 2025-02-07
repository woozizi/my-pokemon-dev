import { createSlice } from "@reduxjs/toolkit";
import MOCK_DATA from "../../assets/MOCK_DATA";

const initialState = {
  selectedPokemons: [],
  pokemonList: MOCK_DATA || [],
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    addPokemon(state, action) {
      const newPokemon = action.payload;
      if (
        state.selectedPokemons.some((pokemon) => pokemon.id === newPokemon.id)
      ) {
        alert("이미 추가된 포켓몬입니다. ");
        return;
      }

      if (state.selectedPokemons.length >= 6) {
        alert("포켓몬의 쵀대 6개까지만 추가 가능합니다.");
        return;
      }

      state.selectedPokemons.push(newPokemon);
      alert("도감에 추가했습니다.");
    },

    deletePokemon(state, action) {
      const pokemon = action.payload;
      state.selectedPokemons = state.selectedPokemons.filter(
        (p) => p.id !== pokemon.id
      );
      alert("도감에 추가했습니다.");
    },
  },
});

export const { addPokemon, deletePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
