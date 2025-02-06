//action value

//action creator 만들어서 export(컴포넌트에서 사용할 수 있도록)

//state init
const initialState = [
  { id: 1, title: "제목" },
  { id: 1, title: "제목" },
];

const ADD_TODO = "ADD_TODO";

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload: payload,
  };
};
const pokemon = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default pokemon;
