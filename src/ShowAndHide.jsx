import React, { useState } from "react";
import { ReactDOM } from "react";

class ShowAndHide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageIsActive: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      messageIsActive: !prevState.messageIsActive,
    }));
  }

  render() {
    const text =
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus repudiandae culpa velit, minus maiores, magnam autem iste quidem adipisci omnis consectetur earum perferendis animi expedita provident deleniti excepturi minima labore!";
    return (
      <>
        <button onClick={this.handleClick}>
          {this.state.messageIsActive ? "Hide" : "Show"}
        </button>
        {this.state.messageIsActive && <h1 className="title">{text}</h1>}
      </>
    );
  }
}

export default ShowAndHide;
