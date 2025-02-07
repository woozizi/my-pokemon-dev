import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Dex from "../pages/Dex";
import GloberStyle from "../GlobalStyle";
import PokemonDetail from "../pages/PokemonDetail";
import { Provider } from "react-redux";
import store from "../redux/config/store";
import { ToastContainer } from "react-toastify";

const Router = () => {
  return (
    <>
      <GloberStyle />
      <Provider store={store}>
        <BrowserRouter>
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dex" element={<Dex />} />
            <Route path="/detail/:id" element={<PokemonDetail />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default Router;
