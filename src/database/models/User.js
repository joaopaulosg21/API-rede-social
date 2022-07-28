const sequelize = require("../database");
const dataTypes = require("sequelize").DataTypes;

const User = sequelize.define("Users",{
    name:dataTypes.STRING,
    email:dataTypes.STRING,
    password:dataTypes.STRING,
    birthday:dataTypes.DATEONLY,
    profileImage:dataTypes.STRING
});

/* User.sync(); */

module.exports = User;