import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //dat browserrouter de su dung   react router 
    <BrowserRouter>
    {/* Boc app vao redux provider de su dung redux store */}
        <Provider store={store}>
          <App />
        </Provider>
    </BrowserRouter>
);
