module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize

  const Hospital = app.model.define('hospital', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(50),
    level: INTEGER,
    manager: STRING(30),
    tel: STRING(30),
    address: STRING,
    createdAt: DATE,
    updatedAt: DATE,
    deletedAt: DATE
  })

  return Hospital
}
