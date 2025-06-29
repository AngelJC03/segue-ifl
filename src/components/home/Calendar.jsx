// import React from 'react';
import './Calendar.css'; // Import the CSS file for styling
// import { Button } from '../navbar/Button'; // Import the Button component if needed

function Calendar() {

    return (
        <div className="calendar-container">
            <div className="calendar-bar"></div>
            <div className="calendar-body">
                <h1>Calendar</h1>
                <p>Upcoming events and important dates</p>
            </div>
            <div className="calendar-bar"></div>
        </div>
    )
}

export default Calendar;