const sequelize = require("../database");
const dataTypes = require("sequelize").DataTypes;
const User = require("./User");

const Post = sequelize.define("Posts",{
    title:dataTypes.STRING,
    content:dataTypes.TEXT,
    image:dataTypes.STRING
});

User.hasMany(Post);
Post.sync();