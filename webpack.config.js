const path = require("path");
module.exports ={
    entry: "./src/ts/index.ts",
    target: 'es5',
    devtool: "source-map",
    mode:"development",
    module: {
        rules:[
            {
                test:/\.ts$/,
                use:"ts-loader",
                exclude: /node_modules/
                
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