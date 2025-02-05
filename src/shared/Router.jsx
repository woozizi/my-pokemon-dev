import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Dex from "../pages/Dex";
import GloberStyle from "../GlobalStyle";
import PokemonDetail from "../pages/PokemonDetail";
import { PokemonProvider } from "../context/pokemonContext";

const Router = () => {
  return (
    <>
      <GloberStyle />

      <BrowserRouter>
        <PokemonProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dex" element={<Dex />} />
            <Route path="/detail/:id" element={<PokemonDetail />} />
          </Routes>
        </PokemonProvider>
      </BrowserRouter>
    </>
  );
};

export default Router;
