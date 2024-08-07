const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require('path');

const DIST_DIR = path.join(__dirname, "dist");
const PUBLIC_DIR = path.join(__dirname, "public");

module.exports = {
    mode: 'production',
    entry: {
        index: {
            import: './src/index.js',
        },
    },
    externals: [
        // Everything that starts with "js/"
        /^js\/.+$/,
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    output: {
        clean: true,
        path: DIST_DIR,
        filename: '[name].bundle.js',
    },
    devServer: {
        static: DIST_DIR,
        open: true
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // crea il tag 'style nel DOM in cui iniziare il codice
                    'style-loader',
                    // Converte il codice css in modulo commonJs per poterlo importare
                    'css-loader',
                    // Compila codice Sass in css
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                        ]
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'SynapsxX',
            template: './src/index.html',
            description: 'The Future of EV Charging',
            minify: false
        }),
        new CopyWebpackPlugin({'patterns': [
                { from: './public/', to: 'public' },
                { from: './CNAME/', to: 'CNAME', toType: 'file'}
            ]}),
    ]
}