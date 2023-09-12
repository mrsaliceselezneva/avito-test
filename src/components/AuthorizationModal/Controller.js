import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import React from "react";
import { setClearStatus } from "store/slices/menuSlice";
import { setDeleteProfile } from "store/slices/profileSlice";
import { setClearCategory } from "store/slices/sidebarSlice";
import View from "./View.jsx";

const Controller = (props) => {
    const { show, isLogout, onClose, setIsLogout, dispatch, profile, isEmpty, setUser } = props;

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log("Login Failed:", error),
    });

    const logOut = async () => {
        googleLogout();
        await dispatch(setDeleteProfile());
        await dispatch(setClearCategory());
        await dispatch(setClearStatus());
        await onClose();
        await setIsLogout(false);
        await setUser([]);
    };

    const logIn = () => {
        login();
        onClose();
        setIsLogout(false);
    };

    return (
        <View
            show={show}
            isLogout={isLogout}
            onClose={onClose}
            profile={profile}
            logIn={logIn}
            logOut={logOut}
            isEmptyProfile={isEmpty(profile)}
        />
    );
};

export default Controller;
