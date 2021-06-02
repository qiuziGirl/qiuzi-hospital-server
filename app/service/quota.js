const Service = require('egg').Service

class QuotaService extends Service {
  /**
   * 根据病人 id 返回所有或指定的指标信息
   * @param {Object} query 请求参数
   */
  async getList (query) {
    const { ctx } = this
    const { id, time } = query
    const filterQuotas = {}

    filterQuotas.patientId = id
    if (time) filterQuotas.time = time

    const attributes = [
      'id',
      'patientId',
      'time',
      'systolicPressure',
      'diastolicPressure',
      'fastingBlood',
      'randomBlood',
      'weight',
      'waist',
      'hipline',
      'temperature'
    ]

    const quotas = await ctx.model.Quota.findAndCountAll({
      attributes,
      where: filterQuotas,
      order: ['createdAt']
    })

    return quotas
  }

  /**
   * 新增一条指标记录
   * @param {Object} request 请求体
   */
  async addQuota (request) {
    const { ctx } = this
    return await ctx.model.Quota.create({
      patientId: request.patientId,
      time: request.time,
      systolicPressure: request.systolicPressure,
      diastolicPressure: request.diastolicPressure,
      fastingBlood: request.fastingBlood,
      randomBlood: request.randomBlood,
      weight: request.weight,
      waist: request.waist,
      hipline: request.hipline,
      temperature: request.temperature
    })
  }
}

module.exports = QuotaService
