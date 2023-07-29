import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route exact path='/*' element={<Main />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
