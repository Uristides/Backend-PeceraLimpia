const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    'user',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        defaultValue: '',
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: '',
        isUrl: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      intermediaries: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      }, //intermediaries es terceros como; facebook o google
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      rol: {
        type: DataTypes.STRING,
        defaultValue: 'User',
        allowNull: false,
      },
      ubicacion: {
        type: DataTypes.STRING,
        defaultValue: [],
        allowNull: false,
      },
      cel: {
        type: DataTypes.INTEGER,
        defaultValue: [],
        allowNull: false,
      },
    },
    { timestamps: false },
  );
};
