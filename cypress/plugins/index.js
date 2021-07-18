/// <reference types="cypress" />

// eslint-disable-next-line
const { startDevServer } = require('@cypress/webpack-dev-server')
// eslint-disable-next-line
const webpackConfig = require('@vue/cli-service/webpack.config.js')

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  on('dev-server:start', options =>
    startDevServer({
      options,
      webpackConfig
    })
  )

  return config
}
