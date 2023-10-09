import React from "react";

const positiveMessage = "Mozesz obejrzec film";

const negativeMessage =
  "Nie mozesz obejzec tego filmu poniewaz masz ponizej 16lat";
// const displayMessage = (isConfirmed, isFormSubmited) => {
//   if (isFormSubmited) {
//     if (isConfirmed) {
//       return <ValidationMessage text={positiveMessage} />;
//     } else {
//       return <ValidationMessage text={negativeMessage} />;
//     }
//   } else {
//     return null;
//   }
// };
const OrderForm = (props) => {
  const { submit, checked, change } = props;
  return (
    <>
      <form onSubmit={submit}>
        <input type="checkbox" id="age" checked={checked} onChange={change} />
        <label htmlFor="age">Mam co najmniej 16 lat</label>
        <br />
        <button type="submit">Kup bilet</button>
      </form>
    </>
  );
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
  displayMessage = () => {
    if (this.state.isFormSubmited) {
      if (this.state.isConfirmed) {
        return <ValidationMessage text={positiveMessage} />;
      } else {
        return <ValidationMessage text={negativeMessage} />;
      }
    } else {
      return null;
    }
  };

  render() {
    const { isConfirmed } = this.state;

    return (
      <>
        <h1>Kup bilet na horror roku!</h1>
        <OrderForm
          checked={isConfirmed}
          submit={this.handleFormSubmit}
          change={this.handleChange}
        />
        {this.displayMessage()}
        {/* {displayMessage(isConfirmed, isFormSubmited)} */}
      </>
    );
  }
}
export default CheckboxAgeConfirmation;
