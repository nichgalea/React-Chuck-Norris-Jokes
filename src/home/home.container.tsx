import { connect } from "react-redux";

import { Joke } from "models";
import { RootState } from "redux/store";
import { addFavourite } from "redux/favourites";

import Home from "./home.component";

interface StateProps {
  favourites: Joke[];
}

interface DispatchProps {
  addFavourite(joke: Joke): void;
}

interface OwnProps {
  autoFav: boolean;
}

export default connect<StateProps, DispatchProps, OwnProps, RootState>(
  state => ({ favourites: state.favourites }),
  { addFavourite }
)(Home);
