const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const path = require('path');

var DEV;

if(process.argv.indexOf('--dev') !== -1) {
	process.env.ENV = 'dev';
	DEV = true;
} else {
	process.env.ENV = 'prod';
	DEV = false;
}

const config = {

	context: path.resolve(__dirname, 'src'),
	entry: {
		app	 : ['./js/application.js']
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name].js',
		publicPath: '/'
	},

	plugins: [
		new WebpackNotifierPlugin(),

		new ExtractTextPlugin('[name].css'),

		new webpack.HotModuleReplacementPlugin(),

		new HtmlWebpackPlugin({
			title : 'Webpack React Boilerplate',
			template: './templates/index.html',
			filename: 'index.html',
			inject:'body'
		})
	],

	module: {

		loaders: [
				{
					test:	/\.(otf|eot|ttf|woff|woff2)$/,
					loader: 'file-loader?name=fonts/[name].[ext]'
				},
				{
					test:	/\.(png|jpg|gif|ico)$/,
					loader: 'file-loader?name=images/[name].[ext]'
				},
				{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract({
						fallback: 'style-loader',
						use: 'css-loader?importLoaders=1!postcss-loader'
					})
				},
				{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract({
						fallback: 'style-loader',
						use:'css-loader?importLoaders=1!postcss-loader!resolve-url-loader!sass-loader?sourceMap'
					})
				},
				{
					test:	/\.json$/,
					loader: 'json-loader'
				},
				{
					test:	 /\.js$/,
					loader:	 'babel-loader',
					exclude: /node_modules/,
					query:	 {
						presets: ['es2015', 'react', 'stage-0']
					}
				},
				// {
				// 	test  : /\/es6-promise\.js$/,
				// 	loader: 'imports?this=>window'
				// },
				{
					test: /\.svg$/,
					loader: 'svg-inline-loader'
				}
			]
	},

	devtool: 'source-map',

	resolve: {
		modules: [
			path.resolve(__dirname, 'src'),
			path.resolve(__dirname, 'src/js'),
			path.resolve(__dirname, 'src/sass'),
			path.resolve(__dirname, 'src/images'),
			path.resolve(__dirname, 'node_modules')
		],
		extensions: ['.js', '.json', '.hbs', '.jpg', '.png', '.svg', '.sass', '.scss', '.css'],
	}
};


module.exports = config;
