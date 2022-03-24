import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import reducerCart from "./cart/reducerCart";
import reducerFav from "./favorite/reducerFav";
import reducerGoods from "./goods/reducerGoods";
import { modalReducer } from "./modal/reducerModal";

const localStorageSync = (store) => (next) => (action) => {
  const result = next(action);
  if (action.type === "ADD_FAVORITE" || action.type === "REMOVE_FAVORITE") {
    const { favorites } = store.getState();
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
  if (action.type === "ADD_CART" || action.type === "REMOVE_CART") {
    const { cart } = store.getState();
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  return result;
};

const rootReducer = combineReducers({
  goods: reducerGoods,
  favorites: reducerFav,
  modal: modalReducer,
  cart: reducerCart,
});

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk, localStorageSync))
);

export default store;
