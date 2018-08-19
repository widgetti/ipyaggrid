const path = require('path');
// const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const extractCSS = new ExtractTextPlugin('style/[name].css');
const extractLESS = new ExtractTextPlugin('style/[name]-less.css');
const extractSASS = new ExtractTextPlugin('style/[name].scss');

module.exports = {
    target: 'web',
    entry: {
        app: './src/index2.js',
        vendor: ['ag-grid', 'lodash'],
    },
    output: {
        path: path.resolve(__dirname, './dist/assets'),
        publicPath: '/assets/',
        filename: '[name].js', // [hash].[name]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                // use: ['style-loader', 'css-loader'],
                use: extractCSS.extract(['css-loader']),
            },
            {
                test: /\.less$/,
                use: extractLESS.extract(['style-loader', 'css-loader', 'less-loader']),
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.svg$/,
                use: [
                    { loader: 'url-loader' },
                    {
                        loader: 'svg-colorize-loader',
                        options: {
                            color1: '#000000',
                            color2: '#FFFFFF',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        extractCSS,
        extractLESS,
        new HtmlWebpackPlugin({
            inject: true,
            hash: false,
            template: './src/index.html',
            filename: path.resolve(__dirname, './dist/index.html'),
        }),
    ],
    optimization: {
        minimize: true,
    },
};

if (process.env.NODE_ENV === 'development') {
    // console.log('development mode');
    module.exports.devtool = 'eval-source-map';
    module.exports.plugins = (module.exports.plugins || []).concat([]);
}

if (process.env.NODE_ENV === 'production') {
    // console.log('production mode');
    module.exports.devtool = 'source-map';
    module.exports.plugins = (module.exports.plugins || []).concat([]);
}
