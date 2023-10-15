import Item from "./Item";

const ItemsList = (props) => {
  const items = props.items.map((item) => (
    <Item
      key={item.id}
      id={item.id}
      name={item.name}
      active={item.active}
      price={item.price}
      changeStatus={props.changeStatus}
    />
  ));

  return (
    <>
      <div className="list">
        <h1>Your order:</h1>
        <ul>{items}</ul>
      </div>
    </>
  );
};

export default ItemsList;
