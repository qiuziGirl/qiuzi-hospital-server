/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app
  const prefix = app.locals.api

  router.post(`${prefix}/uploadAvatar`, controller.upload.uploadAvatar)
  router.resources(`${prefix}/hospital`, controller.hospital)
  router.resources(`${prefix}/department`, controller.department)
  router.resources(`${prefix}/appointment`, controller.appointment)

  router.post(`${prefix}/doctor/login`, controller.doctor.login)
  router.post(`${prefix}/doctor/logout`, controller.doctor.logout)
  router.get(`${prefix}/doctor/info`, controller.doctor.getInfo)
  router.resources(`${prefix}/doctor`, controller.doctor)

  router.post(`${prefix}/patient/login`, controller.patient.login)
  router.post(`${prefix}/patient/logout`, controller.patient.logout)
  router.get(`${prefix}/patient/info`, controller.patient.getInfo)
  router.resources(`${prefix}/patient`, controller.patient)

  router.resources(`${prefix}/quota`, controller.quota)

  router.get(`${prefix}/work-plan/time-list`, controller.workPlan.timeList)
  router.get(`${prefix}/work-plan/doctor-list`, controller.workPlan.doctorList)
  router.get(`${prefix}/work-plan/update-status`, controller.workPlan.updateStatus)
  router.resources(`${prefix}/work-plan`, controller.workPlan)

  router.post(`${prefix}/admin/login`, controller.admin.login)
  router.post(`${prefix}/admin/logout`, controller.admin.logout)
  router.get(`${prefix}/admin/info`, controller.admin.getInfo)
  router.resources(`${prefix}/admin`, controller.admin)

  router.post(`${prefix}/record/create/:id`, controller.record.create)
  router.resources(`${prefix}/record`, controller.record)
}
