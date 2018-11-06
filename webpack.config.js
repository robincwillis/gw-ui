
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');

const path = require('path');


const config = {

	context: path.resolve(__dirname, 'src/lib'),

	entry: {
		index : 'index.js',
		"postcss.config" : 'postcss.config.js'
	},

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
		library: '',
		libraryTarget: 'commonjs'
	},

	externals: [nodeExternals()],

	plugins : [

    new CleanWebpackPlugin(['dist']),

		new webpack.NamedModulesPlugin(),

		new CopyWebpackPlugin([
			{
				from: 'sass/',
				to: 'sass/[name].[ext]',
				toType: 'template'
			}
		])

	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader'
			},
			{
				test: /\.scss$/,
				use: 'file-loader?name=[name].[ext]'
			}
		]
	},

	resolve : {
		modules: [
			path.resolve(__dirname, 'src'),
			path.resolve(__dirname, 'src/lib'),
			path.resolve(__dirname, 'node_modules')
		],
		extensions: ['.js', '.json', '.hbs', '.jpg', '.png', '.svg', '.sass', '.scss', '.css']
	}

};

module.exports = config;
