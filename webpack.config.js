/* eslint-disable no-undef */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'todo list',
            filename: 'index.html',
            inject: 'head',
            scriptLoading: 'defer',
            template: './src/index.html'
        })
    ],
    mode: 'development',
    
    devServer: {
        static: path.join(__dirname, 'dist'),
        port: 8080,
        open: true,
        hot: true, 
    },

    devtool: 'inline-source-map',
    module: {
        rules: [{
            test: /\.css$/i,
            use: ["style-loader", "css-loader"]
        }]
    }

};