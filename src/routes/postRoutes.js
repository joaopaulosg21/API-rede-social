const url = require("url");
const postService = require("../services/postService");
const responseFunction = require("../utils/responseFunctions");
function routes(req,res) {

    const method = req.method;
    const pathname = url.parse(req.url).pathname;
    const path = pathname.split("/")[2];
    const service = new postService();
    const response = responseFunction(res);

    if(method == "POST" && path == "new") {
        if(req.headers["authorization"]){
            const token = req.headers["authorization"].split(" ")[1];
            req.on("data",async(data)=>{
                const body = JSON.parse(data.toString());
                const serviceResponse = await service.createPost(token,body);
                return response(serviceResponse.status,serviceResponse.msg);
            });
        } else {
            response(401,"Must be logged in")
        }
    }

}

module.exports = routes;