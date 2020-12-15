const path = require('path')


module.exports = {

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000
    },
    entry: {
        "app": "src/app.js"
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "[name].js",
        sourceMapFilename: "[name].js.map"
    },
    devtool: "source-map",
    module: {
        rules: [
            { test: /\.css$/i, use: ['style-loader', 'css-loader'], },
            { test: /\.js$/, exclude: /node_modules/, use: { loader: 'babel-loader' } },
            { test: /\.s[a|c]ss$/, use: [{ loader: "style-loader" }, { loader: "css-loader" }, { loader: "sass-loader" }] },
            { test: /\.(png|gif|jpg|cur)$/i, loader: 'url-loader', options: { limit: 8192 } },
            { test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/i, loader: 'url-loader', options: { limit: 10000, mimetype: 'application/font-woff2' } },
            { test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/i, loader: 'url-loader', options: { limit: 10000, mimetype: 'application/font-woff' } },
        ]
    }
}