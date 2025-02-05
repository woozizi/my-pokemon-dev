import styled from "styled-components";

export const DashBoardWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  background-color: #dcdcdc;
  border-radius: 10px;
  margin: 10px 20px;
  padding-bottom: 100px;
`;

export const PokemonCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 70px;
  padding: 0px 20px;
`;

export const PokemonCardDiv = styled.div`
  background-color: white;
  border: 1px dashed silver;
  border-radius: 10px;
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DeletePokemonButton = styled.button`
  background-color: red;
  border: none;
  color: white;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
`;
