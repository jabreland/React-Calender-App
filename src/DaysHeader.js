import React, {Component} from "react";


function DaysHeader(props){
    var daysNames = ["Sunday", 
                        "Monday", 
                        "Tuesday", 
                        "Wednesday", 
                        "Thursday", 
                        "Friday", 
                        "Saturday"];

    return(
        daysNames.map(day=>(<div className={"dayName" + day} >{day}</div>))
    );
}

export default DaysHeader;