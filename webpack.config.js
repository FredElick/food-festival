const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
// const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");
// const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require('path');
const config = {
    entry: {
        app: './assets/js/script.js',
        events: "./assets/js/event.js",
        schedule: './assets/js/schedule.js',
        tickets:  './assets/js/tickets'

    },
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname + "/dist"),
    },
    module: {
        rules: [
            {
                test: /\.jpg$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false,
                            name (file) {
                                return "[path][name].[ext]"
                            },
                            publicPath: function(url) {
                                return url.replace("../", "/assets/")
                            }
                        }
                    },
                    {
                        loader: 'image-webpack-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery'
        }),
        new BundleAnalyzerPlugin({
          analyzerMode: 'static'
        })
    ],
    mode: 'development'
};

module.exports = config

