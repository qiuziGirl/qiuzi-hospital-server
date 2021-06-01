/* eslint valid-jsdoc: "off" */

'use strict'

const conf = require('./conf.js')

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = module.exports = {}

  config.oss = conf.oss

  config.sequelize = {
    datasources: [
      Object.assign({
        dialect: 'mysql',
        timezone: '+08:00',
        define: {
          freezeTableName: true,
          underscored: true,
          paranoid: true
        }
      }, conf.mysql.clients.hospital)
    ]
  }

  config.validate = {
    convert: true
  }

  config.security = {
    csrf: {
      enable: false
    }
  }

  // jwt
  config.jwt = {
    secret: conf.secret.jwt
  }

  config.defaultPassword = conf.defaultPassword

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + conf.secret.appKey

  // add your middleware config here
  config.middleware = []

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  }

  return {
    ...config,
    ...userConfig
  }
}
