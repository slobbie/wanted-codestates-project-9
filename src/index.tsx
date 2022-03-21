import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import App from "./App";
import rootReducer from "./redux/reducers";

const store = createStore(rootReducer, composeWithDevTools()); // 스토어 생성

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
