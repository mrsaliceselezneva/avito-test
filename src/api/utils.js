import axios from "axios";
import { useState, useLayoutEffect } from "react";

const instance = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}`,
});

const sendRequest = (url, method, data) =>
    instance.request({ url, method, data }).then((responce) => responce.data);

const useWindowSize = () => {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener("resize", updateSize);
        updateSize();
        return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size[0];
};

export { sendRequest, useWindowSize };
