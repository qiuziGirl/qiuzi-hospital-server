const Controller = require('egg').Controller

class HospitalController extends Controller {
  /**
   * 返回医院列表
   */
  async index () {
    const { ctx } = this
    ctx.validate({ name: 'string?', level: 'int?', page: 'int?', limit: 'int?' }, ctx.query)

    const hospitals = await ctx.service.hospital.getList(ctx.query)
    ctx.body = {
      data: {
        total: hospitals.count,
        hospitals: hospitals.rows
      },
      code: 0,
      message: '请求成功'
    }
  }

  /**
   * 根据 id 获取医院信息
   */
  async show () {
    const { ctx } = this
    const id = ctx.params.id
    ctx.validate({ id: 'int?' }, id)
    const attributes = ['id', 'name', 'level', 'manager', 'tel', 'address']
    const hospital = await ctx.model.Hospital.findByPk(id, { attributes })
    ctx.body = {
      code: 0,
      message: '请求成功',
      data: hospital
    }
  }

  /**
   * 根据 id 更新医院信息
   */
  async update () {
    const { ctx } = this
    ctx.validate({ name: 'string?', level: 'int?', manager: 'string?', tel: 'string?', address: 'string?' }, ctx.request.body)
    await ctx.service.hospital.updateHospital(ctx.params.id, ctx.request.body)
    ctx.body = {
      code: 0,
      message: '更新成功'
    }
  }

  /**
   * 新增一间医院
   */
  async create () {
    const { ctx } = this
    ctx.validate({ name: 'string?', level: 'int?', manager: 'string?', tel: 'string?', address: 'string?' }, ctx.request.body)
    await ctx.service.hospital.addHospital(ctx.request.body)
    ctx.body = {
      code: 0,
      message: '添加成功'
    }
  }

  /**
   * 删除一间医院
   */
  async destroy () {
    const { ctx } = this
    const id = ctx.params.id
    ctx.validate({ id: 'int?' }, id)
    const hospital = await ctx.model.Hospital.findByPk(id)
    if (!hospital) {
      ctx.status = 404
      return
    }

    await ctx.service.hospital.deleteHospital(id)
    ctx.body = {
      code: 0,
      message: '删除成功'
    }
  }
}

module.exports = HospitalController
