import React, { Component } from "react";
import { debounce, unescape } from "lodash";

import { Joke } from "models";
import JokeList from "joke-list";
import jokeService from "services/joke.service";

import styles from "./styles.scss";

interface Props {
  favouriteCount: number;
}

interface State {
  jokes: Joke[];
  showFavTitle: boolean;
}

export default class App extends Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      jokes: [],
      showFavTitle: window.innerWidth >= 650
    };

    this.fetch10RandomJokes = debounce(this.fetch10RandomJokes.bind(this), 500);
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  render() {
    return (
      <>
        <header className={styles.header}>
          <h3 className={styles.title}>Chuck Norris Jokes</h3>

          <div className={styles.favourites}>
            {this.state.showFavTitle ? <div className={styles.favouritesTitle}>Favourites</div> : null}

            <svg width="24" height="24">
              <path
                fill="#fff"
                d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"
              />
            </svg>

            <div className={styles.favouriteCount}>{this.props.favouriteCount}</div>
          </div>
        </header>

        <main className={styles.mainContent}>
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
              <input type="checkbox" id="auto-fave" />I don't what I like, please pick a favourite for me every five
              seconds.
            </label>
          </div>

          <JokeList jokes={this.state.jokes} />
        </main>
      </>
    );
  }

  fetch10RandomJokes() {
    jokeService.getRandomJokes(10).then(jokes => this.setState({ jokes }));
  }

  handleResize() {
    this.setState({ showFavTitle: window.innerWidth >= 650 });
  }
}
