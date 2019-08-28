import React from "react";
import Toggle from "./Toggle"


// this has to be a class component with a constructor because it's holding the state
class DDContainer extends React.Component {
    constructor(props) {
        super(props);

        // state will have the Options (selected) & toggle (isOpen)
        this.state = {
            // using integers here because selections will be made by IDs (unique keys for each data point)
            selected: 0,
            // if toggle is open or not 
            isOpen: false
        }
    }

    render () {
        return (
            <div>
                Hello!
                <Toggle />
            </div>
        )
    }
}

// toggle click function
// this is going to trigger the isOpen to change state
const toggleClick = () => {
    this.setState({
        // this changes the state to the opposite of the current state isOpen
        isOpen: !this.state.isOpen
    })
}

// data - list of cities - array of objects
const cities = [
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

]


export default DDContainer;