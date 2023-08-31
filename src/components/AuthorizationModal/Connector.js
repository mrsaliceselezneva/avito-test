import { isEmpty } from "api/utils";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCreateProfile } from "store/slices/profileSlice";
import Controller from "./Controller.js";

const Connector = (props) => {
    const { show, isLogout, onClose, setIsLogout } = props;

    const dispatch = useDispatch();
    const { profile } = useSelector((state) => state.profileReducer);

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

    return (
        <Controller
            show={show}
            isLogout={isLogout}
            onClose={onClose}
            setIsLogout={setIsLogout}
            dispatch={dispatch}
            profile={profile}
            isEmpty={isEmpty}
            setUser={setUser}
            user={user}
        />
    );
};

export default Connector;
