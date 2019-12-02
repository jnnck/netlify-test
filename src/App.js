import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ListItem from "./ListItem";
import Player from "./Player";

class App extends Component {
  state = {
    matches: [
      {
        name: "Club Brugge - KV Oostende",
        score: "2 - 0",
        video: "https://www.youtube.com/embed/WIIOY0I1fqI"
      },
      {
        name: "KAA Gent - Antwerp",
        score: "1 - 1",
        video: "https://www.youtube.com/embed/vLKEZ7LU4Cc"
      },
      {
        name: "Anderlecht - KV Kortrijk",
        score: "0 - 0",
        video: "https://www.youtube.com/embed/pmURLFj7jAA"
      }
    ],
    active: 1
  };
  render() {
    const { matches, active } = this.state;

    return (
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-4">
            <div class="list-group">
              {matches.map((match, index) => (
                <ListItem
                  match={match}
                  active={index === active}
                  setActive={() => this.setState({ active: index })}
                />
              ))}
            </div>
          </div>
          <div className="col-md-8">
            <Player match={matches[active]} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
