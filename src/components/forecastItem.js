import React from "react";

const ForecastItem = (props) => {
    return (
        <div className="forecastItem">
            {props.day}
            <br></br>
            <img src={props.icon} height="40" width="40"></img>
            <br></br>
            {props.high}/{props.low}
        </div>
    );
};

export default ForecastItem;
