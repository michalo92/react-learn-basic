import React from "react";
import Header from "./Header";
import ItemsList from "./ItemsList";

class ListItemsRestaurant extends React.Component {
  state = {
    items: [
      { id: 1, name: "tea", active: false, price: 3 },
      { id: 2, name: "potato", active: false, price: 5 },
      { id: 3, name: "groats", active: false, price: 6 },
      { id: 4, name: "water soup", active: false, price: 4 },
      { id: 5, name: "hot water", active: false, price: 2 },
      { id: 6, name: "bread", active: false, price: 5 },
    ],
    totalPrice: 0,
  };

  changePrice = () => {
    const activeItem = this.state.items
      .filter((item) => item.active)
      .map((e) => e.price);
    let suma = 0;
    activeItem.forEach((i) => (suma += i));
    this.setState({
      totalPrice: suma,
    });
  };

  handleChangeStatus = (id) => {
    const items = this.state.items.map((item) => {
      if (id === item.id) {
        item.active = !item.active;
      }
      return item;
    });
    this.setState({
      items: items,
    });
    this.changePrice();
  };
  render() {
    return (
      <>
        <Header items={this.state.items} price={this.state.totalPrice} />
        <ItemsList
          items={this.state.items}
          changeStatus={this.handleChangeStatus}
        />
      </>
    );
  }
}
export default ListItemsRestaurant;
