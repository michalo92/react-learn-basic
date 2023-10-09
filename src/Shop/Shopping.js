import React from "react";

class ShoppingCard extends React.Component {
  state = {
    availableProduct: 7,
    shoppingCart: 3,
  };
  handleRemoveFromCart = () => {
    this.setState({ shoppingCart: this.state.shoppingCart - 1 });
  };
  handleAddToCart = () => {
    this.setState({ shoppingCart: this.state.shoppingCart + 1 });
  };
  handleBuy = () => {
    this.setState({
      availableProduct: this.state.availableProduct - this.state.shoppingCart,
      shoppingCart: 0,
    });
  };
  unaviableProduct = () => <p>Product unavaiable</p>;

  render() {
    const { shoppingCart, availableProduct } = this.state;
    const style = shoppingCart === 0 ? { opacity: 0.33 } : null;
    return (
      <>
        <div className="shopping-div">
          <button
            className="shopping-button"
            disabled={shoppingCart ? false : true}
            onClick={this.handleRemoveFromCart}
          >
            -
          </button>
          <span id="shopping-span" style={style}>
            {shoppingCart}
          </span>
          <button
            className="shopping-button"
            disabled={shoppingCart === availableProduct && true}
            onClick={this.handleAddToCart}
          >
            +
          </button>
          {shoppingCart > 0 && (
            <button className="shopping-button" onClick={this.handleBuy}>
              BUY
            </button>
          )}
          {availableProduct === 0 && this.unaviableProduct()}
        </div>
      </>
    );
  }
}
export default ShoppingCard;
