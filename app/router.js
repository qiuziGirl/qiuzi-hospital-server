/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app
  const prefix = app.locals.api

  router.get('/', controller.home.index)

  router.post(`${prefix}/admin/login`, controller.admin.login)
  router.post(`${prefix}/admin/logout`, controller.admin.logout)
  router.get(`${prefix}/admin/info`, controller.admin.getInfo)
  router.resources(`${prefix}/admin`, controller.admin)
}
