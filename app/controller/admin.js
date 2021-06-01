const Controller = require('egg').Controller

class AdminController extends Controller {
  /**
   * 返回管理员列表
   */
  async index () {
    const { ctx } = this
    ctx.validate({ name: 'string?', role: 'string?', logined: 'int?', page: 'int?', limit: 'int?' }, ctx.query)
    const admins = await ctx.service.admin.getList(ctx.query)
    ctx.body = {
      data: {
        total: admins.count,
        admins: admins.rows
      },
      code: 0,
      message: '请求成功'
    }
  }

  /**
   * 根据 id 获取管理员信息
   */
  async show () {
    const { ctx } = this
    const id = ctx.params.id
    ctx.validate({ id: 'int?' }, id)
    const attributes = ['id', 'name', 'mobile', 'role', 'email', 'avatar']
    const admin = await ctx.model.Admin.findByPk(id, { attributes })
    ctx.body = {
      code: 0,
      message: '请求成功',
      data: admin
    }
  }

  /**
   * 根据 token 获取管理员信息
   */
  async getInfo () {
    const { ctx } = this
    ctx.validate({ token: 'string?' }, ctx.query)
    const admin = await ctx.service.admin.getInfo(ctx.query)
    admin.role = [admin.role]

    ctx.body = {
      data: admin,
      code: 0,
      message: '信息获取成功'
    }
  }

  /**
   * 根据 id 更新管理员信息
   */
  async update () {
    const { ctx } = this
    ctx.validate({
      name: 'string?',
      password: 'string?',
      mobile: 'string?',
      email: 'string?',
      role: 'string?',
      avatar: 'string?'
    }, ctx.request.body)
    await ctx.service.admin.updateAdmin(ctx.params.id, ctx.request.body)
    ctx.body = {
      code: 0,
      message: '更新成功'
    }
  }

  /**
   * 新增一名管理员
   */
  async create () {
    const { ctx } = this
    ctx.validate({ name: 'string?', role: 'string?', mobile: 'string?', avatar: 'string?' }, ctx.request.body)
    await ctx.service.admin.addAdmin(ctx.request.body)
    ctx.body = {
      code: 0,
      message: '添加成功'
    }
  }

  /**
   * 删除一名管理员
   */
  async destroy () {
    const { ctx } = this
    const id = ctx.params.id
    ctx.validate({ id: 'int?' }, id)
    const admin = await ctx.model.Admin.findByPk(id)
    if (!admin) {
      ctx.status = 404
      return
    }

    await ctx.service.admin.deleteAdmin(id)
    ctx.body = {
      code: 0,
      message: '删除成功'
    }
  }

  /**
   * 管理员登录
   */
  async login () {
    const { ctx, app } = this
    ctx.validate({ name: 'string?', mobile: 'string?', password: 'string?' }, ctx.request.body)
    const admin = await ctx.service.admin.login(ctx.request.body)

    if (admin) {
      const token = app.jwt.sign({ id: admin.id, name: admin.name }, app.config.jwt.secret, { expiresIn: '24h' })
      ctx.body = { data: { token }, message: '登录成功', code: 0 }
    } else {
      ctx.body = { message: '登录失败', code: 4004 }
    }
  }

  /**
   * 管理员登出
   */
  async logout () {
    const { ctx } = this
    ctx.body = {
      message: '登出成功',
      code: 0
    }
  }
}

module.exports = AdminController
