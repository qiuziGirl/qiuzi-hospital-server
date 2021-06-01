const Controller = require('egg').Controller

class AppointmentController extends Controller {
  /**
   * 返回预约列表
   */
  async index () {
    const { ctx } = this
    ctx.validate({
      page: 'int?',
      limit: 'int?',
      date: 'string?',
      departmentId: 'int?',
      id: 'int?',
      doctorId: 'int?',
      cardNo: 'int?',
      patientName: 'string?',
      cancel: 'int?',
      status: 'int?'
    }, ctx.query)

    const appointments = await ctx.service.appointment.getList(ctx.query)
    ctx.body = {
      code: 0,
      message: '请求成功',
      data: {
        total: appointments.count,
        appointments: appointments.rows
      }
    }
  }

  /**
   * 根据 id 获取预约信息
   */
  async show () {
    const { ctx } = this
    const id = ctx.params.id
    ctx.validate({ id: 'int?' })
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

    const appointment = await ctx.model.Appointment.findOne({
      attributes,
      where: { id }
    })

    ctx.body = {
      code: 0,
      message: '请求成功',
      data: appointment
    }
  }

  /**
   * 新增一项预约信息
   */
  async create () {
    const { ctx } = this
    ctx.validate({
      workPlanId: 'int?',
      patientName: 'string?',
      cardNo: 'int?',
      department: 'string?',
      departmentId: 'int?',
      doctorName: 'string?',
      doctorId: 'int?',
      house: 'string?',
      remainingNum: 'int?'
    }, ctx.request.body)

    await ctx.service.appointment.addAppointment(ctx.request.body)
    await ctx.service.workPlan.updateWorkPlan(ctx.request.body.workPlanId, { remainingNum: ctx.request.body.remainingNum })

    ctx.body = {
      code: 0,
      message: '添加成功'
    }
  }
}

module.exports = AppointmentController
