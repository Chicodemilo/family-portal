import React from "react";

const WeatherBox = props => {
    return (
        <div className="weatherBox">
            {props.currentWeather["temp"]}&#176;&nbsp;&nbsp;&nbsp;
            {props.currentWeather["description"]}
            <img src={props.currentWeather["icon"]} height="40" width="40" className="weatherIcon"></img>
        </div>
    );
};

export default WeatherBox;
