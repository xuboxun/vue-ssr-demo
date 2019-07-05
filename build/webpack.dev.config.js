const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.base.config.js');

module.exports = merge(base, {
    mode: 'development',
    devtool: 'source-map',
    output: {
        filename: '[name].bundle.[hash].js',
        chunkFilename: '[name].chunk.[hash].js',
    },
    devServer: {
        host: 'localhost',
        port: 9001,
        proxy: {
            '/api': {
                target: 'https://www.xuboxun.site',
                changeOrigin: true
            }
        },
        hot: true,
        inline: true,
        historyApiFallback: true,
        open: false,
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
});
