import Post from "../scheme/Post.js";

class PostService {
  async createPost(post) {
    return await Post.create(post);
  }
  async getAll() {
    return await Post.find();
  }
  async getOne(id) {
    return await Post.findById(id);
  }
  async updatePost(id, body) {
    return await Post.findByIdAndUpdate(id, body, { new: true });
  }
  async delete(id) {
    return await Post.findByIdAndDelete(id);
  }
}

export default new PostService();
