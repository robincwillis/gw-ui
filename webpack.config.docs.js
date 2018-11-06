
const webpack = require('webpack');
const path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');

const mode = process.env.NODE_ENV !== 'production' ?  'development' : 'production';

const config = {

	mode : mode,

	context: path.resolve(__dirname, 'src/docs'),

	entry: {
		docs	 : './index.js'
	},

	output: {
		path: path.resolve(__dirname, 'docs'),
		filename: '[name].js',
		publicPath: '/'
	},

	plugins: [

    new CleanWebpackPlugin(['docs']),

		new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),

		new HtmlWebpackPlugin({
			title : 'gw-ui',
			template: './templates/index.html',
			favicon: './assets/images/favicon.png',
			filename: 'index.html',
			inject:'body'
		}),

	],

	module: {
		rules : [
			{
				test:	/\.(otf|eot|ttf|woff|woff2)$/,
				loader: 'file-loader?name=fonts/' + '[name].[ext]'
			},
			{
				test:	/\.(png|jpg|gif|ico)$/,
				loader: 'file-loader?name=images/' + '[name].[ext]'
			},
			{
        test: /\.(sa|sc|c)ss$/,
        use: [
          mode !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          { loader: 'postcss-loader', options: { path: './src/docs/postcss.config.js' } },
          'resolve-url-loader',
          'sass-loader',
          {
          	loader : 'sass-resources-loader', options: { resources : [
          			path.resolve(__dirname, 'src/lib/sass/setup/variables.scss'),
          			path.resolve(__dirname, 'src/lib/sass/setup/mixins.scss'),
          			path.resolve(__dirname, 'src/lib/sass/setup/scrollbars.scss')
          		]
          	}
          }
        ],
      },
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test:	/\.json$/,
				loader: 'json-loader',
				exclude: /node_modules/
			},
			{
				test: /\.svg$/,
				loader: 'svg-inline-loader'
			}
		]
	},

	resolve: {
		modules: [
			path.resolve(__dirname, 'src'),
			path.resolve(__dirname, 'src/lib'),
			path.resolve(__dirname, 'src/docs'),
			path.resolve(__dirname, 'node_modules')
		],
		extensions: ['.js', '.json', '.hbs', '.jpg', '.png', '.svg', '.sass', '.scss', '.css'],
		alias: {}
	}

}

module.exports = config;
