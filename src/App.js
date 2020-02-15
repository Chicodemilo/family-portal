import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

import PortalBody from "../src/containers/portalBody";

export default class App extends Component {
    store = configureStore();
    render() {
        return (
            <html lang="en">
                <head></head>
                <body>
                    <Provider store={this.store}>
                        <PortalBody />
                    </Provider>
                </body>
            </html>
        );
    }
}

// export default App;
