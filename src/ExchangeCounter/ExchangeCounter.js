import React from "react";

const Cash = (props) => {
  const value = ((props.cash / props.ratio) * props.price).toFixed(2);
  return (
    <h2>
      {props.title}
      {props.cash <= 0 ? "" : value}
    </h2>
  );
};

class ExchangeCounter extends React.Component {
  state = {
    amount: "",
    product: "elektricity",
  };
  static defaultProps = {
    currencies: [
      { id: 0, name: "zloty", ratio: 1, title: "Value in zlotych: " },
      { id: 1, name: "dollar", ratio: 3.6, title: "Value in Dollar: " },
      { id: 2, name: "euro", ratio: 4.1, title: "Value in Euro: " },
      { id: 3, name: "pound", ratio: 5.3, title: "Value in Pound: " },
    ],
    prices: {
      electricity: 0.51,
      gas: 5.99,
      oranges: 4.59,
    },
  };
  handleChange = (e) => {
    this.setState({
      amount: e.target.value,
    });
  };
  handleSelect = (e) => {
    this.setState({
      amount: "",
      product: e.target.value,
    });
  };
  insertSuffix = (select) => {
    if (select === "elektricity") return <em>kWh</em>;
    else if (select === "gas") return <em>Litre</em>;
    else if (select === "oranges") return <em>kg</em>;
    else return "";
  };
  selectPrice(select) {
    return this.props.prices[select];
  }

  render() {
    const { amount, product } = this.state;
    const calculator = this.props.currencies.map((currency) => (
      <Cash
        key={currency.id}
        ratio={currency.ratio}
        title={currency.title}
        cash={amount}
        price={this.selectPrice(product)}
      />
    ));
    return (
      <>
        <div>
          <label>
            Choose product:
            <select defaultValue={product} onChange={this.handleSelect}>
              <option value={"electricity"}>electricity</option>
              <option value={"gas"}>petrol</option>
              <option value={"oranges"}>oranges</option>
            </select>
          </label>
          <br />
          <label>
            <input
              value={amount}
              type="number"
              onChange={this.handleChange}
            ></input>
            {this.insertSuffix(product)}
          </label>
          {calculator}
        </div>
      </>
    );
  }
}
export default ExchangeCounter;
