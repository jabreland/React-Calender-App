import React from 'react';

function Day(dayNumber) {
    if (dayNumber == 0) {
        return ("");
    }
    else {
        return (dayNumber);
    }
}

export function Week(props) {
    var week = [0];
    props.days.forEach(element => {
        week.push(element);
    });
    return (week.map(day => <div>{Day(day)}</div>));
}
