class AppBootHook {
  constructor (app) {
    this.app = app
  }

  configWillLoad () {
    this.app.locals.api = '/api/v1'
    this.app.locals.baseURL = process.env.BASEURL || ''
  }
}

module.exports = AppBootHook
