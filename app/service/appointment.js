const Service = require('egg').Service

class AppointmentService extends Service {
  /**
   * 返回预约列表
   * @param {Object} query 请求参数
   */
  async getList (query) {
    const { ctx, app } = this
    const { Op } = app.Sequelize
    const { page = 1, limit = 15, date, departmentId, id, doctorId, cardNo, patientName, cancel, status } = query
    const filterAppointment = {}

    if (date) filterAppointment.date = date
    if (departmentId) filterAppointment.departmentId = departmentId
    if (id) filterAppointment.id = id
    if (doctorId) filterAppointment.doctorId = doctorId
    if (cardNo) filterAppointment.cardNo = cardNo
    if (patientName) filterAppointment.patientName = { [Op.substring]: patientName }
    if (cancel || cancel === 0) filterAppointment.cancel = cancel
    if (status || status === 0) filterAppointment.status = status

    const attributes = [
      'id',
      'workPlanId',
      'patientName',
      'cardNo',
      'department',
      'departmentId',
      'doctorId',
      'doctorName',
      'date',
      'house',
      'startTime',
      'endTime',
      'cancel',
      'cancelReason',
      'status'
    ]

    const appointments = await ctx.model.Appointment.findAndCountAll({
      attributes,
      where: filterAppointment,
      order: ['id'],
      limit,
      offset: (page > 0 && limit > 0) ? limit * (page - 1) : limit
    })

    return appointments
  }

  /**
   * 根据 id 更新预约信息
   * @param {number} id id
   * @param {Object} request 请求体
   */
  async updateAppointment (id, request) {
    const { ctx } = this

    return await ctx.model.Appointment.update(request, { where: { id } })
  }

  /**
   * 新增一项预约信息
   * @param {Object} request 请求体
   */
  async addAppointment (request) {
    const { ctx } = this
    return await ctx.model.Appointment.create({
      workPlanId: request.workPlanId,
      patientName: request.patientName,
      cardNo: request.cardNo,
      department: request.department,
      departmentId: request.departmentId,
      doctorId: request.doctorId,
      doctorName: request.doctorName,
      house: request.house,
      date: request.date,
      startTime: request.startTime,
      endTime: request.endTime
    })
  }
}

module.exports = AppointmentService
