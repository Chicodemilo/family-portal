import React from "react";
import moment from "moment";

const CalendarList = (props) => {
    const list = props.calendarItems.map((item) => {
        let key = Math.random();
        let year = moment().format("YYYY");
        let eventDate = moment(item.date).format(`DD.MM.${year}, HH:mm:ss`);

        let now = moment().format("DD.MM.YYYY, HH:mm:ss");
        let dateClass = "calendarItem";

        let diff = moment
            .utc(moment(eventDate, "DD/MM/YYYY HH:mm:ss").diff(moment(now, "DD/MM/YYYY HH:mm:ss")))
            .format("DD/MM/YYYY HH:mm:ss");

        if (diff < "01/01/1970 00:30:00") {
            dateClass = "calendarItemSoon";
        }

        if (diff < "01/01/1970 00:15:00") {
            dateClass = "calendarItemSooner";
        }

        let printTime = item.date;

        if (eventDate < now) {
            dateClass = "calendarItemOld";
        }

        if (moment(item.date).format("HH:mm a") === "00:00 am") {
            let thisYear = moment().format("YYYY");
            let thisEventDate = moment(item.date).format(`MM/DD/${thisYear}, 23:59:59`);
            printTime = moment(thisEventDate).format("ddd MMM D") + ", All Day";

            if (moment(item.date).format(`MM/DD/${thisYear}`) === moment().format(`MM/DD/${thisYear}`)) {
                dateClass = "calendarItem";
            }
        }

        return (
            <p className={dateClass} key={key}>
                {printTime} &bull; {item.summary}
            </p>
        );
    });
    return (
        <div className="calendarList">
            <div className="calendarFade"></div>
            <div className="actualList">{list}</div>
        </div>
    );
};

export default CalendarList;
