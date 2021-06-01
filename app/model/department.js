module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize

  const Department = app.model.define('department', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(50),
    introduce: STRING,
    createdAt: DATE,
    updatedAt: DATE,
    deletedAt: DATE
  })

  return Department
}
