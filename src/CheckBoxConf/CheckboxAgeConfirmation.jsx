import React from "react";
import { ReactDOM } from "react";

const positiveMessage = "Mozesz obejrzec film";

const negativeMessage =
  "Nie mozesz obejzec tego filmu poniewaz masz ponizej 16lat";
const displayMessage = (isConfirmed, isFormSubmited) => {
  if (isFormSubmited) {
    if (isConfirmed) {
      return <ValidationMessage text={positiveMessage} />;
    } else {
      return <ValidationMessage text={negativeMessage} />;
    }
  } else {
    return null;
  }
};

const ValidationMessage = (props) => {
  const { text } = props;
  return <h4>{text}</h4>;
};

class CheckboxAgeConfirmation extends React.Component {
  state = {
    isConfirmed: false,
    isFormSubmited: false,
  };
  handleChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed,
      isFormSubmited: false,
    });
  };
  handleFormSubmit = (e) => {
    e.preventDefault();
    if (!this.state.isFormSubmited) {
      this.setState({
        isFormSubmited: true,
      });
    }
  };
  // displayMessage = () => {
  //   if (this.state.isFormSubmited) {
  //     if (this.state.isConfirmed) {
  //       return <ValidationMessage text={positiveMessage} />;
  //     } else {
  //       return <ValidationMessage text={negativeMessage} />;
  //     }
  //   } else {
  //     return null;
  //   }
  // };

  render() {
    const { isConfirmed, isFormSubmited } = this.state;

    return (
      <>
        <h1>Kup bilet na horror roku!</h1>
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="checkbox"
            id="age"
            checked={isConfirmed}
            onChange={this.handleChange}
          />
          <label htmlFor="age">Mam co najmniej 16 lat</label>
          <br />
          <button type="submit">Kup bilet</button>
        </form>
        {displayMessage(isConfirmed, isFormSubmited)}
      </>
    );
  }
}
export default CheckboxAgeConfirmation;
