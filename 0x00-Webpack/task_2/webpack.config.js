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
                use: [ "css-loader", "style-loader"],
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
