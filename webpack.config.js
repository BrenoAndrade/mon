const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: "./src/index.jsx",
	output: {
		path: `${__dirname}/public`,
		filename: "./app.js"
	},
	devServer: {
		port: 8080,
		contentBase: "./public"
	},
	resolve: {
		extensions: [".jsx", ".js"],
		alias: {
			"@redux": `${__dirname}/src/redux`,
			"@components": `${__dirname}/src/components`,
			"@app": `${__dirname}/src/app`,
			"@config": `${__dirname}/src/config`,
			"@assets": `${__dirname}/src/assets`,
			modules: `${__dirname}/node_modules`
		}
	},
	plugins: [new ExtractTextPlugin({ filename: "app.css" })],
	module: {
		rules: [
			{
				test: /.js[x]?$/,
				loader: "babel-loader",
				exclude: /node_modules/,
				query: {
					presets: ["es2015", "react"],
					plugins: ["transform-object-rest-spread"]
				}
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: ["css-loader"]
				})
			},
			{
				test: /\.png|.jpg*.*$/,
				loader: "file"
			},
			{
				test: /\.svg$/,
				use: [
					{
						loader: "babel-loader"
					},
					{
						loader: "react-svg-loader"
					}
				]
			}
		]
	}
};
