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
}

module.exports = UserRepository;