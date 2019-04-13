import { connect } from "react-redux";

import { RootState } from "redux/store";

import App from "./app.component";

interface StateProps {
  favouriteCount: number;
}

export default connect<StateProps, {}, {}, RootState>(state => ({ favouriteCount: state.favourites.length }))(App);
