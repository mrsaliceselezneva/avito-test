/* eslint-disable func-style */
// eslint-disable-next-line no-undef
const http = require("http");

const host = "localhost";
const port = 8000;

const categories = JSON.stringify([
    { title: "все" },
    { title: "техника" },
    { title: "игрушки" },
    { title: "для животных" },
    { title: "одежда" },
    { title: "посуда" },
]);

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
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");
    res.setHeader("Access-Control-Max-Age", 2592000);
    switch (req.url) {
        case "/toys":
            res.writeHead(200);
            res.end(toys);
            break;
        case "/categories":
            res.writeHead(200);
            res.end(categories);
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
