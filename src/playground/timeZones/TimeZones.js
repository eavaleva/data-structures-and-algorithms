import React from 'react';

/**
 * The below React.js application displays a clock for various time zones. It uses intervals to update the time.
 *  However, the application needs to reset the intervals to avoid having multiple intervals that are never cleared. 
 * Solve this issue in the application by doing the following:
 *  Create a .componentDidUpdate() method that takes prevProps as its argument.
 * Inside .componentDidUpdate() method, check if the current timezone prop is the same as that of prevProps.
 * If it is, then return.
 * Lastly, call the clearInterval() function on this.intervalID and then 
 * start a new interval using the .startInterval() method.


 */

import React from 'react';

export class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    startInterval() {
        let delay = 1000;

        this.intervalID = setInterval(() => {
            this.setState({ date: new Date() });
        }, delay);
    }

    componentDidMount() {
        this.startInterval();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.timezone === this.props.timezone) {
            return;
        }
        clearInterval(this.intervalID);
        this.startInterval();
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    render() {
        return (
            <div>
                <p className='clock-text'>{this.state.date.toLocaleTimeString('en-us', { 'timeZone': this.props.timezone })}</p>
                <p className='timezone-text'>{this.props.timezone}</p>
            </div>
        );
    }
}

/**
 * The componentDidUpdate method checks whether the timezone prop has changed. If it hasn't, it simply returns. 
 * If it has, it clears the old interval using clearInterval and starts a new one using the startInterval method. 
 * This ensures that there is only one active interval at any given time, and prevents multiple 
 * intervals from running and consuming unnecessary resources.
 */