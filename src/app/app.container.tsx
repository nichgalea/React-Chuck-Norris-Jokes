import { connect } from "react-redux";

import { Joke } from "models";
import { RootState } from "redux/store";
import { addFavourite } from "redux/favourites";

import App from "./app.component";

interface StateProps {
  favourites: Joke[];
}

interface DispatchProps {
  addFavourite(joke: Joke): void;
}

export default connect<StateProps, DispatchProps, {}, RootState>(
  state => ({ favourites: state.favourites }),
  { addFavourite }
)(App);
