const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.base.config.js');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');

module.exports = merge(baseConfig, {
    entry: './src/entry-server.js',

    // 这允许 webpack 以 Node 适用方式(Node-appropriate fashion)处理动态导入(dynamic import)，
    // 并且还会在编译 Vue 组件时，
    // 告知 `vue-loader` 输送面向服务器代码(server-oriented code)。
    target: 'node',

    // 对 bundle renderer 提供 source map 支持
    devtool: 'source-map',

    // 此处告知 server bundle 使用 Node 风格导出模块(Node-style exports)
    output: {
        libraryTarget: 'commonjs2'
    },

    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },

    externals: nodeExternals({
        whitelist: /\.css$/
    }),

    plugins: [
        // 将服务器的整个输出构建为单个 JSON 文件, 默认文件名为 `vue-ssr-server-bundle.json`
        new VueSSRServerPlugin(),
    ],
});
