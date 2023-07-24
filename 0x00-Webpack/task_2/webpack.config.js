const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        main: path.resolve(__dirname, 'js', 'dashboard_main.js'),
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/public',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [ 'style-loader', 'css-loader' ],
            },

            {
                test: /\.(?:png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                use: [
                    "file-loader",
                    {
                        loader: "image-webpack-loader",
                    },
                ],
            },
        ],
    },  
};
