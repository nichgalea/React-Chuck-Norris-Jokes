import React, { Component } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import { Joke } from "models";
import Home from "home";
import Favourites from "favourites";

import styles from "./styles.scss";

interface Props {
  favourites: Joke[];
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
      <BrowserRouter>
        <header className={styles.header}>
          <h3 className={styles.title}>
            <Link to="/">Chuck Norris Jokes</Link>
          </h3>

          <div className={styles.favourites}>
            <Link to="/favourites">
              {this.state.showFavTitle ? <div className={styles.favouritesTitle}>Favourites</div> : null}

              <svg width="24" height="24">
                <path
                  fill="#fff"
                  d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"
                />
              </svg>

              <div className={styles.favouriteCount}>{this.props.favourites.length}</div>
            </Link>
          </div>
        </header>

        <main className={styles.mainContent}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/favourites" component={Favourites} />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }

  handleResize() {
    this.setState({ showFavTitle: window.innerWidth >= 650 });
  }
}
