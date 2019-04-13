import React from "react";

import { Joke as JokeModel } from "models";
import Joke from "./joke";

interface Props {
  jokes: JokeModel[];
}

export default function JokeList(props: Props) {
  return (
    <ul>
      {props.jokes.map((j, i) => (
        <li key={i}>
          <Joke joke={j} />
        </li>
      ))}
    </ul>
  );
}
