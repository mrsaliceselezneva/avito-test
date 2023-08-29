import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { setClearStatus } from "store/slices/menuSlice";
import { setCreateProfile, setDeleteProfile } from "store/slices/profileSlice";
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
    } = props;

    const [user, setUser] = useState([]);

    useEffect(() => {
        if (isEmpty(profile) && !isEmpty(user)) {
            axios
                .get(
                    `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
                    {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: "application/json",
                        },
                    },
                )
                .then((result) => {
                    dispatch(setCreateProfile(result.data));
                })
                .catch((error) => console.log(error));
        }
    }, [dispatch, profile, user]);

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
