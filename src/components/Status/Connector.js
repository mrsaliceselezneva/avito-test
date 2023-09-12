import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectStatus, setLinkStatus, setClearStatus } from "store/slices/menuSlice";
import View from "./View.jsx";

const Connector = (props) => {
    const { status } = props;

    const { selectStatus } = useSelector((state) => state.menuReducer);
    const { profile } = useSelector((state) => state.profileReducer);
    const dispatch = useDispatch();

    const ifStatus = selectStatus === status.title;

    const onClick = async () => {
        if (ifStatus) {
            await dispatch(setClearStatus());
        } else {
            await dispatch(setSelectStatus(status.title));
            await dispatch(setLinkStatus(`email=${profile.email}&status=${status.type}`));
        }
    };

    return <View status={status} ifStatus={ifStatus} onClick={onClick} />;
};

export default Connector;
