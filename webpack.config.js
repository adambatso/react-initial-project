const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    devtool: false,
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].[hash].js"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: '/node-modules/',
                use: {
                    loader: 'babel-loader'
                }
              },       
              {
                test: /\.js$/,
                use: ["source-map-loader"],
                enforce: "pre"
              }, 
            {
                test: /\.js$/,
                exclude: '/node-modules/',
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
      },
    plugins: 
        [
            new HtmlWebpackPlugin({
                template: 'index.html'
            }),
            new CleanWebpackPlugin(),
            new webpack.SourceMapDevToolPlugin({})
        ]
    
}