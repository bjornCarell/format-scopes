const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssPresetEnv = require('postcss-preset-env');


process.env.NODE_ENV = process.env.NODE_ENV || 'development'

if (process.env.NODE_ENV === 'test') {
  require('dotenv').config({ path: '.env.test' })
} else if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({ path: '.env.development' })
}

module.exports = (env) => {
  const inProduction = env === 'production'

  return {
    entry: './src/index.js',
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        test: /\.m?js$/,
        exclude: /(node_modules |bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
    }, 
    //{
    //   test: /\.css$/,
    //   use: [
    //     'style-loader',
    //     {
    //       loader: 'css-loader',
    //       options: {
    //         importLoaders: 1,
    //         modules: true
    //       }
    //     },
    //     {
    //         loader: "postcss-loader",
    //         options: { plugins: () => [postcssPresetEnv({ stage: 0 })] },
    //     },
    //   ],
    // }
      ]
    },
    // plugins: [ new MiniCssExtractPlugin() ],
    devtool: inProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public', 'dist'),
      historyApiFallback: true,
      publicPath: '/dist'
    },
    mode: 'development'
  }
}