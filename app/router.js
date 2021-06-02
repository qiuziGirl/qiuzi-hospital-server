/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app
  const prefix = app.locals.api

  router.resources(`${prefix}/hospital`, controller.hospital)
  router.resources(`${prefix}/department`, controller.department)
  router.resources(`${prefix}/appointment`, controller.appointment)

  router.post(`${prefix}/doctor/login`, controller.doctor.login)
  router.post(`${prefix}/doctor/logout`, controller.doctor.logout)
  router.get(`${prefix}/doctor/info`, controller.doctor.getInfo)
  router.resources(`${prefix}/doctor`, controller.doctor)

  router.post(`${prefix}/admin/login`, controller.admin.login)
  router.post(`${prefix}/admin/logout`, controller.admin.logout)
  router.get(`${prefix}/admin/info`, controller.admin.getInfo)
  router.resources(`${prefix}/admin`, controller.admin)
}
