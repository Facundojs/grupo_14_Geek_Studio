"use strict";
module.exports = function (sequelize, dataTypes) {
  let alias = "User";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    first_name: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: dataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    telephone: {
      type: dataTypes.NUMBER,
      allowNull: false,
      unique: true,
    },

    avatar: dataTypes.STRING,

    country: {
      type: dataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    createdAt: {
      type: dataTypes.DATE,
    },
    updatedAt: {
      type: dataTypes.DATE,
    },
    deletedAt: {
      type: dataTypes.DATE,
    },
    user_type_id: {
      type: dataTypes.INTEGER,
    },
  };
  let config = {
    tableName: "users",
    timestamps: true,
    paranoid: true,
  };

  let User = sequelize.define(alias, cols, config);
  User.associate = (models) => {
    User.belongsTo(models.User_type, {
      as: "user_type",
      foreignKey: "user_type_id",
    });
  };
  return User;
};
