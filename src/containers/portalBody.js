import React, { Component } from "react";
import { connect } from "react-redux";
import { changeTest, getWeather, getCalendar, getTwitter, getForecast } from "../store/actions/portal";
import moment from "moment";
import CalendarList from "../components/calendarList";
import TwitterScroll from "../components/twitterScroll";
import WeatherBox from "../components/weatherBox";
import { getForkTsCheckerWebpackPluginHooks } from "fork-ts-checker-webpack-plugin/lib/hooks";

class PortalBody extends Component {
    state = {
        tweetItems: [],
        tweetString: "",
        dateString: "",
        timeString: ""
    };

    componentDidMount() {
        this.handleGetCalendar();
        this.handleGetTwitter();
        this.handleTimeChange();
        this.handleGetWeather();
        this.handleGetForecast();

        setInterval(this.handleTimeChange, 1000);
        setInterval(this.handleGetCalendar, 10000);
        setInterval(this.handleGetTwitter, 10000);
        setInterval(this.handleGetWeather, 900000);
        setInterval(this.handleGetForecast, 90000);
    }

    handleGetForecast = () => {
        this.props.fetchNewForecast();
    };

    handleGetWeather = () => {
        this.props.fetchNewWeather();
    };

    handleTimeChange = () => {
        let nowTime = moment().format("LT");

        let nowDate = moment().format("dddd, MMM Do YYYY");
        this.setState({
            dateString: nowDate,
            timeString: nowTime
        });
    };

    handleGetCalendar = () => {
        this.props.fetchNewCalendar();
    };

    handleGetTwitter = () => {
        this.props.fetchNewTwitter();
    };

    render() {
        return (
            <div className="portalBody">
                <div className="headerBlock">
                    <div className="timeBlock">
                        <span className="headerTime">{this.state.timeString}</span>
                        <br></br>
                        <span className="headerDate" onClick={this.props.testOnChange}>
                            {this.state.dateString}
                        </span>
                    </div>
                </div>
                <WeatherBox currentWeather={this.props.apiWeather} />
                <CalendarList calendarItems={this.props.apiCalendar} />
                <TwitterScroll tweetItems={this.props.apiTwitter} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        testName: state.portalData.test,
        apiWeather: state.portalData.apiWeather,
        apiCalendar: state.portalData.apiCalendar,
        apiTwitter: state.portalData.apiTwitter,
        apiForecast: state.portalData.apiForecast
    };
};

const mapDispatchToProps = dispatch => {
    return {
        testOnChange: () => dispatch(changeTest()),
        fetchNewWeather: () => dispatch(getWeather()),
        fetchNewCalendar: () => dispatch(getCalendar()),
        fetchNewTwitter: () => dispatch(getTwitter()),
        fetchNewForecast: () => dispatch(getForecast())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PortalBody);
