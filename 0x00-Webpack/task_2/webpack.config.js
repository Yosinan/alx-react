const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        main: path.resolve(__dirname, 'js', 'dashboard_main.js'),
    },
    performance: {
      maxAssetSize: 1000000,
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
                        options: {
                          bypassOnDebug: true, // webpack@1.x
                          disable: true, // webpack@2.x and newer
                        },
                    }, 
                ],
            },
        ],
    },  
};
