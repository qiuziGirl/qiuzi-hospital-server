const Service = require('egg').Service

class DepartmentService extends Service {
  /**
   * 返回科室列表
   * @param {Object} query 请求参数
   */
  async getList (query) {
    const { ctx, app } = this
    const { Op } = app.Sequelize
    const { name, page = 1, limit } = query
    const filterDepartments = {}

    if (name) filterDepartments.name = { [Op.substring]: name }

    const departments = await ctx.model.Department.findAndCountAll({
      attributes: ['id', 'name', 'introduce'],
      where: filterDepartments,
      order: ['id'],
      limit,
      offset: (page > 0 && limit > 0) ? limit * (page - 1) : limit
    })

    return departments
  }

  /**
   * 根据 id 更新科室信息
   * @param {number} id id
   * @param {Object} request 请求体
   */
  async updateDepartment (id, request) {
    const { ctx } = this
    return await ctx.model.Department.update({
      name: request.name,
      introduce: request.introduce
    }, { where: { id } })
  }

  /**
   * 新增一个科室
   * @param {Object} request 请求体
   */
  async addDepartment (request) {
    const { ctx } = this
    return await ctx.model.Department.create({
      name: request.name,
      introduce: request.introduce
    })
  }

  /**
   * 删除一个科室
   * @param {number} id id
   */
  async deleteDepartment (id) {
    const { ctx } = this
    return await ctx.model.Department.destroy({ where: { id } })
  }
}

module.exports = DepartmentService
