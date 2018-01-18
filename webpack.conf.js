"use strict";
var path = require('path');
var webpack = require('webpack');
var loaders = require('./webpack.loaders.conf');
var DashboardPlugin = require('webpack-dashboard/plugin');

const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || "3008";

module.exports = {
    entry: [
        './src/index.js',
    ],
    devtool: 'source-map',
    output: {
        publicPath: '/',
        path: path.join(__dirname, 'dist'),
        filename: 'index.js',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: [".js", ".json"]
    },
    module: {
        loaders: loaders
    },
    devServer: {
        contentBase: "./dist",
        // do not print bundle build stats
        noInfo: false,
        // enable HMR
        hot: true,
        // embed the webpack-dev-server runtime into the bundle
        inline: true,
        // serve index.html in place of 404 responses to allow HTML5 history
        historyApiFallback: true,
        port: PORT,
        host: HOST
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new DashboardPlugin()
    ]
};
