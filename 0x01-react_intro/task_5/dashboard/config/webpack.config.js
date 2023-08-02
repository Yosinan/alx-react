const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    devtool: 'inline-source-map',
    plugins: [
        new HTMLWebpackPlugin({
            title: 'Holberton Dashboard',
            filename: './index.html',
        }),
    ],
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
	devServer: {
		static: path.join(__dirname, './dist'),
		open: true,
		port: 8564,
	},
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [ 'style-loader', 'css-loader' ],
            },

           {

                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                loader: 'babel-loader',
                },
            },

            {
                test: /\.(?:ico|png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                use: [
                    "file-loader",
                    {
                        loader: "image-webpack-loader",
                        options: {
                          bypassOnDebug: true,
                          disable: true,
                        },
                    }, 
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
      },
};
