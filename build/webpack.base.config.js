const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: devMode ? 'development' : 'production',
    output: {
        publicPath: '/dist/', // 文件路径
        path: path.resolve(__dirname, '../dist'), // 打包路径
        filename: '[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 4096
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            '@': path.resolve(__dirname, '../src'),
            'vue': 'vue/dist/vue.esm.js'
        }
    }
};
