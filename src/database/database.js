const database = require("../config").database;
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(database);

sequelize.authenticate().then(()=>console.log("Conectado ao db")).catch((err)=>console.log(err));

module.exports = sequelize;