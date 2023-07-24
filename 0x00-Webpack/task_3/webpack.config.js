const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            title: 'Holberton Dashboard',
            filename: './index.html',
        }),
    ],
    entry: {
        header: {
			import: './modules/header/header.js',
			dependOn: 'shared',
		},
		body: {
			import: './modules/body/body.js',
			dependOn: 'shared',
		},
		footer: {
			import: './modules/footer/footer.js',
			dependOn: 'shared',
		},
		shared: 'jquery',
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].bundle.js',
    },
    optimization: {
		splitChunks: {
			chunks: 'all',
		},
	},
	devServer: {
		static: path.join(__dirname, './public'),
		open: true,
		port: 8564,
	},
	performance: {
		maxAssetSize: 1000000,
	},
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [ 'style-loader', 'css-loader' ],
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
};
