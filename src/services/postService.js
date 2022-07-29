const postRepository = require("../repository/postRepository");
const userRepository = require("../repository/userRepository");
const jwt = require("jsonwebtoken");
const secret = require("../config").secret;
const validate = require("../utils/validate");

class PostService {
    constructor() {
        this.repository = new postRepository();
        this.userRepository = new userRepository();
    }

    async createPost(token,post) {
        try{
            await validate(post,"title","content");
            const decoded = jwt.verify(token,secret);
            const user = await this.userRepository.findUserById(decoded.id);
            await this.repository.create(post,user.dataValues.id);
            return {status:201,msg:"Post created"};
        }catch(error){
            return {status:500,msg:error};
        }
    }
}


module.exports = PostService;