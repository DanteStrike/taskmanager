const path = require(`path`);

module.exports = {
  mode: `development`,
  entry: `./src/main.js`,

  output: {
    path: path.join(__dirname, `public`),
    filename: `bundle.js`
  },

  devtool: `source-map`,

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [`style-loader`, `css-loader`],
      }
    ]
  },

  devServer: {
    contentBase: path.join(__dirname, `public`),
    publicPath: `http://localhost:8080`,
    compress: true,
    watchContentBase: true
  }
};
