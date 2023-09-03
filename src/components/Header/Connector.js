import { isEmpty } from "api/utils";
import React from "react";
import { useSelector } from "react-redux";
import Controller from "./Controller.js";
const Connector = () => {
    const { profile } = useSelector((state) => state.profileReducer);

    const picture = profile.picture;

    const isEmptyProfile = isEmpty(profile);

    return <Controller picture={picture} isEmptyProfile={isEmptyProfile} />;
};

export default Connector;
