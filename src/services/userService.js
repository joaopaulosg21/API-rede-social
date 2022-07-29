const userRepository = require("../repository/userRepository");
const validate = require("../utils/validate");
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

    async login(email,password) {
        try{
            await validate({email:email,password:password},"email","password");
            const user = await this.repository.login(email,password);
            return {status:200,msg:"Login bem sucedido"};
        }catch(error){
            return {status:500,msg:error};
        }
    }
}

module.exports = UserService;