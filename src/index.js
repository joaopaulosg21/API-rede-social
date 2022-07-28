const url = require("url");
const userRoutes = require("./routes/userRoutes");
const port = require("./config").port;

const server = require("http").createServer((req,res)=>{
    const path = url.parse(req.url).pathname;
    if(path.split("/")[1] == "user"){
        return userRoutes(req,res)
    }
});

server.listen(port,()=>{
    console.log(`Servidor rodando na porta ${port}`);
});