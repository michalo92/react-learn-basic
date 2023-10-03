import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

class Bpbp extends React.Component {
  state = {
    text: "",
    number: 2,
  };

  addA() {
    const letter = "a";

    this.setState((prevState) => ({
      text: prevState.text + letter,
    }));
  }
  removeA() {
    if (this.state.text.length > 0) {
      this.setState({
        text: this.state.text.substring(0, this.state.text.length - 1),
      });
    }
    return this.state.text;
  }
  wyczysc() {
    this.setState({ text: "" });
    return this.state.text;
  }
  render() {
    return (
      <>
        <button onClick={this.addA.bind(this)}>Dodaj A</button>
        <button onClick={this.removeA.bind(this)}>Usun ostatnie A</button>
        <h1>{this.state.text.toUpperCase()}</h1>
        <button onClick={this.wyczysc.bind(this)}>Wyczysc</button>
      </>
    );
  }
}

export default Bpbp;
