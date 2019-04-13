import React from "react";

import { Joke as JokeModel } from "models";

import styles from "./styles.scss";
import Joke from "./joke";

interface Props {
  jokes: JokeModel[];
}

export default function JokeList(props: Props) {
  return (
    <ul className={styles.jokeList}>
      {props.jokes.map((j, i) => (
        <li className={styles.jokeListItem} key={i}>
          <Joke joke={j} />
        </li>
      ))}
    </ul>
  );
}
