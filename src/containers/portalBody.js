import React, { Component } from "react";
import { connect } from "react-redux";
import {
    changeTest,
    getWeather,
    getCalendar,
    getTwitter,
    getForecast,
    getHistory,
    getJoke,
    getFact,
    getQuote,
} from "../store/actions/portal";
import moment from "moment";
import CalendarList from "../components/calendarList";
import TwitterScroll from "../components/twitterScroll";
import WeatherBox from "../components/weatherBox";
import FunnyThing from "../components/funnyThing";

class PortalBody extends Component {
    state = {
        tweetItems: [],
        tweetString: "",
        dateString: "",
        timeString: "",
        newFunnyThing: "",
        weatherFirstRun: true,
    };

    componentDidMount() {
        if (this.state.weatherFirstRun == true) {
            this.handleGetCalendar().then(() => {
                if (this.props.apiCalendar[0] !== "badNetwork") {
                    this.handleGetTwitter();
                    this.handleTimeChange();
                    this.handleGetWeather();
                    this.handleGetForecast();
                    this.showFunnyThing();
                    this.props.fetchNewHistory();
                    this.props.fetchNewJoke();
                    this.props.fetchNewFact();
                    this.props.fetchNewQuote();
                }
            });
        }

        setInterval(this.showFunnyThing, 5000);
        setInterval(this.handleTimeChange, 1000);
        setInterval(this.handleGetCalendar, 20000);
        setInterval(this.handleGetTwitter, 1000);
        setInterval(this.handleGetWeather, 900000);
        setInterval(this.handleGetForecast, 1800000);
    }

    showFunnyThing = () => {
        if (this.props.apiCalendar[0] !== "badNetwork") {
            let picker = Math.round(Math.random() * 3);
            // console.log(picker);
            // picker = 1;
            switch (picker) {
                case 1:
                    this.props.fetchNewHistory().then(() => {
                        let newKey = Math.random();
                        if (this.props.historyItem !== "") {
                            this.setState({
                                newFunnyThing: (
                                    <FunnyThing
                                        key={newKey}
                                        funnyItem={this.props.historyItem.history}
                                    />
                                ),
                            });
                        }
                    });
                    break;
                case 2:
                    this.props.fetchNewJoke().then(() => {
                        let newKey = Math.random();
                        if (this.props.historyItem !== "") {
                            this.setState({
                                newFunnyThing: (
                                    <FunnyThing key={newKey} funnyItem={this.props.jokeItem} />
                                ),
                            });
                        }
                    });
                    break;
                case 3:
                    this.props.fetchNewFact().then(() => {
                        let newKey = Math.random();
                        if (this.props.historyItem !== "") {
                            this.setState({
                                newFunnyThing: (
                                    <FunnyThing key={newKey} funnyItem={this.props.factItem} />
                                ),
                            });
                        }
                    });
                    break;
                case 4:
                    this.props.fetchNewQuote().then(() => {
                        let newKey = Math.random();
                        if (this.props.historyItem !== "") {
                            this.setState({
                                newFunnyThing: (
                                    <FunnyThing key={newKey} funnyItem={this.props.quoteItem} />
                                ),
                            });
                        }
                    });
                    break;
                default:
                    break;
            }
        }
    };

    handleGetForecast = () => {
        if (this.props.apiCalendar[0] !== "badNetwork") this.props.fetchNewForecast();
    };

    handleGetWeather = () => {
        if (this.props.apiCalendar[0] !== "badNetwork") this.props.fetchNewWeather();
        this.setState({
            weatherFirstRun: false,
        });
    };

    handleTimeChange = () => {
        let nowTime = moment().format("LT");

        let nowDate = moment().format("dddd, MMM Do YYYY");
        this.setState({
            dateString: nowDate,
            timeString: nowTime,
        });
    };

    handleGetCalendar = async () => {
        return new Promise((resolve, reject) => {
            this.props.fetchNewCalendar().then(resolve());
            reject();
        });
    };

    handleGetTwitter = () => {
        if (this.props.apiCalendar[0] !== "badNetwork") this.props.fetchNewTwitter();
    };

    render() {
        let badNetwork =
            this.props.apiCalendar[0] == "badNetwork" ? (
                <p
                    style={{
                        color: "blue",
                        fontSize: 55,
                        paddingTop: 100,
                        fontWeight: "bold",
                        letterSpacing: 0.6,
                    }}
                >
                    Oh No!!!! <br></br>
                    <br></br>Goodtime Internet's Got The Blues.
                </p>
            ) : null;

        let conditionalWeather = <WeatherBox currentWeather={this.props.apiWeather} />;

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
                {this.state.newFunnyThing}
                {conditionalWeather}
                {badNetwork}
                <CalendarList calendarItems={this.props.apiCalendar} />
                <TwitterScroll text={this.props.apiTwitter} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        testName: state.portalData.test,
        apiWeather: state.portalData.apiWeather,
        apiCalendar: state.portalData.apiCalendar,
        apiTwitter: state.portalData.apiTwitter,
        apiForecast: state.portalData.apiForecast,
        funnyThing: state.portalData.funnyThing,
        historyItem: state.portalData.apiTodayInHistory,
        jokeItem: state.portalData.apiJoke,
        factItem: state.portalData.apiFact,
        quoteItem: state.portalData.apiQuote,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        testOnChange: () => dispatch(changeTest()),
        fetchNewWeather: () => dispatch(getWeather()),
        fetchNewCalendar: () => dispatch(getCalendar()),
        fetchNewTwitter: () => dispatch(getTwitter()),
        fetchNewForecast: () => dispatch(getForecast()),
        fetchNewHistory: () => dispatch(getHistory()),
        fetchNewJoke: () => dispatch(getJoke()),
        fetchNewFact: () => dispatch(getFact()),
        fetchNewQuote: () => dispatch(getQuote()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PortalBody);
