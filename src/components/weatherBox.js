import React from "react";
import ForecastBox from "./forecastBox";

const WeatherBox = (props) => {
    return (
        //test2
        <div className="weatherBox">
            {props.currentWeather["temp"]}&#176;&nbsp;&nbsp;&nbsp;
            {props.currentWeather["description"]}
            <img src={props.currentWeather["icon"]} height="60" width="60" className="weatherIcon"></img>
            <br></br>
            <span className="littleWeather">
                sunrise: {props.currentWeather["sunrise"]}&nbsp;&nbsp;&nbsp;&nbsp; sunset:{" "}
                {props.currentWeather["sunset"]}
                &nbsp;&nbsp;&nbsp;&nbsp; precip: {props.currentWeather["precip"]}
            </span>
            <br></br>
            <ForecastBox />
        </div>
    );
};

export default WeatherBox;
