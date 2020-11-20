const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env = {}, argv = {}) => ({
  module: {
    rules: require("./webpack/module.rules")(env, argv),
  },
  plugins: [
    argv.mode === "development"
      ? new HtmlWebpackPlugin({
          // * Development
          template: "./src/index.html",
        })
      : new HtmlWebpackPlugin({
          // * Production
          template: "./src/index.html",
          minify: true,
          filename: "index.html",
        }),
    argv.mode === "production"
      ? new MiniCssExtractPlugin({
          filename: "[name].css",
          chunkFilename: "[id].css",
        })
      : null,
  ].filter((plugin) => !!plugin),
  devtool: "source-map",
});
