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
        return;
      }

      if (state.selectedPokemons.length >= 6) {
        return;
      }

      state.selectedPokemons.push(newPokemon);
    },

    deletePokemon(state, action) {
      const pokemon = action.payload;
      state.selectedPokemons = state.selectedPokemons.filter(
        (p) => p.id !== pokemon.id
      );
    },
  },
});

export const { addPokemon, deletePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
