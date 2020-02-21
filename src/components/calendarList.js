import React from "react";
import moment from "moment";

const CalendarList = props => {
    const list = props.calendarItems.map(item => {
        let key = Math.random();
        let year = moment().format("YYYY");
        let eventDate = moment(item.date).format(`DD.MM.${year}, HH:mm:ss`);
        let now = moment().format("DD.MM.YYYY, HH:mm:ss");
        let dateClass = "calendarItem";
        if (eventDate < now) {
            dateClass = "calendarItemOld";
        }
        let diff = moment.utc(moment(eventDate, "DD/MM/YYYY HH:mm:ss").diff(moment(now, "DD/MM/YYYY HH:mm:ss"))).format("DD/MM/YYYY HH:mm:ss");
        if (diff < "01/01/1970 00:30:00") {
            dateClass = "calendarItemSoon";
        }
        if (diff < "01/01/1970 00:15:00") {
            dateClass = "calendarItemSooner";
        }

        let printTime = item.date;
        if (moment(item.date).format("HH:mm a") === "00:00 am") {
            let thisYear = moment().format("YYYY");
            let thisEventDate = moment(item.date).format(`MM/DD/${thisYear}, HH:mm:ss`);
            printTime = moment(thisEventDate).format("ddd MMM DD") + ", All Day";
        }
        return (
            <p className={dateClass} key={key}>
                {printTime} &bull; {item.summary}
            </p>
        );
    });
    return <div className="calendarList">{list}</div>;
};

export default CalendarList;
