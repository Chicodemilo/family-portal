export const CHANGE_TEST = "CHANGE_TEST";
export const GET_WEATHER = "GET_WEATHER";
export const GET_CALENDAR = "GET_CALENDAR";
export const GET_TWITTER = "GET_TWITTER";
export const GET_FORECAST = "GET_FORECAST";
export const GET_JOKE = "GET_JOKE";
export const GET_HISTORY = "GET_HISTORY";
export const GET_FACT = "GET_FACT";
export const GET_QUOTE = "GET_QUOTE";

export const changeTest = newTest => {
    return async dispatch => {
        const storageTest = await getTestFromAPI();
        await dispatch({ type: CHANGE_TEST, test: storageTest });
    };
};

const getTestFromAPI = async () => {
    try {
        //get data from API1
        if (1 === 1) {
            return "Fred";
        }
    } catch (e) {
        console.log(e);
        return false;
    }
};

export const getCalendar = () => {
    return async dispatch => {
        try {
            fetch("http://localhost:3003/calendar.php", {
                method: "get",
                headers: {
                    Accept: "application/json"
                }
            })
                .then(response => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.text();
                    }
                    throw new Error(response);
                })
                .then(text => {
                    let calItems = null;
                    try {
                        calItems = JSON.parse(text);
                    } catch (e) {
                        calItems = [];
                    }
                    dispatch({ type: GET_CALENDAR, newCalendar: calItems });
                });
        } catch (e) {
            console.log(e);
        }
    };
};

export const getForecast = () => {
    return async dispatch => {
        try {
            fetch("http://localhost:3003/forecast.php", {
                method: "get",
                headers: {
                    Accept: "application/json"
                }
            })
                .then(response => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.text();
                    }
                    throw new Error(response);
                })
                .then(text => {
                    let forecastItems = null;
                    try {
                        forecastItems = JSON.parse(text);
                    } catch (e) {
                        forecastItems = [];
                    }
                    dispatch({ type: GET_FORECAST, newForecast: forecastItems });
                });
        } catch (e) {
            console.log(e);
        }
    };
};

export const getTwitter = () => {
    return async dispatch => {
        try {
            fetch("http://localhost:3003/twitterTestTwo.php", {
                method: "get",
                headers: {
                    Accept: "application/json"
                }
            })
                .then(response => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.text();
                    }
                })
                .then(text => {
                    let twItems = null;
                    try {
                        twItems = JSON.parse(text);
                        dispatch({ type: GET_TWITTER, newTwitter: twItems });
                    } catch (e) {
                        twItems = [];
                    }
                });
        } catch (e) {
            console.log(e);
        }
    };
};

export const getHistory = () => {
    return async dispatch => {
        try {
            fetch("http://localhost:3003/twitterTest.php", {
                method: "get",
                headers: {
                    Accept: "application/json"
                }
            })
                .then(response => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.text();
                    }
                })
                .then(text => {
                    let twItems = null;
                    try {
                        twItems = JSON.parse(text);
                        dispatch({ type: GET_HISTORY, newHistory: twItems });
                    } catch (e) {
                        twItems = [];
                    }
                });
        } catch (e) {
            console.log(e);
        }
    };
};

export const getWeather = () => {
    return async dispatch => {
        try {
            fetch("http://localhost:3003/weather.php", {
                method: "get",
                headers: {
                    Accept: "application/json"
                }
            })
                .then(response => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.text();
                    }
                    throw new Error(response);
                })
                .then(text => {
                    let currWeather = null;
                    try {
                        currWeather = JSON.parse(text);
                    } catch (e) {
                        currWeather = [];
                    }
                    dispatch({ type: GET_WEATHER, newWeather: currWeather });
                });
        } catch (e) {
            console.log(e);
        }
    };
};

export const getJoke = () => {
    return async dispatch => {
        try {
            fetch("http://localhost:3003/joke.php", {
                method: "get",
                headers: {
                    Accept: "application/json"
                }
            })
                .then(response => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.text();
                    }
                    throw new Error(response);
                })
                .then(text => {
                    let currJoke = null;
                    try {
                        currJoke = JSON.parse(text);
                    } catch (e) {
                        currJoke = [];
                    }
                    dispatch({ type: GET_JOKE, newJoke: currJoke });
                });
        } catch (e) {
            console.log(e);
        }
    };
};

export const getFact = () => {
    return async dispatch => {
        try {
            fetch("http://localhost:3003/fact.php", {
                method: "get",
                headers: {
                    Accept: "application/json"
                }
            })
                .then(response => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.text();
                    }
                    throw new Error(response);
                })
                .then(text => {
                    let currFact = null;
                    try {
                        currFact = JSON.parse(text);
                    } catch (e) {
                        currFact = [];
                    }
                    dispatch({ type: GET_FACT, newFact: currFact });
                });
        } catch (e) {
            console.log(e);
        }
    };
};

export const getQuote = () => {
    return async dispatch => {
        try {
            fetch("http://localhost:3003/quote.php", {
                method: "get",
                headers: {
                    Accept: "application/json"
                }
            })
                .then(response => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.text();
                    }
                    throw new Error(response);
                })
                .then(text => {
                    let currQuote = null;
                    try {
                        currQuote = JSON.parse(text);
                    } catch (e) {
                        currQuote = [];
                    }
                    dispatch({ type: GET_QUOTE, newQuote: currQuote });
                });
        } catch (e) {
            console.log(e);
        }
    };
};
