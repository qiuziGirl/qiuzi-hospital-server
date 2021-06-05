module.exports = app => {
  const { INTEGER, STRING, DATE, DATEONLY } = app.Sequelize

  const WorkPlan = app.model.define('work_plan', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    date: DATEONLY,
    stopReason: STRING,
    temp: { type: INTEGER, field: 'is_temp' },
    creater: INTEGER,
    house: STRING(20),
    maxAppointmentNum: INTEGER,
    remainingNum: INTEGER,
    addNumCreater: INTEGER,
    type: STRING,
    departmentId: INTEGER,
    doctorId: INTEGER,
    doctorName: STRING,
    startTime: STRING(50),
    endTime: STRING(50),
    stop: { type: INTEGER, field: 'is_stop' },
    createdAt: DATE,
    updatedAt: DATE,
    deletedAt: DATE
  })

  return WorkPlan
}
