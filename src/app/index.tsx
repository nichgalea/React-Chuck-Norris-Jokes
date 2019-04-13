import React, { Component } from "react";
import { debounce, unescape } from "lodash";

import { Joke } from "models";
import jokeService from "services/joke.service";

import styles from "./styles.scss";

interface State {
  jokes: Joke[];
}

export default class App extends Component<{}, State> {
  constructor(props) {
    super(props);

    this.state = {
      jokes: []
    };

    this.fetch10RandomJokes = debounce(this.fetch10RandomJokes.bind(this), 500);
  }

  render() {
    return (
      <>
        <h3>Chuck Norris Jokes</h3>

        <h4>Instructions:</h4>

        <ul>
          <li>Press the button to either fetch 10 random jokes</li>
          <li>Add a joke to your favourites by clicking it</li>
          <li>You can also have a random joke added to your favourites every 5 seconds</li>
        </ul>

        <button className={styles.fetchJokesButton} onClick={this.fetch10RandomJokes}>
          Fetch 10 Random Jokes
        </button>

        <div className={styles.autoFave}>
          <label htmlFor="auto-fave">
            <input type="checkbox" id="auto-fave" />I don't what I like, please pick a favourite for me every five
            seconds.
          </label>
        </div>

        <ul>
          {this.state.jokes.map(j => (
            <li key={j.id}>{unescape(j.joke)}</li>
          ))}
        </ul>
      </>
    );
  }

  fetch10RandomJokes() {
    jokeService.getRandomJokes(10).then(jokes => this.setState({ jokes }));
  }
}
