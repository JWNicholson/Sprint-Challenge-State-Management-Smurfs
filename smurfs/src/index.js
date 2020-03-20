import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'redux-thunk';

const createStore(applyMiddleware(thunk));

ReactDOM.render(<App />, document.getElementById("root"));
