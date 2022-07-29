const Post = require("../database/models/Post");

class PostRepository {
    constructor() {
        this.model = Post;
    }

    async create(post) {
        return await this.model.create({
            title:post.title,
            content:post.content,
            image:post.image,
            UserId:post.UserId
        });
    }
}

module.exports = PostRepository;