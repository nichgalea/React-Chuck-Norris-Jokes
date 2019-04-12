import { Joke } from "models";

export interface JokesState {
  favourites: Joke[];
}

export const initialJokeState: JokesState = {
  favourites: []
};
