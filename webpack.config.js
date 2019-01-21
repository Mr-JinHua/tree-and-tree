var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var OpenBrowserPlugin = require('open-browser-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname,'app/index.js'),
  output: {
    filename: 'boundle.js',
    path: path.resolve(__dirname,'dist'),
  },
  resolve: {
    extensions: ['.jsx','.js']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use:{
          loader: 'babel-loader',
          query: {
            // presets:["env", "react"],
            presets:["env", "react"],
            plugins: [
              ["import",{libraryName: "antd", style: 'css'}] // antd按需加载
            ]
          }
        }
      },
      {
        test: /\.(le|c)ss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'less-loader' },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('autoprefixer')
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: __dirname + '/app/index.tpl.html'}),
    new OpenBrowserPlugin({url: 'http://localhost:8080'}),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        secure: false
      }
    },
    contentBase: './',
    host: 'localhost',
    compress: true,
    port: 8080,
    inline: true,
    hot: true
  }
}