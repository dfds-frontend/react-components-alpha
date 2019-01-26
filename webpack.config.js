// webpack 4+
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require('webpack');
const package = require('./package.json');

const IsWebpackDevServer = /webpack-dev-server/.test(process.env.npm_lifecycle_script);

module.exports = (env = {}, argv = {}) => {
  const isProd = argv.mode === 'production';

  console.log('***', isProd ? 'prod' : 'dev', '***');

  let prodEntry = './src/build-library';
  let devEntry = './src/RenderDevelopment';

  let config = {
    devtool: 'source-map',
    optimization: {
      //minimize: false, // is default true in prod mode

      minimizer: [
        isProd && new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              drop_console: true
            },
            output: {
              comments: false
            }
          },
          cache: true,
          parallel: true,
          sourceMap: true,
          extractComments: true
        }),
        isProd && new OptimizeCSSAssetsPlugin({}),
      ].filter(Boolean),

      /*
      code splitting
      https://github.com/webpack/webpack/tree/master/examples
      */
    },
    entry: {
      dfds: isProd ? [prodEntry] : [devEntry],
      // ThirdPartyStylings:
      // ['./src/third-party-stylings/example-of-third-party-styling.scss'],
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      chunkFilename: '[name].js',
      filename: '[name].js',
      library: 'Dfds',
      libraryTarget: 'umd',
      publicPath: '/',
    },
    devServer: {
      port: 6005,
      contentBase: path.join(__dirname, ''),
      publicPath: '/',
      open: true,
      hot: true,
      disableHostCheck: true,
      watchContentBase: true,
      historyApiFallback: true, // react-router
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
      },
      proxy: {
        '/api': {
          target: 'http://localhost:6666',
          secure: false,
          pathRewrite: { '^/api': '' },
          bypass: function(req, res, proxyOptions) {
            console.log('******************', req.url);
          },
        },
      },
    },
    module: {
      rules: [
        isProd && {
          test: /_typography\.scss$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'null-loader',
            },
          ],
        },
        {
          test: /\.html$/,
          include: [path.join(__dirname, 'src')],
          use: [
            {
              loader: 'html-loader',
              options: {
                minimize: isProd,
              },
            },
          ],
        },
        {
          test: /\.(js|jsx)$/,
          include: path.join(__dirname, 'src'),
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.scss$/,
          include: [path.join(__dirname, 'src')],
          use: [
            {
              loader: isProd ? MiniCssExtractPlugin.loader : 'style-loader',
              options: isProd ? {} : {},
            },
            {
              loader: 'css-loader',
              options: {
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                data: '@import "_helpers.scss";',
                includePaths: [path.join(__dirname, 'src/components/quarks')],
                sourceMap: true,
              },
            },
          ],
        },
        /*{
          test: /\.(png|woff(2)?|eot|ttf|svg)(\?v=\d+\.\d+\.\d+)?$/,
          exclude: /node_modules/,
          include: [path.join(__dirname, "")],
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 100000,
                mimetype: 'application/font-woff'
              }
            }
          ]
        },*/
        {
          test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
          include: [path.join(__dirname, 'fonts')],
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'fonts/[name].[ext]',
                mimetype: 'application/font-woff',
              },
            },
          ],
        },
        {
          test: /\.(svg)(\?v=\d+\.\d+\.\d+)?$/,
          include: [path.resolve(__dirname, 'src/icon-system')],
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                mimetype: 'image/svg+xml',
              },
            },
          ],
        },
      ].filter(Boolean),
    },
    plugins: [
      isProd && new CleanWebpackPlugin('dist', {}),
      new MiniCssExtractPlugin({ filename: '[name].css', chunkFilename: '[id].css' }),
      new HtmlWebpackPlugin({
        compile: false,
        inject: true,
        hash: true,
        template: 'src/index.html',
        filename: 'index.html',
      }),
      new WebpackMd5Hash(),
      !isProd && new webpack.HotModuleReplacementPlugin(),
      isProd &&
        new CopyWebpackPlugin(
          [
            {
              from: 'fonts/font.css',
              to: 'fonts/font.css',
            },
            {
              from: 'src/icon-system/icons.min.svg',
              to: 'icons.min.svg',
            },
            {
              from: 'src/icon-system/icons.svg',
              to: 'icons.svg',
            },
          ],
          {}
        ),
    ].filter(Boolean),
    resolve: {
      extensions: ['.js', '.jsx', '.css', '.scss'],
      alias: {
        root: __dirname,
        src: path.resolve(__dirname, 'src'),
        components: path.resolve(__dirname, 'src/components'),
      },
    },
    externals: {},
  };

  config.externals['react'] = {
    root: 'React',
    commonjs2: 'react',
    commonjs: 'react',
    amd: 'react',
    umd: 'react',
  };
  config.externals['react-dom'] = {
    root: 'ReactDOM',
    commonjs2: 'react-dom',
    commonjs: 'react-dom',
    amd: 'react-dom',
    umd: 'react-dom',
  };

  return config;
};
