import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import React from "react";
import { setClearStatus } from "store/slices/menuSlice";
import { setDeleteProfile } from "store/slices/profileSlice";
import { setClearCategory } from "store/slices/sidebarSlice";
import View from "./View.jsx";

const Controller = (props) => {
    const {
        show,
        isLogout,
        onClose,
        setShowAuthorization,
        setIsLogout,
        dispatch,
        profile,
        isEmpty,
        setUser,
        user,
    } = props;

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log("Login Failed:", error),
    });

    const logOut = () => {
        googleLogout();
        dispatch(setDeleteProfile());
        dispatch(setClearCategory());
        dispatch(setClearStatus());
        setShowAuthorization(false);
        setIsLogout(false);
        setUser([]);
    };

    const logIn = () => {
        login();
        setShowAuthorization(false);
        setIsLogout(false);
    };

    return (
        <View
            show={show}
            isLogout={isLogout}
            onClose={onClose}
            setShowAuthorization={setShowAuthorization}
            setIsLogout={setIsLogout}
            dispatch={dispatch}
            profile={profile}
            user={user}
            logIn={logIn}
            logOut={logOut}
            isEmpty={isEmpty}
        />
    );
};

export default Controller;
