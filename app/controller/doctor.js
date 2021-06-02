const Controller = require('egg').Controller

class DoctorController extends Controller {
  /**
   * 返回医生列表
   */
  async index () {
    const { ctx } = this
    ctx.validate({
      page: 'int?',
      limit: 'int?',
      name: 'string?',
      gender: 'int?',
      department: 'string?',
      departmentId: 'int?',
      logined: 'int?'
    }, ctx.query)
    const doctors = await ctx.service.doctor.getList(ctx.query)
    ctx.body = {
      code: 0,
      message: '请求成功',
      data: {
        total: doctors.count,
        doctors: doctors.rows
      }
    }
  }

  /**
   * 根据 token 获取医生信息
   */
  async getInfo () {
    const { ctx } = this
    ctx.validate({ token: 'string?' }, ctx.query)
    const doctor = await ctx.service.doctor.getInfo(ctx.query)

    ctx.body = {
      code: 0,
      message: '信息获取成功',
      data: doctor
    }
  }

  /**
   * 根据 id 获取医生信息
   */
  async show () {
    const { ctx } = this
    const id = ctx.params.id
    ctx.validate({ id: 'int?' }, id)
    const attributes = [
      'id',
      'doctorId',
      'name',
      'gender',
      'birth',
      'mobile',
      'email',
      'address',
      'duty',
      'rank',
      'introduce',
      'department',
      'avatar',
      'logined'
    ]

    const doctor = await ctx.model.Doctor.findOne({
      attributes,
      where: { doctorId: id }
    })

    ctx.body = {
      code: 0,
      message: '请求成功',
      data: doctor
    }
  }

  /**
   * 更新医生信息
   */
  async update () {
    const { ctx } = this
    ctx.validate({
      doctorId: 'string?',
      name: 'string?',
      email: 'string?',
      gender: 'int?',
      mobile: 'string?',
      address: 'string?',
      duty: 'string?',
      rank: 'string?',
      introduce: 'string?',
      department: 'string?',
      avatar: 'string?'
    }, ctx.request.body)
    await ctx.service.doctor.updateDoctor(ctx.params.id, ctx.request.body)
    ctx.body = {
      code: 0,
      message: '更新成功'
    }
  }

  /**
   * 新增一名医生
   */
  async create () {
    const { ctx } = this
    await ctx.service.doctor.addDoctor(ctx.request.body)
    ctx.body = {
      code: 0,
      message: '添加成功'
    }
  }

  /**
   * 删除一名医生
   */
  async destroy () {
    const { ctx } = this
    const id = ctx.params.id
    ctx.validate({ id: 'int?' }, id)
    const doctor = await ctx.model.Doctor.findByPk(id)
    if (!doctor) {
      ctx.status = 404
      return
    }

    await ctx.service.doctor.deleteDoctor(id)
    ctx.body = {
      code: 0,
      message: '删除成功'
    }
  }

  /**
   * 医生登录
   */
  async login () {
    const { ctx, app } = this
    ctx.validate({ name: 'string?', mobile: 'string?', password: 'string?' }, ctx.request.body)
    const doctor = await ctx.service.doctor.login(ctx.request.body)

    if (doctor) {
      const token = app.jwt.sign({ id: doctor.id, name: doctor.name }, app.config.jwt.secret, { expiresIn: '24h' })
      ctx.body = { code: 0, message: '登录成功', data: { token } }
    } else {
      ctx.body = { code: 4004, message: '登录失败' }
    }
  }

  /**
   * 医生登出
   */
  async logout () {
    const { ctx } = this
    ctx.body = {
      message: '登出成功',
      code: 0
    }
  }
}

module.exports = DoctorController
