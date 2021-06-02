const Service = require('egg').Service

class HospitalService extends Service {
  /**
   * 返回医院列表
   * @param {Object} query 请求参数
   */
  async getList (query) {
    const { ctx, app } = this
    const { Op } = app.Sequelize
    const { name, level, page = 1, limit } = query
    const filterHospitals = {}

    if (name) filterHospitals.name = { [Op.substring]: name }
    if (level) filterHospitals.level = level

    const hospitals = await ctx.model.Hospital.findAndCountAll({
      attributes: ['id', 'name', 'level', 'manager', 'tel', 'address'],
      where: filterHospitals,
      order: ['id'],
      limit,
      offset: (page > 0 && limit > 0) ? limit * (page - 1) : limit
    })

    return hospitals
  }

  /**
   * 根据 id 更新医院信息
   * @param {number} id id
   * @param {Object} request 请求体
   */
  async updateHospital (id, request) {
    const { ctx } = this
    return await ctx.model.Hospital.update({
      name: request.name,
      level: request.level,
      manager: request.manager,
      tel: request.tel,
      address: request.address
    }, { where: { id } })
  }

  /**
   * 新增一间医院
   * @param {Object} request 请求体
   */
  async addHospital (request) {
    const { ctx } = this
    return await ctx.model.Hospital.create({
      name: request.name,
      level: request.level,
      manager: request.manager,
      tel: request.tel,
      address: request.address
    })
  }

  /**
   * 删除一间医院
   * @param {number} id id
   */
  async deleteHospital (id) {
    const { ctx } = this
    return await ctx.model.Hospital.destroy({ where: { id } })
  }
}

module.exports = HospitalService
