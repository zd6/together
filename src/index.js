import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import "./app/layout/style.css";
import App from "./app/layout/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "./app/store/configureStore";

// Enable hot dynamic update to the page

const store = configureStore();

console.log(store.getState())

const rootElement = document.getElementById("root");

function render() {
  ReactDOM.render(
    <Provider store = {store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    rootElement
  );
}

if (module.hot) {
  module.hot.accept("./app/layout/App", function () {
    setTimeout(render);
  });
}

render();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
