const userRepository = require("../repository/userRepository");
const validateUser = require("../utils/validateUser");
class UserService {
    constructor() {
        this.repository = new userRepository();
    }

    async createUser(user) {
        try{
            await validateUser(user);
            await this.repository.create(user);
            return {status:201,msg:"User created"};
        }catch(error){
            return {status:500,msg:error};
            
        }
    }
}

module.exports = UserService;