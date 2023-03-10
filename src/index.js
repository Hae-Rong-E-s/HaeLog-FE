import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./redux/config/configStore";
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </Provider>
);
