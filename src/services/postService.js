const postRepository = require("../repository/postRepository");

class PostService {
    constructor() {
        this.repository = new postRepository();
    }

    createPost(post,token) {
        
    }
}