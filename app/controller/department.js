const Controller = require('egg').Controller

class DepartmentController extends Controller {
  /**
   * 返回科室列表
   */
  async index () {
    const { ctx } = this
    ctx.validate({ name: 'string?', page: 'int?', limit: 'int?' }, ctx.query)

    const departments = await ctx.service.department.getList(ctx.query)
    ctx.body = {
      code: 0,
      message: '请求成功',
      data: {
        total: departments.count,
        departments: departments.rows
      }
    }
  }

  /**
   * 根据 id 获取科室信息
   */
  async show () {
    const { ctx } = this
    const id = ctx.params.id
    ctx.validate({ id: 'int?' }, id)
    const attributes = ['id', 'name', 'introduce']
    const department = await ctx.model.Department.findByPk(id, { attributes })
    ctx.body = {
      code: 0,
      message: '请求成功',
      data: department
    }
  }

  /**
   * 根据 id 更新科室信息
   */
  async update () {
    const { ctx } = this
    ctx.validate({ name: 'string?', introduce: 'string?' }, ctx.request.body)
    await ctx.service.department.updateDepartment(ctx.params.id, ctx.request.body)
    ctx.body = {
      code: 0,
      message: '更新成功'
    }
  }

  /**
   * 新增一个科室
   */
  async create () {
    const { ctx } = this
    ctx.validate({ name: 'string?', introduce: 'string?' }, ctx.request.body)
    await ctx.service.department.addDepartment(ctx.request.body)
    ctx.body = {
      code: 0,
      message: '添加成功'
    }
  }

  /**
   * 删除一个科室
   */
  async destroy () {
    const { ctx } = this
    const id = ctx.params.id
    ctx.validate({ id: 'int?' }, id)
    const department = await ctx.model.Department.findByPk(id)
    if (!department) {
      ctx.status = 404
      return
    }

    await ctx.service.department.deleteDepartment(id)
    ctx.body = {
      code: 0,
      message: '删除成功'
    }
  }
}

module.exports = DepartmentController
