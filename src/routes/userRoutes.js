const url = require("url");
const userService = require("../services/userService");
const responseFunction = require("../utils/responseFunctions");

function routes(req,res) {
    const method = req.method;
    const pathname = url.parse(req.url).pathname;
    const path = pathname.split("/")[2];
    const service = new userService();

    if(method == "POST" && path == "new") {
        req.on("data",async(data)=>{
            const body = JSON.parse(data.toString());
            const response = await service.createUser(body);
            return responseFunction(response.status,response.msg,res);
        });
    }
}
module.exports = routes;