import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";

import rootReducer from "./Reducer/rootReducer";
//redux middleware
const middlewares= [ thunk];
if(process.env.NODE_ENV === "development"){     //NODE_ENV is inbuilt in react
    const {logger} = require("redux-logger");
    middlewares.push(logger);
}
const store = createStore(rootReducer , {} , applyMiddleware(...middlewares));
export default store;