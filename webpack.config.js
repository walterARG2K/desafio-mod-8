const liveServer = require("live-server");
const path = require("path");
const mode = "production";

module.exports = {
    watch: true,
    mode: mode,
    entry: "./src/index.tsx",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                        },
                    },
                ],
            },
            {
                test: /\.svg$/,
                use: ["svg-url-loader"],
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".js", ".ts", "png", "svg"],
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
};
