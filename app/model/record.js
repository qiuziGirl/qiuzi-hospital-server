module.exports = app => {
  const { STRING, INTEGER, DATE, DATEONLY, DECIMAL } = app.Sequelize

  const Record = app.model.define('record', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    department: STRING(50),
    doctorId: INTEGER,
    doctorName: STRING(20),
    cardNo: INTEGER,
    patientName: STRING(20),
    date: DATEONLY,
    time: DATE,
    result: STRING,
    acutecomplication: STRING,
    fastingbloodsugar: DECIMAL(10, 2),
    afterbloodsugar: DECIMAL(10, 2),
    auxcheck: STRING,
    complication: STRING,
    followdisease: STRING,
    heartrate: DECIMAL(10, 2),
    alleryHistory: STRING,
    bodyCheck: STRING,
    curDisease: STRING,
    diseaseDescribe: STRING,
    diseaseHistory: STRING,
    doctorSuggestion: STRING,
    selfTalk: STRING,
    breathe: DECIMAL(10, 2),
    change: { type: INTEGER, field: 'have_change' },
    changeReason: STRING,
    read: { type: INTEGER, field: 'is_read' },
    createdAt: DATE,
    updatedAt: DATE,
    deletedAt: DATE
  })

  return Record
}
