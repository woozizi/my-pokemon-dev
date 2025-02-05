import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Dex from "../pages/Dex";
import GloberStyle from "../GlobalStyle";
import PokemonDetail from "../pages/PokemonDetail";

const Router = () => {
  return (
    <>
      <GloberStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dex" element={<Dex />} />
          <Route path="/detail/:id" element={<PokemonDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
