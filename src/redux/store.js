import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import categoriesReducer from "./categoriesReducer";
import { toggleModalReducer } from "./toggleModalReducer";
import { dataReducer } from "./dataReducer";

const store = createStore(
  combineReducers({
    categories: categoriesReducer,
    modal: toggleModalReducer,
    data: dataReducer,
  }),
  applyMiddleware(thunk)
);

export default store;
