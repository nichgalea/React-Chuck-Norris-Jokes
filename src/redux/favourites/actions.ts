import { Joke } from "models";

export enum FavouritesActionTypes {
  ADD = "favourites/add",
  REMOVE = "favourites/remove"
}

export interface AddJokeAction {
  type: FavouritesActionTypes.ADD;
  payload: Joke;
}

export function addJoke(joke: Joke): AddJokeAction {
  return {
    type: FavouritesActionTypes.ADD,
    payload: joke
  };
}

export interface RemoveJokeAction {
  type: FavouritesActionTypes.REMOVE;
  payload: Joke;
}

export function removeJoke(joke: Joke): RemoveJokeAction {
  return {
    type: FavouritesActionTypes.REMOVE,
    payload: joke
  };
}

export type FavouritesAction = AddJokeAction | RemoveJokeAction;
