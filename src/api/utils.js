import axios from 'axios';

const instance = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}`
});

const sendRequest = (url, method, data) => (
        instance.request(
            {url, method, data}
        ).then((responce) => responce.data)
)

export default sendRequest;