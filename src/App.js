import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Bpbp from "./Modal";

// WERSIA Z KONSTRUKTOREM - bez konstruktora jest modal.jsx

class Apbp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      number: 2,
      uruchom: "startuj",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const letter = "a";
    const number = Math.floor(Math.random() * 10);
    this.setState((prevState) => ({
      text: prevState.text + number + " ",
    }));
  }
  removeA() {
    if (this.state.text.length > 0) {
      this.setState({
        text: this.state.text.substring(0, this.state.text.length - 2),
      });
    }
    return this.state.text;
  }
  wyczysc() {
    this.setState({ text: "" });
    return this.state.text;
  }

  render() {
    // const btnName = "Dodaj liczbe";
    return (
      <>
        <button
          style={{ fontSize: "28px", margin: "24px" }}
          onClick={this.handleClick}
        >
          {this.state.uruchom}
        </button>
        <button onClick={this.removeA.bind(this)}>Usun ostatnia liczbe</button>
        <PanelResult text={this.state.text}>bbb</PanelResult>
        <button onClick={this.wyczysc.bind(this)}>Wyczysc</button>
      </>
    );
  }
}
const PanelResult = (props) => {
  return <h1>{props.text}</h1>;
};

export default Apbp;

// function App() {
//   return <></>;
// }

// export default App;
