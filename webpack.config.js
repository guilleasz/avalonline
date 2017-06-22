module.exports = {
  entry: {
    browser: './browser/index.js',
    mobile: './mobile/index.js',
  },
  output: {
    path: __dirname,
    filename: './server/public/javascript/[name].js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
};
