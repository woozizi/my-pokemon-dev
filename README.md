# Pokémon 프로젝트

## 개요
이 프로젝트는 포켓몬에 대한 간략한 정보를 제공하는 웹사이트 입니다.  
주요 목적은 사용자에게 포켓몬 목록을 보여주고 클릭을 통해 상세정보를 확인하며, 간단한 나의 도감에 추가를 할 수 있습니다.

## 주요 기능
- **포켓몬 목록 조회:** 151마리의 포켓몬 데이터를 확인할 수 있습니다.
- **상세 정보 제공:** 각 포켓몬의 타입과 간단한 세부 데이터를 확인할 수 있습니다.
- **나의 도감 추가:** 관심있는 포켓몬을 도감에 추가해 따로 확인 할 수 있습니다

## 기술 스택
- React, vite

## 프로젝트 구조
```
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── GlobalStyle.js
│   ├── assets
│   │   ├── MOCK_DATA.js
│   │   ├── ball.png
│   │   ├── pokemonlogo.svg.webp
│   │   └── react.svg
│   ├── components
│   │   ├── Dashboard.jsx
│   │   ├── PokemonCard.jsx
│   │   └── PokemonList.jsx
│   ├── context
│   │   └── PokemonContext.jsx
│   ├── hooks
│   │   └── usePokemonHandler.js
│   ├── index.css
│   ├── main.jsx
│   ├── pages
│   │   ├── Dex.jsx
│   │   ├── Home.jsx
│   │   └── PokemonDetail.jsx
│   ├── redux
│   │   ├── config
│   │   │   └── store.js
│   │   └── slices
│   │       └── pokemonSlice.js
│   ├── shared
│   │   └── Router.jsx
│   └── style
│       ├── CardStyle.js
│       ├── DashBoardStyle.js
│       ├── HomeStyle.js
│       ├── PokemonDetailStyle.js
│       └── PokemonListStyle.js
```
