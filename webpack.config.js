const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
  const isDev = argv.mode === 'development';

  return {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isDev ? '[name].js' : '[name].[contenthash].js',
      publicPath: '/',                      // important for React Router
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    devtool: isDev ? 'inline-source-map' : 'source-map',
    devServer: {
      historyApiFallback: true,            // important to support React Router deep links
      static: {
        directory: path.resolve(__dirname, 'public'),
      },
      open: true,
      hot: true,
      port: 3000,
    },
    module: {
      rules: [
        // ts
        // {
        //   test: /\.tsx?$/,
        //   use: 'ts-loader',
        //   exclude: /node_modules/,
        // },
        {
          test: /\.tsx?$/,
          use: {
            loader: 'ts-loader',
            options: {
              // faster HMR; emission handled by webpack; type-checking moved to plugin
              transpileOnly: true
              // if you had a custom tsconfig path: configFile: 'tsconfig.json'
            }
          },
          exclude: /node_modules/
        },

        // {
        //   test: /\.css$/i,
        //   use: [
        //     isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        //     'css-loader'
        //   ],
        // },
        // tailwindcss and postcss
        {
          test: /\.css$/i,
          use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: { importLoaders: 1 } // let postcss run on @import'ed files
            },
            'postcss-loader' // uses postcss.config.js (Tailwind + Autoprefixer)
          ]
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg)$/i,
          type: 'asset/resource',
        }
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html'),
      }),
      !isDev && new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
      }),
    ].filter(Boolean),
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
      runtimeChunk: 'single',
    },
  };
};
