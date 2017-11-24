const path = require("path");

const config = {
	entry: './main.js',
	output: {
		filename: 'public/bundle.js',
	},
	devServer: {
		contentBase: path.join(__dirname, "public"),
		inline: true,
		port: 8080
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['react']
				}
			}
		]
	}
}

module.exports = config;
