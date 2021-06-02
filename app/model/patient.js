module.exports = app => {
  const { STRING, INTEGER, DATE, DATEONLY } = app.Sequelize

  const Patient = app.model.define('patient', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(50),
    gender: INTEGER,
    birth: DATEONLY,
    password: STRING(50),
    mobile: STRING(50),
    email: STRING(50),
    idCard: STRING(30),
    openId: STRING,
    address: STRING,
    remindFlow: INTEGER,
    remindMedication: INTEGER,
    remindVisit: INTEGER,
    logined: { type: INTEGER, field: 'is_logined' },
    avatar: STRING,
    lastLoginTime: DATE,
    createdAt: DATE,
    updatedAt: DATE,
    deletedAt: DATE
  })

  return Patient
}
