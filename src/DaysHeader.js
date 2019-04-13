import React, {Component} from "react";

function DaysHeader(props){
    var daysNames = ["Saturday", 
                        "Monday", 
                        "Tuesday", 
                        "Wednesday", 
                        "Thursday", 
                        "Friday", 
                        "Saturday"];

    return(<div className="daysNames">
        <div>{daysNames.map(day=>(<div>day</div>))}</div>
    </div>);
}

export default DaysHeader;