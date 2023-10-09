import React, { useState } from "react";
import { ReactDOM } from "react";

class Counter extends React.Component {
  state = {
    number: 0,
    clickCounter: +this.props.counter,
  };

  handleMathClick(type = "reset", number = 1) {
    switch (type) {
      case "subtraction":
        this.setState((prevState) => ({
          number: prevState.number - Number(number),
          clickCounter: prevState.clickCounter + 1,
        }));
        break;
      case "addition":
        this.setState((prevState) => ({
          number: prevState.number + Number(number),
          clickCounter: prevState.clickCounter + 1,
        }));
        break;
      case "reset":
        this.setState((prevState) => ({
          number: number,
          clickCounter: +this.props.counter,
        }));
        break;
      default:
        console.log("error");
        break;
    }
  }
  render() {
    return (
      <>
        {/* wersja z bind:
    <button onClick={this.handleMathClick.bind(this, "substraction", 1)}>
      {"-1"}
    </button> */}

        <MathButton
          name="-1"
          type="subtraction"
          click={this.handleMathClick.bind(this)}
        />
        <MathButton
          name="-10"
          number="10"
          type="subtraction"
          click={this.handleMathClick.bind(this)}
        />
        <MathButton
          name="Reset wyniku"
          number={0}
          type="reset"
          click={this.handleMathClick.bind(this)}
        />
        <MathButton
          name="+1"
          type="addition"
          click={this.handleMathClick.bind(this)}
        />
        <MathButton
          name="+10"
          number="10"
          type="addition"
          click={this.handleMathClick.bind(this)}
        />
        <ResultPanel
          result={this.state.number}
          clicker={this.state.clickCounter}
        />
      </>
    );
  }
}

const MathButton = (props) => {
  return (
    <button onClick={() => props.click(props.type, props.number)}>
      {props.name}
    </button>
  );
};
const ResultPanel = (props) => {
  if (props.clicker < 10) {
    return (
      <>
        <h1>
          Liczba klikniec: {props.clicker}
          {props.clicker >= 10 ? (
            <span className="spanek-error"> - Przeciazenie procesora! </span>
          ) : null}
        </h1>
        <h1>Wynik: {props.result}</h1>
      </>
    );
  } else {
    return (
      <>
        <h1>
          Liczba klikniec: {props.clicker}
          {props.clicker >= 10 ? (
            <span className="spanek-error"> - Przeciazenie procesora! </span>
          ) : null}
        </h1>
        <h1>Wynik: {props.result}</h1>
        <h2>Uwaga, liczba klikniec przekroczyla 10</h2>
      </>
    );
  }
};

export default Counter;
