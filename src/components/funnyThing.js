import React from "react";
import { useSelector } from "react-redux";

const FunnyThing = (props) => {
    let search = ["sex", "vagina", "orgasm", "penis", "Sex", "Vagina", "Orgasm", "Penis"];
    let replaceWith = "WhooHoo";
    let funnyItem = "";
    search.forEach((term) => {
        funnyItem = props.funnyItem.replace(term, replaceWith);
    });

    var n = funnyItem.search("Born Today");
    if (n > 0) {
        let splitHist = funnyItem.split(":::");
        return (
            <div className="funnyThingContainer">
                {splitHist[0]}
                <br />
                <br />
                &bull;{splitHist[1]}
                <br />
                <br />
                &bull;{splitHist[2]}
            </div>
        );
    }
    return <div className="funnyThingContainer">{funnyItem}</div>;
};

export default FunnyThing;
