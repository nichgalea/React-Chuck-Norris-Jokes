import { createStore } from "redux";

import { favouritesReducer, FavouritesState } from "./favourites";

export type RootState = FavouritesState;

export default (previousState?: RootState) => {
  return createStore(
    favouritesReducer,
    previousState,
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
  );
};
