const path = require('path');

module.exports = {
    context: __dirname,
    entry: './frontend/couch_hunting.jsx',
    output: {
        path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
<<<<<<< HEAD
                test: [/\.jsx?$/, /\.js?$/],
=======
                test: /\.jsx?$/,
>>>>>>> b5a936f81081f81dd4a399e17acdc6c8618ba9e3
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['@babel/env', '@babel/react']
                    }
                },
            }
        ]
    },
    devtool: 'source-map',
    resolve: {
        extensions: [".js", ".jsx", "*"]
    }
};


