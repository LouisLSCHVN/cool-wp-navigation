const path = require('path');

module.exports = {
    entry: './assets/scripts/cool-navigation.js',
    output: {
        filename: 'cool-nav.js',
        path: path.resolve(__dirname, './assets/dist'),
    },
    mode: 'production', // 'production' | 'development'
    resolve: {
        extensions: ['.js'],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};