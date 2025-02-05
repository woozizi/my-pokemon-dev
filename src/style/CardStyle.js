import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 10px;
  width: 150px;
  text-align: center;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ImgInCard = styled.img`
  width: "80px";
  transition: all 0.3s ease-in-out;
  ${Card}:hover & {
    transform: scale(1.5);
  }
  cursor: pointer;
`;
