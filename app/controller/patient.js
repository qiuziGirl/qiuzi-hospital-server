const Controller = require('egg').Controller

class PatientController extends Controller {
  /**
   * 返回病人列表
   */
  async index () {
    const { ctx } = this
    ctx.validate({
      page: 'int?',
      limit: 'int?',
      name: 'string?',
      gender: 'int?',
      remindFlow: 'int?',
      remindVisit: 'int?',
      remindMedication: 'int?',
      logined: 'int?'
    }, ctx.query)

    const patients = await ctx.service.patient.getList(ctx.query)
    ctx.body = {
      code: 0,
      message: '请求成功',
      data: {
        total: patients.count,
        patients: patients.rows
      }
    }
  }

  /**
   * 根据 token 获取病人信息
   */
  async getInfo () {
    const { ctx } = this
    ctx.validate({ token: 'string?' }, ctx.query)
    const patient = await ctx.service.patient.getInfo(ctx.query)

    ctx.body = {
      code: 0,
      message: '信息获取成功',
      data: patient
    }
  }

  /**
   * 根据 id 获取病人信息
   */
  async show () {
    const { ctx } = this
    const id = ctx.params.id
    ctx.validate({ id: 'int?' })
    const attributes = [
      'id',
      'name',
      'gender',
      'password',
      'birth',
      'mobile',
      'email',
      'idCard',
      'address',
      'remindFlow',
      'remindVisit',
      'remindMedication',
      'logined',
      'lastLoginTime',
      'avatar'
    ]

    const patient = await ctx.model.Patient.findOne({
      attributes,
      where: { id }
    })

    ctx.body = {
      code: 0,
      message: '请求成功',
      data: patient
    }
  }

  /**
   * 根据 id 更新病人信息
   */
  async update () {
    const { ctx } = this

    await ctx.service.patient.updatePatient(ctx.params.id, ctx.request.body)
    ctx.body = {
      code: 0,
      message: '更新成功'
    }
  }

  /**
   * 新增一名病人
   */
  async create () {
    const { ctx } = this
    ctx.validate({
      name: 'string?',
      gender: 'int?',
      birth: 'string?',
      mobile: 'string?',
      idCard: 'string?',
      address: 'string?',
      avatar: 'string?'
    }, ctx.request.body)
    await ctx.service.patient.addPatient(ctx.request.body)
    ctx.body = {
      code: 0,
      message: '添加成功'
    }
  }

  /**
   * 删除一名病人
   */
  async destroy () {
    const { ctx } = this
    const id = ctx.params.id
    ctx.validate({ id: 'int?' })
    const patient = await ctx.model.Patient.findByPk(id)
    if (!patient) {
      ctx.status = 404
      return
    }

    await ctx.service.patient.deletePatient(id)
    ctx.body = {
      code: 0,
      message: '删除成功'
    }
  }

  /**
   * 病人登录
   */
  async login () {
    const { ctx, app } = this
    ctx.validate({ mobile: 'string?', smsCaptcha: 'string?', password: 'string?' }, ctx.request.body)
    const patient = await ctx.service.patient.login(ctx.request.body)

    if (patient) {
      const token = app.jwt.sign({ id: patient.id, name: patient.name }, app.config.jwt.secret, { expiresIn: '24h' })
      ctx.body = { data: { token }, message: '登录成功', code: 0 }
    } else {
      ctx.body = { message: '账号或密码错误', code: 4004 }
    }
  }

  /**
   * 病人登出
   */
  async logout () {
    const { ctx } = this
    ctx.body = {
      message: '登出成功',
      code: 0
    }
  }
}

module.exports = PatientController
