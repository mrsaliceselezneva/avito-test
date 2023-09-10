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

root.render(
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
        <React.StrictMode>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </PersistGate>
            </Provider>
        </React.StrictMode>
    </GoogleOAuthProvider>,
);
