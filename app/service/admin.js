const Service = require('egg').Service
const utility = require('utility')

class AdminService extends Service {
  /**
   * 返回管理员列表
   * @param {object} query 请求参数
   */
  async getList (query) {
    const { ctx, app } = this
    const { Op } = app.Sequelize
    const { name, role, logined, page = 1, limit } = query
    const filterAdmins = {}

    if (name) filterAdmins.name = { [Op.substring]: name }
    if (role) filterAdmins.role = { [Op.in]: role.split(',') }
    if (logined) filterAdmins.logined = { [Op.in]: logined }

    const admins = await ctx.model.Admin.findAndCountAll({
      attributes: ['id', 'name', 'password', 'mobile', 'email', 'openId', 'role', 'logined', 'lastLoginTime', 'avatar'],
      where: filterAdmins,
      order: ['id'],
      limit,
      offset: (page > 0 && limit > 0) ? limit * (page - 1) : limit
    })

    return admins
  }

  /**
   * 根据 token 获取管理员信息
   * @param {object} query 请求参数
   */
  async getInfo (query) {
    const { ctx, app } = this
    const { id, name } = app.jwt.verify(query.token, app.config.jwt.secret)

    const admin = await ctx.model.Admin.findOne({
      attributes: ['id', 'name', 'mobile', 'role', 'email', 'avatar'],
      where: { id, name }
    })

    return admin
  }

  /**
   * 根据 id 更新管理员信息
   * @param {Number} id id
   * @param {Object} request 请求体
   */
  async updateAdmin (id, request) {
    const { ctx } = this
    return await ctx.model.Admin.update({
      name: request.name,
      password: request.password,
      mobile: request.mobile,
      email: request.email,
      role: request.role,
      avatar: request.avatar
    }, { where: { id } })
  }

  /**
   * 新增一名管理员
   * @param {*} request 请求体
   */
  async addAdmin (request) {
    const { ctx, app } = this

    return await ctx.model.Admin.create({
      name: request.name,
      role: request.role,
      mobile: request.mobile,
      avatar: request.avatar,
      password: utility.md5(app.config.defaultPassword)
    })
  }

  /**
   * 删除一名管理员
   * @param {Number} id id
   */
  async deleteAdmin (id) {
    const { ctx } = this
    return await ctx.model.Admin.destroy({ where: { id } })
  }

  /**
   * 管理员登录
   * @param {*} request 请求体
   */
  async login (request) {
    const { ctx } = this
    const { name, mobile, password } = request
    const filterAdmin = {}

    if (name) filterAdmin.name = name
    if (mobile) filterAdmin.mobile = mobile

    filterAdmin.password = password

    const admin = await ctx.model.Admin.findOne({
      attributes: ['id', 'name'],
      where: filterAdmin
    })

    await admin.update({ lastLoginTime: new Date() })

    return admin
  }
}

module.exports = AdminService
