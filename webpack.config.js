const webpack = require('webpack');

module.exports = {
  entry: {
    browser: [
      './browser/index.js',
      'jquery/dist/jquery.min.js',
    ],
    mobile: [
      './mobile/index.js',
      'jquery/dist/jquery.min.js',
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
      { test: /\.scss$/, loaders: ['style', 'css', 'postcss', 'sass'] },
      { test: /\.(woff2?|ttf|eot|svg)$/, loader: 'url?limit=10000' },
      { test: /bootstrap\/dist\/js\/umd\//, loader: 'imports?jQuery=jquery' },
    ],
  },
};
