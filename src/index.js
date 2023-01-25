import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import Store from './redux/Store'
ReactDOM.createRoot(document.querySelector("#root")).render(
  <Provider store={Store} >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
