import { combineReducers, createStore } from "redux";

//1) rootReducer를 만든다.

const rootReducer = combineReducers({});

//2) store을 조합한다

const store = createStore(rootReducer);

//3) 만든 store을 내보낸다

export default store;
