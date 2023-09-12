import React from "react";
import Controller from "./Controller.js";

const Connector = () => {
    const errorColor = "#ff6e4a";
    const errorBorderColor = { borderColor: errorColor };

    return <Controller errorBorderColor={errorBorderColor} />;
};

export default Connector;
