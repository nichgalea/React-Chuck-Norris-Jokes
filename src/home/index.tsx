import React, { Component } from "react";
import { debounce } from "lodash";

import jokeService from "services/joke.service";
import { Joke } from "models";
import JokeList from "joke-list";

import styles from "./styles.scss";

interface State {
  jokes: Joke[];
}

export default class Home extends Component<{}, State> {
  state = {
    jokes: []
  };

  constructor(props) {
    super(props);

    this.fetch10RandomJokes = debounce(this.fetch10RandomJokes.bind(this), 500);
  }

  render() {
    return (
      <>
        <h4>Instructions:</h4>

        <ul>
          <li>Press the button to fetch 10 random jokes</li>
          <li>Add/Remove a joke to your favourites by clicking it</li>
          <li>You can also have a random joke added to your favourites every 5 seconds</li>
          <li>You can only have 10 favourite jokes at a time</li>
        </ul>

        <button className={styles.fetchJokesButton} onClick={this.fetch10RandomJokes}>
          Fetch 10 Random Jokes
        </button>

        <div className={styles.autoFave}>
          <label htmlFor="auto-fave">
            <input type="checkbox" id="auto-fave" />I don't know what I like, please pick a random favourite for me
            every five seconds.
          </label>
        </div>

        <JokeList jokes={this.state.jokes} />
      </>
    );
  }

  fetch10RandomJokes() {
    jokeService.getRandomJokes(10).then(jokes => this.setState({ jokes }));
  }
}