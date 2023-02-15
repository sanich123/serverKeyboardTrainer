import Post from "../scheme/Post.js";
import { ERR_MSG } from "../utils/const.js";
import PostService from "../service/PostService.js";

class PostController {
  async create(req, res) {
    try {
      const { body } = req;
      const post = await PostService.createPost(body);
      return res.json(post);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async getAll(req, res) {
    try {
      const posts = await PostService.getAll();
      return res.json(posts);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async getOne(req, res) {
    try {
      const { params } = req;
      const { id } = params;
      if (!id) {
        res.status(400).json({ message: ERR_MSG });
      }
      const post = await PostService.getOne(id);
      return res.json(post);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async update(req, res) {
    try {
      const { params, body } = req;
      const { id } = params;
      if (!id) {
        res.status(400).json({ message: ERR_MSG });
      }
      const updatedPost = await PostService.updatePost(id, body);
      return res.json(updatedPost);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async delete(req, res) {
    try {
      const { params } = req;
      const { id } = params;
      if (!id) {
        res.status(400).json({ message: ERR_MSG });
      }
      const deletedPost = await PostService.delete(id);
      return res.json(deletedPost);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new PostController();
