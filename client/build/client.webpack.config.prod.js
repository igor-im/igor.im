var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var copyPlugin = new CopyWebpackPlugin([{from: './assets'}])

var definePlugin = new webpack.DefinePlugin({
    __DEV__: true
});

module.exports = {
    name: 'client',
    target: 'web',
    context: __dirname + "/../src",
    entry: {
        javascript: "./app.js",
        html: "./index.html"
    },
    output: {
        path: __dirname + "/../dist",
        filename: "app.js",
        publicPath: ""
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query:
                {
                    "presets": ["es2015", "stage-0", "react"]
                }
            },
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]",
            },
            {
                test: /\.otf$/,
                loader: "file?name=[name].[ext]",
            },
            {
                test: /\.scss$/,
                loader: "style!css!sass",
            },
            {
                test: /\.(png|jpg)$/,
                loader: "file?name=[name].[ext]",
            },
        ]
    },
    plugins: [definePlugin, copyPlugin]
}
