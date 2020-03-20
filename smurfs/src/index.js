import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'redux-redux';
import thunk from 'react-thunk';
import smurfsReducer from './reducers/smurfsReducers';



ReactDOM.render(<App />, document.getElementById("root"));
