const userRepository = require("../repository/userRepository");
const validate = require("../utils/validate");
const jwt = require("jsonwebtoken");
const secret = require("../config").secret;
class UserService {
    constructor() {
        this.repository = new userRepository();
    }

    async createUser(user) {
        try{
            await validate(user,"name","email","password","birthday");
            await this.repository.create(user);
            return {status:201,msg:"User created"};
        }catch(error){
            return {status:500,msg:error};
        }
    }

    async login(body) {
        try{
            await validate(body,"email","password");
            const user = await this.repository.login(body.email,body.password);
            if(user) {
                const token = jwt.sign({"id":user.id},secret);
                return {status:200,msg:token};
            }else{
                return {status:404,msg:"Incorrect email or password"}
            }
        }catch(error){
            return {status:500,msg:error};
        }
    }
}

module.exports = UserService;