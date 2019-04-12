import React, { Component } from "react";

import styles from "./styles.scss";

export default class App extends Component {
  constructor(props) {
    super(props);
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

        <button className={styles.fetchJokesButton}>Fetch 10 Random Jokes</button>

        <div className={styles.autoFave}>
          <label htmlFor="auto-fave">
            <input type="checkbox" id="auto-fave" />I don't what I like, please pick a favourite for me every five
            seconds.
          </label>
        </div>
      </>
    );
  }
}
