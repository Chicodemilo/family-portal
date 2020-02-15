import { createStore, combineReducers, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import portalReducer from "./reducers/portal";

const rootReducer = combineReducers({ portalData: portalReducer });

const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(reduxThunk));
};

export default configureStore;
