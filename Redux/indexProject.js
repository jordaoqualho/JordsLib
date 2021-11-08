import GlobalStyle from "globalStyle";
import App from "pages/App";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import data from "./data";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={data}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
