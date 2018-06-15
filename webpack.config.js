
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const path = require('path');


module.exports = {

	context: path.resolve(__dirname, 'src/lib'),

	entry: {
		index : 'index.js',
		//vendor : ['moment', 'numeral', ...],
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
		new webpack.NamedModulesPlugin(),

		new CopyWebpackPlugin([
			{
				from: 'sass',
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
				use: ['file-loader?name=[name].[ext]'],
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
	},

	// optimization: {
	// 	splitChunks: {
	// 		cacheGroups: {
	// 			vendor: {
	// 			 test: /node_modules/,
	// 			 chunks: 'initial',
	// 			 name: 'vendor',
	// 			 enforce: true
	// 			},
	// 		}
	// 	}
	// }

};