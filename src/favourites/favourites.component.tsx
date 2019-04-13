import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Joke } from "models";
import JokeList from "joke-list";

import styles from "./styles.scss";

interface Props {
  favourites: Joke[];
}

export default class Favourites extends Component<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>These are your favourites jokes. To remove one, just click on it.</p>

        <p>
          <Link to="/">Click here to go back home.</Link>
        </p>

        {this.props.favourites.length === 0 ? (
          <i className={styles.noFavourites}>
            Boo! You don't have any favourite jokes. Add some from the <Link to="/">home page.</Link>
          </i>
        ) : null}

        <JokeList jokes={this.props.favourites} />
      </div>
    );
  }
}
