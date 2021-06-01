module.exports = app => {
  const { STRING, INTEGER, DATE, DATEONLY } = app.Sequelize

  const Appointment = app.model.define('appointment', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    workPlanId: INTEGER,
    cardNo: INTEGER,
    patientName: STRING(20),
    department: STRING(20),
    departmentId: INTEGER,
    doctorId: INTEGER,
    doctorName: STRING(20),
    house: STRING(20),
    date: DATEONLY,
    startTime: DATE,
    endTime: DATE,
    cancel: { type: INTEGER, field: 'is_cancel' },
    cancelReason: STRING,
    createdAt: DATE,
    updatedAt: DATE,
    avatar: STRING,
    status: INTEGER
  })

  return Appointment
}
