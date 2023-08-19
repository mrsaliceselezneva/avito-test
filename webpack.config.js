const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const dotenv = require("dotenv").config({
    path: path.join(__dirname, ".env"),
});

const plugins = [
    new HTMLWebpackPlugin({ template: "./public/index.html" }),
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
        "process.env": JSON.stringify(process.env),
    }),
];

const npm_package = require("./package.json");

module.exports = {
    mode: "development",
    plugins,
    entry: ["@babel/polyfill", "./src/index.jsx"],
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".scss", ".d.ts"],
        alias: {
            helpers: path.resolve(__dirname, "src/helpers/"),
            components: path.resolve(__dirname, "src/components/"),
            api: path.resolve(__dirname, "src/api/"),
            pages: path.resolve(__dirname, "src/pages/"),
            baseUrl: path.resolve(__dirname, "src/"),
            store: path.resolve(__dirname, "src/redux"),
        },
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[hash].js",
    },

    devServer: {
        port: 3010,
    },

    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(jpg|jpeg|png|svg)/,
                use: ["file-loader"],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-react", "@babel/preset-env"],
                    },
                },
            },
        ],
    },
};
