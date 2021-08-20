import pkg from "sequelize";
const { DataTypes } = pkg;

const SessionModel = (sequelize) => {
  const Session = sequelize.define(
    "session",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
      },
      leader: {
        type: DataTypes.INTEGER,
      },
      member: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
      },
      explain: {
        type: DataTypes.STRING,
      },
      goal: {
        type: DataTypes.STRING,
      },
      difficulty: {
        type: DataTypes.STRING,
      },
      credit: {
        type: DataTypes.INTEGER,
      },
      progress: {
        type: DataTypes.STRING,
      },
      notice: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: true }
  );

  return Session;
};

export default SessionModel;
