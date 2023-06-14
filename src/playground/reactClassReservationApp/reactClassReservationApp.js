/**
 * The program below is a React.js application that allows users to RSVP to a birthday party. Complete the application by doing the following:

    In the constructor() of the Reserve class component, set the initial state of reserved to false. Then, bind the .reserveEvent() method to this.

    To change the reserved state on the “RSVP Now!” button click, set the reserved state to newReservation in .reserveEvent().

    Inside Reserve‘s render() function, render the eventName prop as an <h2> element. The prop is being passed in from the parent App component.

If the code runs successfully, you should see a button labeled “RSVP Now” for “Codey’s” birthday party.

 */

import React from 'react';

class Reserve extends React.Component {
    constructor(props) {
        super(props);
        // Set the initial state of reserved to false
        this.state = {
            reserved: false
        };

        this.reserveEvent = this.reserveEvent.bind(this);
        // Bind the reserveEvent method to this
    }

    reserveEvent() {
        const newReservation = this.state.reserved === true ? false : true;
        // Set reserved state to newReservation
        this.setState({
            reserved: newReservation
        });
    }

    render() {
        return (
            <div className='Reserve'>
                {/* Set H2 text to be eventName prop */}
                <h2>{this.props.eventName}</h2>
                <button onClick={this.reserveEvent}>
                    RSVP Now!
                </button>
                {this.state.reserved && (
                    <p>You're set! See you there!</p>
                )}
            </div>
        )
    }
}

export default Reserve;
