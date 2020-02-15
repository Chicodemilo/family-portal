import React from "react";
import { useSelector } from "react-redux";
import ForecastItem from "./forecastItem";

const ForecastBox = props => {
    const forecastItemsApi = useSelector(state => state.portalData.apiForecast);
    let forcastDivs = null;
    if (forecastItemsApi.length > 0) {
        forcastDivs = forecastItemsApi.map(item => {
            let key = Math.random();
            return <ForecastItem key={key} day={item.day} high={item.high} low={item.low} description={item.description} icon={item.icon} />;
        });
    }
    return <div className="forecastBox">{forcastDivs}</div>;
};

export default ForecastBox;
