import React, { Component } from "react";

class Player extends Component {
  render() {
    const { match } = this.props;
    return (
      <div class="embed-responsive embed-responsive-16by9">
        <iframe
          class="embed-responsive-item"
          src={match.video}
          allowfullscreen
        ></iframe>
      </div>
    );
  }
}

export default Player;
