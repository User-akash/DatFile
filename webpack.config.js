const path = require("path");
const miniCssExtrac = require("mini-css-extract-plugin");
// const cssMinimizerPuligs = require("css-minimizer-webpack-plugin")
module.exports ={
    entry: "./src/ts/index.ts",
    target: 'es5',
    devtool: "source-map",
    mode:"development",
    plugins:[
        new miniCssExtrac({
        filename: '[name].css'
        })
    ],
    module: {
        rules:[
            {
                test:/\.ts$/,
                use:"ts-loader",
                exclude: /node_modules/
            },
            {
                test:/\.s[ac]ss$/,
                use:[miniCssExtrac.loader, "css-loader", "sass-loader"],
            }
        ]
    },
    resolve:{
        extensions: [".tsx", ".ts", ".js"]
    },
    output:{
        filename:"dist.js",
        path: path.resolve(__dirname, "static/js")
    }
}