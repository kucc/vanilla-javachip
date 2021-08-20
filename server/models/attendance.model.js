import pkg from "sequelize";
const { DataTypes } = pkg;

const AttendanceModel = (sequelize) => {
  const Attendance = sequelize.define(
    "attendance",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: {
        type: DataTypes.INTEGER,
      },
      sessionId: {
        type: DataTypes.INTEGER,
      },
      studyId: {
        type: DataTypes.INTEGER,
      },
      attendances: {
        type: DataTypes.JSON,
      },
    },
    { timestamps: true }
  );

  return Attendance;
};

export default AttendanceModel;
