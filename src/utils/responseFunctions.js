function responseFunction(res) {
    function response(status,msg) {
        res.writeHead(status,{"Content-type":"application/json"});
        return res.end(JSON.stringify({message:msg}));
    }

    return response;
}

module.exports = responseFunction;