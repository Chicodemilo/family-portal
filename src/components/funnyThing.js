import React from "react";
import { useSelector } from "react-redux";

const FunnyThing = props => {
    // const funnyThingState = useSelector(state => state.portalData.apiForecast);
    // const funnyThingState = useSelector(state => state.portalData.funnyThing);
    return <div className="funnyThingContainer">{props.funnyItem}</div>;
};

export default FunnyThing;
