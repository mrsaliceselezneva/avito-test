/* eslint-disable func-style */
// eslint-disable-next-line no-undef
const http = require("http");

const host = "localhost";
const port = 8000;

const toys = JSON.stringify([
    { title: "leog", price: 100 },
    { title: "leog", price: 100 },
    { title: "leog", price: 100 },
    { title: "leog", price: 100 },
    { title: "leog", price: 100 },
    { title: "leog", price: 100 },
]);

const requestListener = function (req, res) {
    res.setHeader("Content-Type", "application/json");
    switch (req.url) {
        case "/toys":
            res.writeHead(200);
            res.end(toys);
            break;
        default:
            res.writeHead(404);
            res.end(JSON.stringify({ error: "Resource not found" }));
    }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
