const url = require("url");
const userService = require("../services/userService");
const responseFunction = require("../utils/responseFunctions");

function routes(req,res) {
    const method = req.method;
    const pathname = url.parse(req.url).pathname;
    const path = pathname.split("/")[2];
    const service = new userService();
    const response = responseFunction(res);

    if(method == "POST" && path == "new") {
        req.on("data",async(data)=>{
            const body = JSON.parse(data.toString());
            const serviceResponse = await service.createUser(body);
            return response(serviceResponse.status,serviceResponse.msg);
        });
    }

    if(method == "POST" && path == "login") {
        req.on("data",async(data)=>{
            const body = JSON.parse(data.toString());
            const serviceResponse = await service.login(body.email,body.password);
            return response(serviceResponse.status,serviceResponse.msg);
        })
    }
}
module.exports = routes;