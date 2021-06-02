module.exports = app => {
  const { INTEGER, STRING, DATE, DATEONLY } = app.Sequelize
  const Doctor = app.model.define('doctor', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    doctorId: {
      type: STRING(50),
      unique: true,
      allowNull: false
    },
    name: {
      type: STRING(20),
      unique: true,
      allowNull: false
    },
    gender: {
      type: INTEGER
    },
    birth: {
      type: DATEONLY
    },
    password: {
      type: STRING(50)
    },
    mobile: {
      type: STRING(50)
    },
    email: {
      type: STRING(50)
    },
    openId: {
      type: STRING(255)
    },
    address: {
      type: STRING(255)
    },
    duty: {
      type: STRING(50)
    },
    rank: {
      type: STRING(50)
    },
    introduce: {
      type: STRING(255)
    },
    department: {
      type: STRING(20)
    },
    departmentId: {
      type: STRING(255)
    },
    consult: {
      type: INTEGER,
      field: 'is_consult'
    },
    workPlace: {
      type: STRING(255)
    },
    createdAt: {
      type: DATE
    },
    updatedAt: {
      type: DATE
    },
    deletedAt: {
      type: DATE
    },
    lastLoginTime: {
      type: DATE
    },
    logined: {
      type: INTEGER,
      field: 'is_logined'
    },
    avatar: {
      type: STRING
    },
    hospital: {
      type: STRING(50)
    },
    hospitalId: {
      type: STRING
    }
  })

  return Doctor
}
