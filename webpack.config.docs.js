
const webpack = require('webpack');
const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');

const devMode = process.env.NODE_ENV !== 'production'


const config = {

	context: path.resolve(__dirname, 'src/docs'),

	entry: {
		docs	 : 'index.js'
	},

	output: {
		path: path.resolve(__dirname, 'docs'),
		filename: '[name].js',
		publicPath: '/'
	},

	plugins: [

		new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    }),

		new HtmlWebpackPlugin({
			title : 'gw-ui',
			template: './templates/index.html',
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
				test:	/\.css$/,
				loader: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader'
				})
			},
			{
        test: /\.(sa|sc|c)ss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test:	/\.json$/,
				loader: 'json-loader'
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
