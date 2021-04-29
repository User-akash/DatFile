const path = require("path");
module.exports ={
    entry: "./src/ts/index.ts",
    target: ['web', 'es5'],
    module: {
        rules:[
            {
                test:/\.tsx?$/,
                use:"ts-loader",
                include: [path.resolve(__dirname, "src/ts")]
            }
        ]
    },
    output:{
        filename:"dist.js",
        path: path.resolve(__dirname, "static/js")
    }
}