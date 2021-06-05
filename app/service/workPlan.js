const dayjs = require('dayjs')
const Service = require('egg').Service

class WorkPlanService extends Service {
  /**
   * 返回排班列表
   * @param {Object} query 请求参数
   */
  async getList (query) {
    const { ctx, app } = this
    const { Op } = app.Sequelize
    const { doctorId, doctorName, date, departmentId, isRemaining, page = 1, limit } = query
    const filtersWorkPlans = {}

    if (date) filtersWorkPlans.date = date
    if (departmentId) filtersWorkPlans.departmentId = departmentId
    if (doctorId) filtersWorkPlans.doctorId = doctorId
    if (doctorName) filtersWorkPlans.doctorName = { [Op.substring]: doctorName }

    if (isRemaining) {
      filtersWorkPlans.remainingNum = { [Op.gt]: 0 }
      filtersWorkPlans.startTime = { [Op.gte]: new Date() } // startTime >= now
    }

    if (isRemaining === 0) filtersWorkPlans[Op.or] = [{ remainingNum: 0 }, { startTime: { [Op.lt]: new Date() } }] // startTime < now

    const attributes = [
      'id',
      'date',
      'stopReason',
      'temp',
      'creater',
      'house',
      'maxAppointmentNum',
      'remainingNum',
      'addNumCreater',
      'type',
      'departmentId',
      'doctorId',
      'doctorName',
      'startTime',
      'endTime',
      'stop'
    ]

    const workPlans = await ctx.model.WorkPlan.findAndCountAll({
      limit,
      attributes,
      where: filtersWorkPlans,
      order: ['id'],
      offset: (page > 0 && limit > 0) ? limit * (page - 1) : limit
    })

    for (let i = 0; i < workPlans.rows.length; i++) {
      workPlans.rows[i].startTime = dayjs(workPlans.rows[i].startTime).format('HH:mm')
      workPlans.rows[i].endTime = dayjs(workPlans.rows[i].endTime).format('HH:mm')
    }

    return workPlans
  }

  /**
   * 返回可预约医生列表
   * @param {Object} query 请求参数
   */
  async getDoctorList (query) {
    const { ctx } = this
    const { departmentId, date } = query
    let startTime = date

    if (dayjs(date).format('YYYY-MM-DD') === dayjs().format('YYYY-MM-DD')) {
      startTime = new Date()
    }

    const list = await ctx.model.query(`SELECT DISTINCT doctor_id AS doctorId, doctor_name AS doctorName, department_id AS departmentId FROM work_plan
                                        WHERE (deleted_at IS NULL AND (department_id = :departmentId AND date = :date AND remaining_num > 0 AND start_time >= :startTime))`,
    { replacements: { departmentId, date: dayjs(date).format('YYYY-MM-DD'), startTime }, type: 'SELECT' }).then(res => {
      return res
    })

    return list
  }

  /**
   * 返回指定医生的可预约时间
   * @param {Object} query 请求参数
   */
  async getTimeList (query) {
    const { ctx, app } = this
    const { Op } = app.Sequelize
    const { date, departmentId, doctorId, isRemaining } = query
    const filtersWorkPlans = {}
    let startTime = date

    if (dayjs(date).format('YYYY-MM-DD') === dayjs().format('YYYY-MM-DD')) {
      startTime = new Date()
    }

    if (date) filtersWorkPlans.date = date
    if (departmentId) filtersWorkPlans.departmentId = departmentId
    if (doctorId) filtersWorkPlans.doctorId = doctorId
    if (startTime) filtersWorkPlans.startTime = { [Op.gte]: startTime }
    if (isRemaining) filtersWorkPlans.remainingNum = { [Op.gt]: 0 }

    const attributes = ['id', 'remainingNum', 'startTime', 'endTime']

    const workPlans = await ctx.model.WorkPlan.findAll({
      attributes,
      where: filtersWorkPlans,
      order: ['startTime']
    })

    return workPlans
  }

  /**
   * 根据 id 更新排班信息
   * @param {number} id 排班编号
   * @param {Object} request 请求体
   */
  async updateWorkPlan (id, request) {
    const { ctx } = this

    return await ctx.model.WorkPlan.update(request, { where: { id } })
  }

  async updateStatus () {
    const { ctx, app } = this
    const { Op } = app.Sequelize

    return await ctx.model.WorkPlan.update({ status: -1 }, {
      where: {
        status: 0,
        date: {
          [Op.lt]: new Date()
        }
      }
    })
  }

  /**
   * 新增一条排班信息
   * @param {Object} request 请求体
   */
  async addWorkPlan (request) {
    const { ctx } = this
    return await ctx.model.WorkPlan.create(request)
  }

  /**
   * 删除一条排班信息
   * @param {number} id 排班编号
   */
  async deleteWorkPlan (id) {
    const { ctx } = this
    return await ctx.model.WorkPlan.destroy({ where: { id } })
  }
}

module.exports = WorkPlanService
