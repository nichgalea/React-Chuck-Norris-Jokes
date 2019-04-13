import { Joke } from "models";

export interface FavouritesState {
  favourites: Joke[];
}

export const initialFavouritesState: FavouritesState = {
  favourites: []
};
