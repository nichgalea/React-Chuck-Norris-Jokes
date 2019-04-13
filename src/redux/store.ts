import { createStore } from "redux";

import { favouritesReducer, FavouritesState } from "./favourites";

export default createStore(
  favouritesReducer,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
);

export type RootState = FavouritesState;
