const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname,'dist'),
        filename: "index_bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true, // webpack@1.x
                            disable: true, // webpack@2.x and newer
                        },
                    },
                ],
            },
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test:/\.scss$/,
                use:[   "style-loader",
                        "css-loader",
                        "sass-loader"
                    ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,

        host: 'localhost', // Defaults to `localhost`
        port: 8080, // Defaults to 8080
        proxy: {
            '/api': 'http://localhost:4000'
        }

    },
    plugins: [
        new HtmlWebPackPlugin({
            template:'./public/index.html'
        })
    ]
};