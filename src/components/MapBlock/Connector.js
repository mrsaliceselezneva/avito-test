import { useYMaps } from "@pbe/react-yandex-maps";
import React from "react";
import Controller from "./Controller.js";

const Connector = (props) => {
    const { setStreet, setHouse } = props;

    const ymaps = useYMaps(["Map"]);

    return <Controller setStreet={setStreet} setHouse={setHouse} ymaps={ymaps} />;
};

export default Connector;
