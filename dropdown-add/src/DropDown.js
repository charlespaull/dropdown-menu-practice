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
      userInput: "",
      // ID counter to increment by 1 to each added city.
      idCounter: 0,
      // this.cities[cities.length - 1].id, //this won't work - comes up as undefined

      // pre-added cities in the dropdown menu
      cities: [
        {
          id: 0,
          location: "Los Angeles"
        },
        {
          id: 1,
          location: "San Francisco"
        },
        {
          id: 2,
          location: "Barcelona"
        },
        {
          id: 3,
          location: "Tokyo"
        },
        {
          id: 4,
          location: "Atlanta"
        }
      ],

      selectCity: 0
    };

    // data - list of cities - array of objects

    // binding the methods of to the component instance (the component at that instance when the method is triggered) with .bind() - has to be done inside of our constructor.
    this.toggleClick = this.toggleClick.bind(this);

    this.toggleAdd = this.toggleAdd.bind(this);

    this.handleInputChange = this.handleInputChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.onClickCity = this.onClickCity.bind(this);
  }
  // NOTE: end of constructor

  // ---------------------------------------------------


  // items = this.state.cities.map(item => {
  //   return <div key={item.id} onSubmit={this.onClickCity}> {item.location} </div>;
  // });

  render() {
    let items;
    /*if (this.state.isOpen) {
      items = (
        <select value={this.state.selectCity} onClick={this.onClickCity}>
          {this.state.cities.map(item =>  <option key={item.id}>{item.location} </option>)}
        </select>
      )
    }*/

    if (this.state.isOpen) {
      items = (
        <div>
          { this.state.cities[this.state.selectCity].location }
          <div style={{display: 'flex', flexDirection: 'col'}}>
            {this.state.cities.map(item =>  <div key={item.id} id={item.id} onClick={this.onClickCity}>{item.location} </div>)}
          </div>
        </div>
      )
    }

    // find some way to render an input & button submit component if (this.state.toggleAdd)
    // if this is true
    let add
    if (this.state.isAddOpen) {
      //return (
      add = (
        // return div that has an input field & submit button to add a city to the dropdown list
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              placeholder="Add a City"
              type="text"
              onChange={e => this.handleInputChange(e)}
              value={this.state.userInput}
            ></input>
            <button className="city-submit" value={this.state.value}>
              Add
            </button>
          </form>
        </div>
      );
    }

    return (
      <div style={{ display: "inline", flexDirection: "column" }}>
        {/* just toggles between T/F when Toggle is clicked */}
        <div>{!this.state.isOpen ? "false" : "true"}</div>
        <div onClick={() => this.toggleClick()}>Toggle</div>
        {/* just toggles between T/F when "+ sign" is clicked -- styling below isn't correct */}
        <div style={{ textAlign: "center" }}>
          {!this.state.isAddOpen ? "false" : "true"}
        </div>
        {/*this styling below isn't correct - just trying to get Add to open/collapse*/}
        <div style={{ textAlign: "center" }} onClick={() => this.toggleAdd()}>
          +
        </div>
        {items}
        { add }
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
    console.log("hello there! Add me.");
    this.setState({
      // this will change the state to the opposite of the current state isAddOpen
      isAddOpen: !this.state.isAddOpen,
      isOpen: !this.state.isOpen
    });
  }

  // this works - captures user value on each keystroke
  handleInputChange(event) {
    // console.log(event.target.value); // checking to see if user key stokes is captured - works
    this.setState({
      userInput: event.target.value
    });
  }

  handleSubmit(event) {
    // create a new object - this will be pushed into this.cities with a location and id
    let obj;
    event.preventDefault();
    // grabs value from state constructor
    const data = this.state;
    // close isAddOpen
    this.setState({
      isAddOpen: !this.state.isAddOpen,
      isOpen: !this.state.isOpen
      // the below comes up as undefined and breaks code
      // cities: this.state.cities[cities.length - 1].id++
    });
    // console logs to show submit button works - now need POST to this.cities array
    console.log(data);

    // this isn't correct because it doesn't use this.setState({}) but it works
    obj = { id: this.state.cities.length, location: this.state.userInput };
    // push the user inputted city in the array of objects in city (state)
    this.setState({
      cities: [ ...this.state.cities, obj ]
    })
    console.log(obj);
  }

  onClickCity(event) {
    let cityChoice;
    console.log(event.target)
    event.preventDefault();
    this.setState({
      selectCity: event.target.id
    })
    // console.log(event.target.value)
  }
}

export default DropDown;
