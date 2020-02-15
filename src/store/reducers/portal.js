const initialState = {
    test: "Billy",
    apiWeather: [],
    apiCalendar: [],
    apiTwitter: [],
    apiForecast: []
};

const portalReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_TEST":
            const newTest = action.test;
            return { ...state, test: newTest };

        case "GET_WEATHER":
            return { ...state, apiWeather: action.newWeather };

        case "GET_CALENDAR":
            return { ...state, apiCalendar: action.newCalendar };

        case "GET_TWITTER":
            const tweetStringData = action.newTwitter.reduce((string, item) => {
                return string + item.summary + " :: ";
            }, " ");
            if (tweetStringData !== action.apiTwitter) {
                return { ...state, apiTwitter: tweetStringData };
            }
            break;

        case "GET_FORECAST":
            return { ...state, apiForecast: action.newForecast };

        default:
            return state;
    }
};

export default portalReducer;
