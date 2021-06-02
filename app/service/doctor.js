const Service = require('egg').Service
const utility = require('utility')

class DoctorService extends Service {
  /**
   * 返回医生列表
   * @param {Object} query 请求体
   */
  async getList (query) {
    const { ctx, app } = this
    const { Op } = app.Sequelize
    const filterDoctors = {}

    if (query.logined) filterDoctors.logined = query.logined
    if (query.name) filterDoctors.name = { [Op.substring]: query.name }
    if (query.department) filterDoctors.department = query.department
    if (query.gender || query.gender === 0) filterDoctors.gender = query.gender
    if (query.departmentId) filterDoctors.departmentId = query.departmentId

    const doctors = await ctx.model.Doctor.findAndCountAll({
      attributes: [
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
        'hospital',
        'department',
        'departmentId',
        'avatar'
      ],
      where: filterDoctors,
      order: ['id'],
      limit: query.limit,
      offset: (query.page > 0 && query.limit > 0) ? query.limit * (query.page - 1) : query.limit
    })

    return doctors
  }

  /**
   * 根据 token 获取医生信息
   * @param {Object} query 请求参数
   */
  async getInfo (query) {
    const { ctx, app } = this
    const { id, name } = app.jwt.verify(query.token, app.config.jwt.secret)

    const admin = await ctx.model.Doctor.findOne({
      attributes: ['id', 'doctorId', 'name', 'mobile', 'email', 'avatar', 'introduce'],
      where: { id, name }
    })

    return admin
  }

  /**
   * 根据 id 更新医生信息
   * @param {number} id 医生 id
   * @param {Object} request 请求体
   */
  async updateDoctor (id, request) {
    const { ctx } = this
    return await ctx.model.Doctor.update({
      doctorId: request.doctorId,
      name: request.name,
      gender: request.gender,
      birth: request.birth,
      mobile: request.mobile,
      email: request.email,
      address: request.address,
      duty: request.duty,
      rank: request.rank,
      introduce: request.introduce,
      department: request.department,
      departmentId: request.departmentId,
      avatar: request.avatar
    }, { where: { id } })
  }

  /**
   * 添加一名医生
   * @param {Object} doctor 医生
   */
  async addDoctor (doctor) {
    const { ctx, app } = this
    return await ctx.model.Doctor.create({
      doctorId: doctor.doctorId,
      name: doctor.name,
      password: utility.md5(app.config.defaultPassword),
      gender: doctor.gender,
      birth: doctor.birth,
      mobile: doctor.mobile,
      address: doctor.address,
      duty: doctor.duty,
      rank: doctor.rank,
      introduce: doctor.introduce,
      department: doctor.department,
      departmentId: doctor.departmentId,
      avatar: doctor.avatar
    })
  }

  /**
   * 删除一名医生
   * @param {number} id 医生 id
   */
  async deleteDoctor (id) {
    const { ctx } = this
    return await ctx.model.Doctor.destroy({ where: { id } })
  }

  /**
   * 医生登录
   * @param {Object} request 请求体
   */
  async login (request) {
    const { ctx } = this
    const { name, mobile, password } = request
    const filterDoctor = {}

    if (name) filterDoctor.name = name
    if (mobile) filterDoctor.mobile = mobile

    filterDoctor.password = password

    const doctor = await ctx.model.Doctor.findOne({
      attributes: ['id', 'name'],
      where: filterDoctor
    })

    await doctor.update({ lastLoginTime: new Date() })

    return doctor
  }
}

module.exports = DoctorService
