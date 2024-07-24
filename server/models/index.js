const dbConfig = require("../config/dbConfig");
const { Sequelize, DataTypes,Op } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
});

// Authenticate the sequelize to check that database properly connected or not
sequelize
  .authenticate()
  .then(() => {
    console.log("Connected successfully");
  })
  .catch((err) => {
    console.log("Database connection error " + err);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Op = Op;

db.items = require("./itemModel.js")(sequelize, DataTypes);

db.sequelize.sync({ force: false }).then(() => {
  console.log("Yes re-sync done !");
});

module.exports = db;
