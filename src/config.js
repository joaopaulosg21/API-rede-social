require("dotenv").config();
module.exports = {
    database:process.env.DATABASE,
    port:parseInt(process.env.PORT),
    secret:process.env.SECRET
}