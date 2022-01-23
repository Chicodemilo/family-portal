export const CHANGE_TEST = "CHANGE_TEST";
export const GET_WEATHER = "GET_WEATHER";
export const GET_CALENDAR = "GET_CALENDAR";
export const GET_TWITTER = "GET_TWITTER";
export const GET_FORECAST = "GET_FORECAST";
export const GET_JOKE = "GET_JOKE";
export const GET_HISTORY = "GET_HISTORY";
export const GET_FACT = "GET_FACT";
export const GET_QUOTE = "GET_QUOTE";

export const changeTest = (newTest) => {
    return async (dispatch) => {
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
    return async (dispatch) => {
        try {
            fetch("http://192.168.1.15/family-portal-api/calendar.php", {
                method: "get",
                headers: {
                    Accept: "application/json",
                },
            })
                .then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.text();
                    }
                })
                .then((text) => {
                    let calItems = null;
                    try {
                        calItems = JSON.parse(text);
                        dispatch({ type: GET_CALENDAR, newCalendar: calItems });
                    } catch (e) {
                        let badNetwork = ["badNetwork"];
                        dispatch({ type: GET_CALENDAR, newCalendar: badNetwork });
                    }
                })
                .catch(() => {
                    let badNetwork = ["badNetwork"];
                    dispatch({ type: GET_CALENDAR, newCalendar: badNetwork });
                });
        } catch (e) {
            console.log(e);
        }
    };
};

export const getForecast = () => {
    return async (dispatch) => {
        try {
            fetch("http://192.168.1.15/family-portal-api/forecast.php", {
                method: "get",
                headers: {
                    Accept: "application/json",
                },
            })
                .then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.text();
                    }
                    return "forecast down";
                })
                .then((text) => {
                    let forecastItems = null;
                    try {
                        forecastItems = JSON.parse(text);
                    } catch (e) {
                        forecastItems = [];
                    }
                    dispatch({ type: GET_FORECAST, newForecast: forecastItems });
                })
                .catch(() => {
                    let badNetwork = ["badNetwork"];
                    dispatch({ type: GET_FORECAST, newForecast: badNetwork });
                });
        } catch (e) {
            console.log(e);
        }
    };
};

export const getTwitter = () => {
    return async (dispatch) => {
        try {
            fetch("http://192.168.1.15/family-portal-api/getStatus.php", {
                method: "get",
                headers: {
                    Accept: "application/json",
                },
            })
                .then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.text();
                    }
                })
                .then((text) => {
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
    return async (dispatch) => {
        try {
            fetch("http://192.168.1.15/family-portal-api/history.php", {
                method: "get",
                headers: {
                    Accept: "application/json",
                },
            })
                .then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.text();
                    }
                })
                .then((text) => {
                    let histItems = null;
                    try {
                        histItems = JSON.parse(text);
                        dispatch({ type: GET_HISTORY, newHistory: histItems });
                    } catch (e) {
                        histItems = [];
                    }
                });
        } catch (e) {
            console.log(e);
        }
    };
};

export const getWeather = () => {
    //test
    return async (dispatch) => {
        try {
            fetch("http://192.168.1.15/family-portal-api/weather.php", {
                method: "get",
                headers: {
                    Accept: "application/json",
                },
            })
                .then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.text();
                    }
                    return "weather down";
                })
                .then((text) => {
                    let currWeather = null;
                    try {
                        currWeather = JSON.parse(text);
                    } catch (e) {
                        currWeather = [];
                    }
                    dispatch({ type: GET_WEATHER, newWeather: currWeather });
                })
                .catch(() => {
                    let badNetwork = ["badNetwork"];
                    dispatch({ type: GET_WEATHER, newWeather: badNetwork });
                });
        } catch (e) {
            console.log(e);
        }
    };
};

export const getJoke = () => {
    return async (dispatch) => {
        try {
            fetch("http://192.168.1.15/family-portal-api/joke.php", {
                method: "get",
                headers: {
                    Accept: "application/json",
                },
            })
                .then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.text();
                    }
                    return "joke down";
                })
                .then((text) => {
                    let currJoke = null;
                    try {
                        currJoke = JSON.parse(text);
                    } catch (e) {
                        currJoke = [];
                    }
                    dispatch({ type: GET_JOKE, newJoke: currJoke });
                })
                .catch(() => {
                    let badNetwork = ["badNetwork"];
                    dispatch({ type: GET_JOKE, newJoke: badNetwork });
                });
        } catch (e) {
            console.log(e);
        }
    };
};

export const getFact = () => {
    return async (dispatch) => {
        try {
            //here
            fetch("http://192.168.1.15/family-portal-api/fact.php", {
                method: "get",
                headers: {
                    Accept: "application/json",
                },
            })
                .then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.text();
                    }
                    return "fact down";
                })
                .then((text) => {
                    let currFact = null;
                    try {
                        currFact = JSON.parse(text);
                    } catch (e) {
                        currFact = [];
                    }
                    dispatch({ type: GET_FACT, newFact: currFact });
                })
                .catch(() => {
                    let badNetwork = ["badNetwork"];
                    dispatch({ type: GET_FACT, newFact: badNetwork });
                });
        } catch (e) {
            console.log(e);
        }
    };
};

export const getQuote = () => {
    return async (dispatch) => {
        try {
            fetch("http://192.168.1.15/family-portal-api/quote.php", {
                method: "get",
                headers: {
                    Accept: "application/json",
                },
            })
                .then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.text();
                    }
                    return "quote down";
                })
                .then((text) => {
                    let currQuote = null;
                    try {
                        currQuote = JSON.parse(text);
                    } catch (e) {
                        currQuote = [];
                    }
                    dispatch({ type: GET_QUOTE, newQuote: currQuote });
                })
                .catch(() => {
                    let badNetwork = ["badNetwork"];
                    dispatch({ type: GET_QUOTE, newQuote: badNetwork });
                });
        } catch (e) {
            console.log(e);
        }
    };
};
