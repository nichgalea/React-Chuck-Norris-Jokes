import { initialFavouritesState, FavouritesState } from "./state";
import { FavouritesAction, FavouritesActionTypes } from "./actions";

export function favouritesReducer(state = initialFavouritesState, action: FavouritesAction): FavouritesState {
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
