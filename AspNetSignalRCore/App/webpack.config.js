const path = require('path');

module.exports = {
    devtool: "sourcemap",
    entry: {
        app : './app.ts'
    },
    output: {
        path: path.resolve(__dirname, '../wwwroot'),
        publicPath: "/",
        filename: "app.bundle.js"
    },
    module: {
        loaders: [
            {
                loader: 'ts-loader',
                test: /\.ts$/,  
                exclude:  /node_modules\/(?!.*@aspnet\/signalr-client).*$/                
            }
        ]
    }
}