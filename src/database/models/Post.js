const sequelize = require("../database");
const dataTypes = require("sequelize").DataTypes;
const User = require("./User");

const Post = sequelize.define("Posts",{
    title:dataTypes.STRING,
    content:dataTypes.TEXT,
    image:dataTypes.STRING,
    userId: {
        type:dataTypes.INTEGER,
        references:{
            model:User,
            key:"id"
        }
    }
});


/* User.hasMany(Post);
Post.belongsTo(User);
Post.sync({force:true}); */

module.exports = Post;