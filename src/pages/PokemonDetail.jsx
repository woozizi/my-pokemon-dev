import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  DetailWrapper,
  Card,
  ButtonIndetail,
} from "../style/PokemonDetailStyle";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addPokemon, deletePokemon } from "../redux/slices/pokemonSlice";

const PokemonDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const pokemonList = useSelector((state) => state.pokemon.pokemonList);
  const selectedPokemons = useSelector(
    (state) => state.pokemon.selectedPokemons
  );
  const dispatch = useDispatch();

  const pokemon = pokemonList.find((p) => p.id === Number(id));

  const isAdded = selectedPokemons.some((sp) => {
    return sp.id === pokemon.id;
  });

  return (
    <>
      <DetailWrapper>
        <h1>{pokemon.korean_name}</h1>
        <Card>
          <img src={pokemon.img_url} alt={pokemon.korean_name} width="150px" />
          <p>
            <strong>타입:</strong> {pokemon.types.join(", ")}
          </p>
          <p>
            <strong>설명:</strong> {pokemon.description}
          </p>
          {!isAdded ? (
            <ButtonIndetail onClick={() => dispatch(addPokemon(pokemon))}>
              도감 추가
            </ButtonIndetail>
          ) : (
            <ButtonIndetail onClick={() => dispatch(deletePokemon(pokemon))}>
              도감 삭제
            </ButtonIndetail>
          )}
        </Card>
        <ButtonIndetail onClick={() => navigate(-1)}>뒤로 가기</ButtonIndetail>
      </DetailWrapper>
    </>
  );
};

export default PokemonDetail;
