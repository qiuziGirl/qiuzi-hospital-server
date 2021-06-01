module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize

  const Admin = app.model.define('admin', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(20),
    password: STRING(50),
    mobile: STRING(50),
    email: STRING(50),
    openId: STRING,
    role: STRING(20),
    createdAt: DATE,
    updatedAt: DATE,
    lastLoginTime: DATE,
    logined: { type: INTEGER, field: 'is_logined' },
    deletedAt: DATE,
    avatar: STRING
  })

  return Admin
}
