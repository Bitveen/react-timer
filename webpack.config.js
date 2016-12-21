module.exports = {
    entry: __dirname + "/src/index.jsx",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },
    resolve: {
        root: __dirname + "/src",
        alias: {
            Clock: "components/Clock.jsx",
            CountdownForm: "components/CountdownForm.jsx",
            Countdown: "components/Countdown.jsx",
            Controls: "components/Controls.jsx"
        },
        extensions: ["", ".js", ".jsx"]
    },
    module: {
        loaders: [
            {
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-0"]
                },
                test: /.\jsx?$/,
                include: __dirname + "/src"
            }
        ]
    }
};
