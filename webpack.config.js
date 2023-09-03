const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
mode: 'development',
entry: path.resolve(__dirname, "./src/index.jsx"),
output: {
path: path.resolve(__dirname, 'dist'),
filename: 'main.bundle.js'
},
module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        },
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
    ]
},
resolve: {
    extensions: [".js", ".jsx", ".json"],
},
devtool: "eval-cheap-module-source-map",
devServer: {
    static: {
        directory: path.join(__dirname, 'public'),
      },
    compress: true,
    port: 9000,
    open: true,
    hot: true,
    historyApiFallback: true
},
plugins: [
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({ title: "MerhabaApp", template: path.resolve(__dirname, './src/index.html') })
],}