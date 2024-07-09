import React from "react";
import { createRoot } from "react-dom/client";

import App from "./components/App/App";

import "./assets/styles/index.scss";
import { Provider } from "react-redux";
import { store } from "./components/App/store";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);
