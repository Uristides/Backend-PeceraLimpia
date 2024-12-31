const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_DEPLOY } = process.env;

const sequelize = DB_DEPLOY
  ? new Sequelize(DB_DEPLOY, {
      logging: false,
      native: false,
      dialectOptions: {
        connectTimeout: 60000,
      },
      pool: {
        max: 5,
        min: 0,
        acquire: 60000,
        idle: 10000,
      },
    })
  : new Sequelize(
      `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
      {
        logging: false,
        native: false,
        dialectOptions: {
          connectTimeout: 60000,
        },
        pool: {
          max: 5,
          min: 0,
          acquire: 60000,
          idle: 10000,
        },
      },
    );

module.exports = sequelize;
