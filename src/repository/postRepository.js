const Post = require("../database/models/Post");

class PostRepository {
    constructor() {
        this.model = Post;
    }

    async create(post,UserId) {
        return await this.model.create({
            title:post.title,
            content:post.content,
            image:post.image,
            userId:UserId
        });
    }
}

module.exports = PostRepository;