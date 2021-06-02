const Service = require('egg').Service
const utility = require('utility')

class PatientService extends Service {
  /**
   * 返回病人列表
   * @param {Object} query 请求参数
   */
  async getList (query) {
    const { ctx, app } = this
    const { Op } = app.Sequelize
    const filterPatients = {}

    if (query.gender || query.gender === 0) filterPatients.gender = query.gender
    if (query.remindFlow || query.remindFlow === 0) filterPatients.remindFlow = query.remindFlow
    if (query.remindVisit || query.remindVisit === 0) filterPatients.remindVisit = query.remindVisit
    if (query.remindMedication || query.remindMedication === 0) filterPatients.remindMedication = query.remindMedication
    if (query.logined || query.logined === 0) filterPatients.logined = query.logined
    if (query.name) filterPatients.name = { [Op.substring]: query.name }

    const patients = await ctx.model.Patient.findAndCountAll({
      attributes: [
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
        'remindMedication',
        'remindVisit',
        'logined',
        'lastLoginTime',
        'avatar'
      ],
      where: filterPatients,
      order: ['id'],
      limit: query.limit,
      offset: (query.page > 0 && query.limit > 0) ? query.limit * (query.page - 1) : query.limit
    })

    return patients
  }

  /**
   * 根据 token 获取病人信息
   * @param {Object} query 请求参数
   */
  async getInfo (query) {
    const { ctx, app } = this
    const { id, name } = app.jwt.verify(query.token, app.config.jwt.secret)

    const patient = await ctx.model.Patient.findOne({
      attributes: ['id', 'name', 'idCard', 'openId', 'address', 'avatar'],
      where: { id, name }
    })

    return patient
  }

  /**
   * 根据 id 更新病人信息
   * @param {number} id 就诊卡号
   * @param {Object} request 请求体
   */
  async updatePatient (id, request) {
    const { ctx } = this

    return await ctx.model.Patient.update(request, { where: { id } })
  }

  /**
   * 添加一名病人
   * @param {Object} request 请求体
   */
  async addPatient (request) {
    const { ctx, app } = this
    return await ctx.model.Patient.create({
      name: request.name,
      password: utility.md5(app.config.defaultPassword),
      gender: request.gender,
      birth: request.birth,
      mobile: request.mobile,
      idCard: request.idCard,
      addess: request.address,
      avatar: request.avatar
    })
  }

  /**
   * 删除一名病人
   * @param {number} id 就诊卡号
   */
  async deletePatient (id) {
    const { ctx } = this
    return await ctx.model.Patient.destroy({ where: { id } })
  }

  /**
   * 病人登录
   * @param {Object} request 请求体
   */
  async login (request) {
    const { ctx } = this
    const { mobile, smsCaptcha, password } = request
    const filterPatient = {}

    if (mobile) filterPatient.mobile = mobile
    if (smsCaptcha) filterPatient.captcha = smsCaptcha

    filterPatient.password = password

    const patient = await ctx.model.Patient.findOne({
      attributes: ['id', 'name'],
      where: filterPatient
    })

    if (patient) {
      await patient.update({ lastLoginTime: new Date() })

      return patient
    }

    return null
  }
}

module.exports = PatientService
