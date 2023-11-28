const paths = require('./paths')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')

console.log(
  `⚠️ ⚠️  URL to add this extension in Stripo in **DEV**: http://local.host:3005/main.extension.js`
)

module.exports = merge(common, {
  /**
   * Mode
   *
   * Set the mode to development or production.
   */
  mode: 'development',

  /**
   * Devtool
   *
   * Control how source maps are generated.
   */
  devtool: 'inline-source-map',

  /**
   * DevServer
   *
   * Spin up a server for quick development.
   */
  devServer: {
    historyApiFallback: true,
    allowedHosts: 'all',
    static: paths.build,
    client: { overlay: false },
    compress: true,
    hot: true,
    port: 3005
  },

  plugins: [new HtmlWebpackPlugin({ title: 'Test' })]
})
