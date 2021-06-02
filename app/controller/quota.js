const Controller = require('egg').Controller

class QuotaController extends Controller {
  /**
   * 根据病人 id 返回所有或指定时间的指标信息
   */
  async index () {
    const { ctx } = this
    ctx.validate({ id: 'int?', time: 'string?' }, ctx.query)
    const quotas = await ctx.service.quota.getList(ctx.query)

    ctx.body = {
      code: 0,
      message: '请求成功',
      data: {
        total: quotas.count,
        quotas: quotas.rows
      }
    }
  }

  /**
   * 新增一条指标记录
   */
  async create () {
    const { ctx } = this
    await ctx.service.quota.addQuota(ctx.request.body)
    ctx.body = {
      code: 0,
      message: '添加成功'
    }
  }
}

module.exports = QuotaController
