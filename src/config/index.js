import { merge } from 'lodash'
const env = process.env.NODE_ENV || 'development'

const baseConfig = {
  env,
  isDev: env === 'development',
  isTest: env === 'testing',
  port: 3000,
  secrets: {
    jwt: process.env.JWT_SECRET,
    jwtExp: '100d'
  }
}

let envConfig = {}

switch (env) {
  case 'dev':
  case 'development':
    envConfig = require('./dbUrl').devConfig
    break
  case 'test':
  case 'testing':
    envConfig = require('./dbUrl').testConfig
    break
  default:
    envConfig = require('./dbUrl').devConfig
}

export default merge(baseConfig, envConfig)
