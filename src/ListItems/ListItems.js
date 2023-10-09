import React from "react";

const data = {
  users: [
    { id: 1, age: 29, name: "Mike", sex: "male" },
    { id: 2, age: 43, name: "Sabina", sex: "female" },
    { id: 3, age: 22, name: "Adam", sex: "male" },
    { id: 4, age: 17, name: "Lucy", sex: "female" },
  ],
};

const Item = ({ content }) => (
  <div className="userInfo">
    <h1>{content.name} </h1>
    <p>User information: </p>
    <p>
      Age: <strong>{content.age}</strong>
    </p>
    <p>Sex: {content.sex}</p>
    <br />
  </div>
);

class ListItems extends React.Component {
  state = {
    select: "all",
  };

  usersList = () => {
    let users = data.users;
    switch (this.state.select) {
      case "all":
        return users.map((user) => <Item content={user} key={user.id} />);
      case "female":
        return users
          .filter((user) => user.sex === this.state.select)
          .map((user) => <Item content={user} key={user.id} />);
      case "male":
        return users
          .filter((user) => user.sex === this.state.select)
          .map((user) => <Item content={user} key={user.id} />);
    }
  };
  handleUsersFilter = (option) => {
    this.setState({
      select: option,
    });
  };

  render() {
    return (
      <>
        <div>
          <button onClick={() => this.handleUsersFilter("all")}>All</button>
          <button onClick={() => this.handleUsersFilter("female")}>
            Woman
          </button>
          <button onClick={() => this.handleUsersFilter("male")}>Man</button>
          {this.usersList()}
        </div>
      </>
    );
  }
}
export default ListItems;
