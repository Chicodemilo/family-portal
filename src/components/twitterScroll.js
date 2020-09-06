import React from "react";

const TwitterScroll = (props) => {
    let famItems = Object.keys(props.text).map(function (key, index) {
        let name = props.text[key]["name"];
        let status = props.text[key]["status"]["text"];
        let time = props.text[key]["status"]["created_at"];
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
    // console.log(famItems);
    return <div className="familyStatus">{famItems}</div>;
};

export default TwitterScroll;
