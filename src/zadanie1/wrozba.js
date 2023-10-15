import React from "react";

class Wrozba extends React.Component {
  state = {
    wrozby: [
      { id: 0, name: "pierwsza wrozba" },
      { id: 1, name: "druga wrozba" },
      { id: 2, name: "trzecia wrozba" },
    ],
    nrWrozby: "",
    newOmen: "",
  };
  handleShowOmen = () => {
    const number = Math.trunc(Math.random() * this.state.wrozby.length);
    this.setState({
      nrWrozby: number,
    });
  };
  handleChangeText = (e) => {
    const newOmen = e.target.value;
    this.setState({
      newOmen: newOmen,
    });
  };
  handleAddOmen = () => {
    if (this.state.newOmen !== "") {
      this.state.wrozby.push({
        id: this.state.wrozby.length,
        name: this.state.newOmen,
      });
      const aktualneWrozby = this.state.wrozby.map((e) => `${e.name}`);
      alert(`Wrozba dodana, aktualne wrozby: ${aktualneWrozby}`);
    }
    this.setState({ newOmen: "" });
  };

  render() {
    const mapOmen = this.state.wrozby.map((e) => {
      if (e.id === this.state.nrWrozby) {
        return <h1 key={e.id}>{e.name}</h1>;
      }
    });
    return (
      <>
        <div>
          <button onClick={this.handleShowOmen}>Zobacz wrozbe</button>
          <br />
          <label>
            <input
              type="text"
              value={this.state.newOmen}
              onChange={this.handleChangeText}
            ></input>
            <button onClick={this.handleAddOmen}>Dodaj wrozbe</button>
          </label>
          {mapOmen}
        </div>
      </>
    );
  }
}
export default Wrozba;
