module.exports = app => {
  const { INTEGER, DATE, DECIMAL } = app.Sequelize

  const Quota = app.model.define('quota', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    patientId: INTEGER,
    time: DATE,
    weight: DECIMAL(10, 2),
    waist: DECIMAL(10, 2),
    hipline: DECIMAL(10, 2),
    randomBlood: DECIMAL(10, 2),
    fastingBlood: DECIMAL(10, 2),
    systolicPressure: DECIMAL(10, 2),
    diastolicPressure: DECIMAL(10, 2),
    temperature: DECIMAL(10, 2),
    createdAt: DATE,
    updatedAt: DATE,
    deletedAt: DATE
  })

  return Quota
}
