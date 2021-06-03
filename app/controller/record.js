const Controller = require('egg').Controller

class RecordController extends Controller {
  /**
   * 返回就诊记录列表
   */
  async index () {
    const { ctx } = this
    ctx.validate({
      doctorId: 'int?',
      doctorName: 'string?',
      patientName: 'string?',
      cardNo: 'int?',
      change: 'int?',
      page: 'int?',
      limit: 'int?'
    }, ctx.query)
    const records = await ctx.service.record.getList(ctx.query)

    ctx.body = {
      data: {
        total: records.count,
        records: records.rows
      },
      code: 0,
      message: '请求成功'
    }
  }

  /**
   * 根据 id 获取就诊记录
   */
  async show () {
    const { ctx } = this
    const { id } = ctx.params
    ctx.validate({ id: 'int?' })
    const attribute = [
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

    const record = await ctx.model.Record.findOne({
      attribute,
      where: { id }
    })

    ctx.body = {
      code: 0,
      message: '请求成功',
      data: record
    }
  }

  /**
   * 根据 id 更新就诊记录
   */
  async update () {
    const { ctx } = this

    await ctx.service.record.updateRecord(ctx.params.id, ctx.request.body)
    ctx.body = {
      code: 0,
      message: '更新成功'
    }
  }

  /**
   * 新增一项就诊记录
   */
  async create () {
    const { ctx } = this
    const { id } = ctx.params
    ctx.validate({
      department: 'string?',
      doctorId: 'int?',
      doctorName: 'string?',
      cardNo: 'int?',
      patientName: 'string?',
      change: 'int?'
    }, ctx.request.body)

    await ctx.service.record.addRecord(id, ctx.request.body)

    ctx.body = {
      code: 0,
      message: '添加成功'
    }
  }
}

module.exports = RecordController
