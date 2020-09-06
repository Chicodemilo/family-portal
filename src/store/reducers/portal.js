const initialState = {
    test: "Billy",
    apiWeather: [],
    apiCalendar: [],
    apiTwitter: [],
    apiForecast: [],
    apiTodayInHistory: "",
    apiJoke: "",
    apiFact: "",
    apiQuote: "",
    funnyThing:
        "My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.",
};

const portalReducer = (state = initialState, action) => {
    //test
    switch (action.type) {
        case "CHANGE_TEST":
            const newTest = action.test;
            return { ...state, test: newTest };

        case "GET_WEATHER":
            return { ...state, apiWeather: action.newWeather };

        case "GET_CALENDAR":
            return { ...state, apiCalendar: action.newCalendar };

        // case "GET_TWITTER":
        //     const tweetStringData = action.newTwitter.reduce((string, item) => {
        //         let cleanSummary = item.summary.replace("#QZZXXWEE42", " ");
        //         return string + " ›››› " + item.date + ":" + cleanSummary + " ";
        //     }, " ");
        //     if (tweetStringData !== action.apiTwitter) {
        //         return { ...state, apiTwitter: tweetStringData };
        //     }
        //     break;

        case "GET_TWITTER":
            // const tweetStringData = action.newTwitter.reduce((string, item) => {
            //     let cleanSummary = item.summary.replace("#QZZXXWEE42", " ");
            //     return string + " ›››› " + item.date + ":" + cleanSummary + " ";
            // }, " ");
            // if (tweetStringData !== action.apiTwitter) {
            //
            // }
            return { ...state, apiTwitter: action.newTwitter };

        case "GET_FORECAST":
            return { ...state, apiForecast: action.newForecast };

        case "GET_HISTORY":
            return { ...state, apiTodayInHistory: action.newHistory };

        case "GET_JOKE":
            return { ...state, apiJoke: action.newJoke.joke };

        case "GET_FACT":
            return { ...state, apiFact: action.newFact.fact };

        case "GET_QUOTE":
            let thisQuote = action.newQuote.quote + " - " + action.newQuote.author;
            return { ...state, apiQuote: thisQuote };

        default:
            return state;
    }
};

export default portalReducer;
