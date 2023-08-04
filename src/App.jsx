import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./pages/Main";

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
