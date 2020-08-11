const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].[hash].js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: '/node-modules/',
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: 
        [
            new HtmlWebpackPlugin({
                template: 'index.html'
            })
        ]
    
}