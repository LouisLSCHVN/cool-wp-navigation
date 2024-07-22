const path = require('path');

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';

    return {
        entry: './assets/scripts/cool-theme-navigation.js',
        output: {
            filename: 'cool-nav-theme.js',
            path: path.resolve(__dirname, './assets/dist'),
        },
        mode: isProduction ? 'production' : 'development',
        resolve: {
            extensions: ['.js'],
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                }
            ]
        },
        devServer: {
            static: {
                directory: path.join(__dirname, './assets/dist'),
            },
            devMiddleware: {
                writeToDisk: true,
            },
            port: 9000,
            hot: true,
        },
    };
};
