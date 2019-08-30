const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const resolvePath = (uri) => path.resolve(__dirname, uri);
const platformPublic = 'src/public';
module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.less', '.css'],
        alias: {
            '@': resolvePath(`${platformPublic}/components`),
            'utils': resolvePath(`${platformPublic}/utils/index`)
        },
    },
    module: {
        rules: [
            {
                test: /\.(less|css)$/,
                include: /node_modules/,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                        }
                    },
                    {
                        loader: "less-loader",
                        options: {
                            javascriptEnabled: true,
                        },
                    },
                ],
            },
            {
                test: /\.(less|css)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[name]_[local]-[hash:base64:5]',
                            },
                            importLoaders: 1,
                        },
                    },
                    {
                        loader: "less-loader",
                        options: {
                            javascriptEnabled: true,
                        },
                    },
                ],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                    },
                ],
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            minimize: true,
                        },
                    },
                ],
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./index.html",
            filename: "index.html",
            minify: {
                //移除空白
                collapseWhitespace: true,
                //压缩css
                minifyCSS: true,
                //压缩js
                minifyJS: true,
            },
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: '8088',
        host: 'localhost',
    },
};