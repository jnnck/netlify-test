import React, { Component } from "react";

class ListItem extends Component {
  render() {
    const { active, match, setActive } = this.props;
    return (
      <a
        href="#"
        class={
          "list-group-item list-group-item-action " + (active ? "active" : "")
        }
        onClick={setActive}
      >
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">{match.name}</h5>
        </div>

        <small>{match.score}</small>
      </a>
    );
  }
}

export default ListItem;
