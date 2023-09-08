import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Provider } from "react-redux";
import rootReducer, { initialState } from "./reducers/rootReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers(rootReducer),
  initialState,
  composeWithDevTools(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
