const Controller = require('egg').Controller

class WorkPlanController extends Controller {
  /**
   * 返回排班列表
   */
  async index () {
    const { ctx } = this
    ctx.validate({
      page: 'int?',
      limit: 'int?',
      doctorId: 'int?',
      doctorName: 'string?',
      date: 'string?',
      departmentId: 'int?',
      isRemaining: 'int?'
    }, ctx.query)

    const workPlans = await ctx.service.workPlan.getList(ctx.query)
    ctx.body = {
      code: 0,
      message: '请求成功',
      data: {
        total: workPlans.count,
        workPlans: workPlans.rows
      }
    }
  }

  /**
   * 返回可预约医生列表
   */
  async doctorList () {
    const { ctx } = this
    ctx.validate({ departmentId: 'int?' }, ctx.query)

    const workPlans = await ctx.service.workPlan.getDoctorList(ctx.query)
    ctx.body = {
      code: 0,
      message: '请求成功',
      data: workPlans
    }
  }

  /**
   * 返回指定医生的可预约时间
   */
  async timeList () {
    const { ctx } = this
    ctx.validate({ departmentId: 'int?', isRemaining: 'int?' }, ctx.query)

    const workPlans = await ctx.service.workPlan.getTimeList(ctx.query)
    ctx.body = {
      code: 0,
      message: '请求成功',
      data: workPlans
    }
  }

  /**
   * 根据 id 获取排班信息
   */
  async show () {
    const { ctx } = this
    const id = ctx.params.id
    ctx.validate({ id: 'int?' })

    const attributes = [
      'id',
      'date',
      'house',
      'remainingNum',
      'departmentId',
      'doctorId',
      'doctorName',
      'startTime',
      'endTime'
    ]

    const workPlan = await ctx.model.WorkPlan.findOne({ attributes, where: { id } })

    ctx.body = {
      code: 0,
      message: '请求成功',
      data: workPlan
    }
  }

  /**
   * 根据 id 更新排班信息
   */
  async update () {
    const { ctx } = this

    await ctx.service.workPlan.updateWorkPlan(ctx.params.id, ctx.request.body)
    ctx.body = {
      code: 0,
      message: '更新成功'
    }
  }

  async updateStatus () {
    const { ctx } = this

    await ctx.service.workPlan.updateStatus()
    ctx.body = {
      code: 0,
      message: '更新成功'
    }
  }

  /**
   * 新增一条排班信息
   */
  async create () {
    const { ctx } = this
    await ctx.service.workPlan.addWorkPlan(ctx.request.body)

    ctx.body = {
      code: 0,
      message: '添加成功'
    }
  }

  /**
   * 删除一条排班信息
   */
  async destroy () {
    const { ctx } = this
    const id = ctx.params.id
    ctx.validate({ id: 'int?' })

    const workPlan = await ctx.model.WorkPlan.findByPk(id)
    if (!workPlan) {
      ctx.status = 404
      return
    }

    await ctx.service.workPlan.deleteWorkPlan(id)
    ctx.body = {
      code: 0,
      message: '删除成功'
    }
  }
}

module.exports = WorkPlanController
