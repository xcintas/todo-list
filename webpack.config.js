const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: [
        'babel-polyfill',
        './src/index.js'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader'},
            { test: /\.css$/, use: ['style-loader', 'css-loader']}
        ]
    },
    resolve: {
        alias: {
            Store: path.resolve(__dirname, './src/store/'),
            Sagas: path.resolve(__dirname, './src/sagas/'),
            Actions: path.resolve(__dirname, './src/actions/'),
            Reducers: path.resolve(__dirname, './src/reducers/'),
            Components: path.resolve(__dirname, './src/components/'),
            Containers: path.resolve(__dirname, './src/containers/')
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        }),
        new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom'
        })
    ]
}