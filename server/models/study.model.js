import pkg from "sequelize";
const { DataTypes } = pkg;

const StudyModel = (sequelize) => {
  const Study = sequelize.define(
    "study",
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
      goal: {
        type: DataTypes.STRING,
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

  return Study;
};

export default StudyModel;
