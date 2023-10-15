const Header = (props) => {
  const activeItems = props.items.filter((item) => item.active);
  const number = activeItems.length;
  return (
    <>
      <header>
        <h2>Your order include {activeItems.length} items</h2>
        <h2>To pay: {number ? `${props.price}£` : "-"}</h2>
      </header>
    </>
  );
};

export default Header;
