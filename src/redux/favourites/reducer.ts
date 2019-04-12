import { initialJokeState, JokesState } from "./state";
import { FavouritesAction, FavouritesActionTypes } from "./actions";

export function favouritesReducer(state = initialJokeState, action: FavouritesAction): JokesState {
  switch (action.type) {
    case FavouritesActionTypes.ADD: {
      return {
        ...state,
        favourites: [...state.favourites, action.payload]
      };
    }

    case FavouritesActionTypes.REMOVE: {
      return {
        ...state,
        favourites: state.favourites.filter(j => j.id !== action.payload.id)
      };
    }

    default:
      return state;
  }
}
