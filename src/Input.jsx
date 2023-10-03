import React, { useState } from "react";
// import ReactDOM from "react-dom/client";
import { ReactDOM } from "react";

class AppInput extends React.Component {
  state = {
    value: "",
  };
  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
    // return this.state.value;
  };
  handleClick() {
    this.setState({
      value: "",
    });
  }
  render() {
    return (
      <>
        <input
          value={this.state.value}
          placeholder="Wpisz wiadomosc..."
          onChange={this.handleChange}
          type="text"
        ></input>
        <button onClick={this.handleClick.bind(this)}>Reset</button>
        <h1 className="title">{this.state.value.toUpperCase()}</h1>
      </>
    );
  }
}
export default AppInput;
