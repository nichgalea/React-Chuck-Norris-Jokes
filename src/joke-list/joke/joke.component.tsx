import React, { Component } from "react";
import { unescape } from "lodash";

import { Joke as JokeModel } from "models";

interface Props {
  joke: JokeModel;
  isFavourite: boolean;
  addFavourite(joke: JokeModel): void;
  removeFavourite(joke: JokeModel): void;
}

export default class Joke extends Component<Props> {
  constructor(props) {
    super(props);

    this.addOrRemoveFavourite = this.addOrRemoveFavourite.bind(this);
  }

  render() {
    return (
      <>
        {unescape(this.props.joke.joke)}
        <button onClick={this.addOrRemoveFavourite}>F</button>
      </>
    );
  }

  addOrRemoveFavourite() {
    if (this.props.isFavourite) {
      this.props.removeFavourite(this.props.joke);
    } else {
      this.props.addFavourite(this.props.joke);
    }
  }
}
