import { isEmpty } from "api/utils";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Controller from "./Controller.js";

const Connector = (props) => {
    const { show, isLogout, onClose, setShowAuthorization, setIsLogout } = props;

    const dispatch = useDispatch();
    const { profile } = useSelector((state) => state.profileReducer);

    return (
        <Controller
            show={show}
            isLogout={isLogout}
            onClose={onClose}
            setShowAuthorization={setShowAuthorization}
            setIsLogout={setIsLogout}
            dispatch={dispatch}
            profile={profile}
            isEmpty={isEmpty}
        />
    );
};

export default Connector;
