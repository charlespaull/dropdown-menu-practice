import React from "react";

// this has to be a class component with a constructor because it's holding the state
class DropDown extends React.Component {
  constructor(props) {
    super(props);

    // state will have the Options (selected) & toggle (isOpen)
    this.state = {
      // using integers here because selections will be made by IDs (unique keys for each data point)
      selected: 0,
      // if toggle is open or not
      isOpen: false,
      // is add button open or not
      isAddOpen: false,
      // add bar - user inputs new value to add
      // starts as an empty string and will capture value with event.target.value
      userInput: ""
    };

    // data - list of cities - array of objects
    this.cities = [
      {
        id: 1,
        location: "Los Angeles"
      },
      {
        id: 2,
        location: "San Francisco"
      },
      {
        id: 3,
        location: "Barcelona"
      },
      {
        id: 4,
        location: "Tokyo"
      },
      {
        id: 5,
        location: "Atlanta"
      }
    ];

    this.toggleClick = this.toggleClick.bind(this);

    this.toggleAdd = this.toggleAdd.bind(this);

    this.cityCapture = this.cityCapture.bind(this);
  }

  render() {
    let items;
    if (this.state.isOpen) {
      items = this.cities.map(item => {
        return <div> {item.location} </div>;
      });
    }

    // find some way to render <Search Bar /> component if (this.state.toggleAdd === true)

    return (
      <div style={{ display: "inline", flexDirection: "column" }}>
        <div>{!this.state.isOpen ? "false" : "true"}</div>
        {/*this styling below isn't correct - just trying to get Add to open/collapse*/}
        <div style={{ textAlign: "center" }}>+</div>
        <SearchBar />
        <div onClick={() => this.toggleClick()}>Toggle</div>
        {items}
      </div>
    );
  }

  // toggle click function
  // this is going to trigger the isOpen to change state
  toggleClick() {
    this.setState({
      // this changes the state to the opposite of the current state isOpen
      isOpen: !this.state.isOpen
    });
  }

  toggleAdd() {
    this.setState({
      // this will change the state to the opposite of the current state isAddOpen
      isAddOpen: !this.state.isAddOpen
    });
  }

  cityCapture() {

  }
}

function SearchBar(props) {
  return (
    <div>
      <form className="user-input">
        <input>Enter New City Here</input>
        <button className="city-submit" onClick={this.cityCapture()}>Submit</button>
      </form>
    </div>
  );
}

export default DropDown;
