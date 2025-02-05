import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import MOCK_DATA from "../assets/MOCK_DATA";
import { DetailWrapper, Card, BackButton } from "../style/PokemonDetailStyle";

const PokemonDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const pokemon = MOCK_DATA.find((p) => p.id === Number(id));

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
        </Card>
        <BackButton onClick={() => navigate(-1)}>뒤로 가기</BackButton>
      </DetailWrapper>
    </>
  );
};

export default PokemonDetail;
