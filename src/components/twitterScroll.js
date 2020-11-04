import React from "react";
import moment from "moment";

const TwitterScroll = (props) => {
    let famItems = Object.keys(props.text).map(function (key, index) {
        let name = props.text[key]["name"];
        let status = props.text[key]["status"]["text"];
        let time = props.text[key]["status"]["created_at"];

        // time = moment(props.text[key]["status"]["created_at"]).format(`m.d.YY, HH:mma`);
        return (
            <div className="familyItem">
                <span className="famName">{name}</span>
                &nbsp;
                <span className="famTime">{time}</span>
                &nbsp;
                <span className="famStatus">{status}</span>
            </div>
        );
    });
    return <div className="familyStatus">{famItems}</div>;
};

export default TwitterScroll;
