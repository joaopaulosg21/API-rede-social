function responseFunction(status,msg,res) {
    res.writeHead(status,{"Content-type":"application/json"});
    return res.end(JSON.stringify({message:msg}));
}

module.exports = responseFunction;