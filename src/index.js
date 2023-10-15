import React, { Children, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Bpbp from "./Modal";
import Apbp from "./App";
import AppImport from "./Input";
import ShowAndHide from "./ShowAndHide";
import Counter from "./Counter";
import CheckboxAgeConfirmation from "./CheckBoxConf/CheckboxAgeConfirmation";
import ShoppingCard from "./Shop/Shopping";
import ListItems from "./ListItems/ListItems";
// import ListItemsRestaurant from "./RestaurantMenu/Apka";
import ExchangeCounter from "./ExchangeCounter/ExchangeCounter";
import Wrozba from "./zadanie1/wrozba";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Apbp /> */}
    {/* <App /> */}
    {/* <AppImport /> */}
    {/* <ShowAndHide /> */}
    {/* <Counter counter={0} /> */}
    {/* <CheckboxAgeConfirmation /> */}
    {/* <ShoppingCard /> */}
    {/* <ListItems /> */}
    {/* <ListItemsRestaurant /> */}
    {/* <ExchangeCounter /> */}
    <Wrozba />
  </React.StrictMode>
);
