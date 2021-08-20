import bcrypt from "bcryptjs";
import pkg from "sequelize";
const { DataTypes } = pkg;

const UserModel = (sequelize) => {
  const User = sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
      link: {
        type: DataTypes.STRING,
      },
      comment: {
        type: DataTypes.STRING,
      },
      sessions: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
      },
    },
    { timestamps: true }
  );

  User.beforeSave(async (user) => {
    if (!user.changed("password")) {
      return;
    }

    if (user.password) {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      user.password = hashedPassword;
    }
  });

  User.prototype.comparePassword = async function (plainPassword) {
    const passwordMatch = await bcrypt.compare(plainPassword, this.password);
    return passwordMatch;
  };

  return User;
};

export default UserModel;
