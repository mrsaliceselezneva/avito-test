import { GoogleLogin } from "@react-oauth/google";
import { gapi } from "gapi-script";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./pages/Main";

const App = () => {
    const initializeGapi = () => {
        gapi.client.init({
            clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
            scope: "",
        });
    };

    useEffect(() => {
        // load and init google api scripts
        gapi.load("client:auth2", initializeGapi);
    });

    const responseMessage = (response) => {
        console.log(response);
    };
    const errorMessage = (error) => {
        console.log(error);
    };

    return (
        <div>
            <Header />
            <Routes>
                <Route exact path='/*' element={<Main />} />
            </Routes>
            <React.Fragment>
                <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
            </React.Fragment>
            <Footer />
        </div>
    );
};

export default App;
