const User = require("../database/models/User");
class UserRepository {
    constructor() {
        this.model = User;
    }

    async create(user) {
        return await this.model.create({
            name:user.name,
            email:user.email,
            password:user.password,
            birthday:user.birthday
        });
    }

    async login(email,password){
        return await this.model.findOne({where:{email:email,password:password}});
    }

    async findUserById(userId) {
        return await this.model.findOne({where:{id:userId}});
    }
}

module.exports = UserRepository;