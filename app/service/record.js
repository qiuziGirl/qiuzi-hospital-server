const Service = require('egg').Service

class RecordService extends Service {
  /**
   * 返回就诊记录列表
   * @param {Object} query 请求参数
   */
  async getList (query) {
    const { ctx, app } = this
    const { Op } = app.Sequelize
    const { page = 1, limit = 15, date, doctorId, doctorName, patientName, cardNo, change } = query
    const filterRecord = {}

    if (date) filterRecord.date = date
    if (doctorId) filterRecord.doctorId = doctorId
    if (cardNo) filterRecord.cardNo = cardNo
    if (change || change === 0) filterRecord.change = change
    if (doctorName) filterRecord.doctorName = { [Op.substring]: doctorName }
    if (patientName) filterRecord.patientName = { [Op.substring]: patientName }

    const attributes = [
      'id',
      'department',
      'doctorId',
      'doctorName',
      'cardNo',
      'patientName',
      'date',
      'time',
      'diseaseDescribe',
      'result',
      'selfTalk',
      'doctorSuggestion',
      'change',
      'changeReason'
    ]

    const records = await ctx.model.Record.findAndCountAll({
      attributes,
      where: filterRecord,
      order: ['id'],
      limit,
      offset: (page > 0 && limit > 0) ? limit * (page - 1) : limit
    })

    return records
  }

  /**
   * 根据 id 更新就诊记录
   * @param {number} id 记录 id
   * @param {Object} request 请求体
   */
  async updateRecord (id, request) {
    const { ctx } = this

    return await ctx.model.Record.update(request, { where: { id } })
  }

  /**
   * 新增一项就诊记录
   * @param {number} id 预约 id
   * @param {Object} request 请求体
   */
  async addRecord (id, request) {
    const { ctx } = this
    const transaction = await ctx.model.transaction()

    try {
      // 更新 appointment 状态
      await ctx.model.Appointment.update({ status: 1 }, { where: { id }, transaction })
      // 创建一条记录
      await ctx.model.Record.create(request, { transaction })
      await transaction.commit()
    } catch {
      transaction.rollback()
    }
  }
}

module.exports = RecordService
