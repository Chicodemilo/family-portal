import React, { Component } from "react";
import { connect } from "react-redux";
import { changeTest, getWeather, getCalendar, getTwitter, getForecast, getHistory, getJoke, getFact, getQuote } from "../store/actions/portal";
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
        newFunnyThing: ""
    };

    componentDidMount() {
        this.handleGetCalendar();
        this.handleGetTwitter();
        this.handleTimeChange();
        this.handleGetWeather();
        this.handleGetForecast();
        this.showFunnyThing();
        this.props.fetchNewHistory();
        this.props.fetchNewJoke();
        this.props.fetchNewFact();
        this.props.fetchNewQuote();

        setInterval(this.showFunnyThing, 540000);
        // setInterval(this.showFunnyThing, 10000);
        setInterval(this.handleTimeChange, 1000);
        setInterval(this.handleGetCalendar, 10000);
        setInterval(this.handleGetTwitter, 10000);
        setInterval(this.handleGetWeather, 300000);
        setInterval(this.handleGetForecast, 300000);
    }

    showFunnyThing = () => {
        let picker = Math.round(Math.random() * 3);

        // picker = 0;
        // console.log(picker);
        switch (picker) {
            case 0:
                this.props.fetchNewHistory().then(() => {
                    let newKey = Math.random();
                    if (this.props.historyItem !== "") {
                        this.setState({
                            newFunnyThing: <FunnyThing key={newKey} funnyItem={this.props.historyItem} />
                        });
                    }
                });
                break;
            case 1:
                this.props.fetchNewJoke().then(() => {
                    let newKey = Math.random();
                    if (this.props.historyItem !== "") {
                        this.setState({
                            newFunnyThing: <FunnyThing key={newKey} funnyItem={this.props.jokeItem} />
                        });
                    }
                });
                break;
            case 2:
                this.props.fetchNewFact().then(() => {
                    let newKey = Math.random();
                    if (this.props.historyItem !== "") {
                        this.setState({
                            newFunnyThing: <FunnyThing key={newKey} funnyItem={this.props.factItem} />
                        });
                    }
                });
                break;
            case 3:
                this.props.fetchNewQuote().then(() => {
                    let newKey = Math.random();
                    if (this.props.historyItem !== "") {
                        this.setState({
                            newFunnyThing: <FunnyThing key={newKey} funnyItem={this.props.quoteItem} />
                        });
                    }
                });
                break;
            default:
                break;
        }
    };

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
                {this.state.newFunnyThing}
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
        apiForecast: state.portalData.apiForecast,
        funnyThing: state.portalData.funnyThing,
        historyItem: state.portalData.apiTodayInHistory,
        jokeItem: state.portalData.apiJoke,
        factItem: state.portalData.apiFact,
        quoteItem: state.portalData.apiQuote
    };
};

const mapDispatchToProps = dispatch => {
    return {
        testOnChange: () => dispatch(changeTest()),
        fetchNewWeather: () => dispatch(getWeather()),
        fetchNewCalendar: () => dispatch(getCalendar()),
        fetchNewTwitter: () => dispatch(getTwitter()),
        fetchNewForecast: () => dispatch(getForecast()),
        fetchNewHistory: () => dispatch(getHistory()),
        fetchNewJoke: () => dispatch(getJoke()),
        fetchNewFact: () => dispatch(getFact()),
        fetchNewQuote: () => dispatch(getQuote())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PortalBody);
