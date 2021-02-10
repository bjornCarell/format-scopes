const path = require('path')

module.exports = {
    entry: ['./src/index.js'],
    devtool: 'inline-source-map',
    output: {
        path: path.join(__dirname, 'public', 'dist'),
        filename: 'bundle.js',
    },
    watch: true,
    devServer: {
        contentBase: './src',
        compress: true,
        port: 9000,
    },
    module: {
        rules:[{
                test: /\.js$/,
                exclude: '/node_modules/',
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
                test: /\.css$/,
                use: {
                    loader: 'css-loader',
                    options: {
                    sourceMap: true,
                    }
                },
            }],
    },
}