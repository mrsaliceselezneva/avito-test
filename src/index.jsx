import { GoogleOAuthProvider } from "@react-oauth/google";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";

import { persistor, store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

const google = `${process.env.REACT_APP_GOOGLE_CLIENT_ID}`;

root.render(
    <GoogleOAuthProvider clientId={google}>
        <React.StrictMode>
            <Provider store={store}>
                <BrowserRouter>
                    <PersistGate persistor={persistor}>
                        <App />
                    </PersistGate>
                </BrowserRouter>
            </Provider>
        </React.StrictMode>
    </GoogleOAuthProvider>,
);
