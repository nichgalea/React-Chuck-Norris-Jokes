import { createStore } from "redux";

import { favouritesReducer } from "./favourites";

export default createStore(
  favouritesReducer,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
);
