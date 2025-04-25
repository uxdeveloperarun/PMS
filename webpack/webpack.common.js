const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');

let mode = 'development';
let target = 'web';
const plugins = [
  new MiniCssExtractPlugin(),
  new ESLintPlugin({
    extensions: ['js', 'jsx', 'ts', 'tsx'], // Lint these file types
    failOnError: true, // Fail build on ESLint errors
  }),
  // new CopyPlugin([{ from: 'source', to: 'dest' }]),
  //   new ReactRefreshWebpackPlugin(),
  //   new CleanWebpackPlugin(),
  //   new ForkTsCheckerWebpackPlugin(),
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, '..', './src/index.html'),
  }),
];

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.(scss|sass|css)$/,
        use: [
          MiniCssExtractPlugin.loader, // Extract CSS into separate files
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: 'bundle.js',
  },
  plugins,
  stats: 'errors-only',
};
