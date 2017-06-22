const webpack = require('webpack');

module.exports = {
  entry: {
    browser: [
      './browser/index.js',
      'jquery/dist/jquery.min.js',
      'bootstrap/dist/js/bootstrap.min.js',
      'bootstrap/dist/css/bootstrap.css',
    ],
    mobile: [
      './mobile/index.js',
      'jquery/dist/jquery.min.js',
      'bootstrap/dist/js/bootstrap.min.js',
      'bootstrap/dist/css/bootstrap.css',
    ],
  },
  output: {
    path: __dirname,
    filename: './server/public/javascript/[name].js',
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ],
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.ncss$/,
        loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000',
      },
    ],
  },
};
