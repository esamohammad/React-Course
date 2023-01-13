import React from 'react';

const date = new Date();
const today = date.getDate();
const thisMonth = date.getMonth();
const thisYear = date.getFullYear();

const Date = () => {
    return (
        <div>
            <h1>🚑🏍This is The Test Transmission🏍🚒</h1>
            <h3> Date {thisYear}</h3>
            <h3>{today}</h3>
            <h3>{thisMonth}</h3>
            <p> Date {today + "/" + thisMonth + 1 + "/" + thisYear}</p>
        </div>
    );
};

export default Date;