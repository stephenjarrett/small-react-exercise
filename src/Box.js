import React from 'react';

// Rule #1: extend React.Component
class Box extends React.Component {
    // Rule #4: Accept props in the
    // constructor method
    constructor(props) {
        super(props);
        
        // State is *my* stuff
        // It is always an object
        this.state = {
            message: props.message
        };
        
    }


//     Listening for an event
// Write a function in your Box.js called "printMessage"
// Add a console.log to printMessage so that it says "hello from the box!"
// Add a button inside the div rendered by your Box function component
// Add an onClick to your button and set its value to {printMessage} (without any quotes)

    _printMessage = () => {
        console.log(`hello from the ${this.state.message} box!`);
    }

    // This helper function isn't used since we used an anonymous fn with onClick below
    // _reportMyId = (event) => {
    //     this.props.doClick(this.props.id);
    // }
    
    // Rule #2: must have render method
    render() {
        //  Rule #3: must return some JSX
        //  or a call to React.createElement
        return (
            <div className='box'>
                {this.state.message}
                <button onClick={this._printMessage}>Click me</button>
            </div>
        );
    }
}

// old style without classes
// // Box is a React component
// const Box = ({finalValue, initialValue}) => {
//     return(
//         <div className="Box">
//         {initialValue}
//         </div>
//     );
// };

export default Box;
