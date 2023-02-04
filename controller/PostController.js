import {
  createPost,
  getAllPosts,
  getOnePost,
  updatePost,
  deletePost,
} from "../service/PostService.js";
import { ERR_MSG } from "../utils/const.js";

export async function controllerCreatePost(req, res) {
  try {
    const { body } = req;
    const post = await createPost(body);
    return res.json(post);
  } catch (e) {
    res.status(500).json(e);
  }
}
export async function controllerGetAll(req, res) {
  try {
    const posts = await getAllPosts();
    return res.json(posts);
  } catch (e) {
    res.status(500).json(e);
  }
}
export async function controllerGetOne(req, res) {
  try {
    const { params } = req;
    const { id } = params;
    if (!id) {
      res.status(400).json(ERR_MSG)
    }
    const post = await getOnePost(id);
    return res.json(post);
  } catch (e) {
    res.status(500).json(e);
  }
}
export async function controllerUpdatePost(req, res) {
  try {
    const { params, body } = req;
    const { id } = params;
    if (!id) {
      res.status(400).json(ERR_MSG)
    }
    const updatedPost = await updatePost(id, body);
    return res.json(updatedPost);
  } catch (e) {
    res.status(500).json(e);
  }
}
export async function controllerDeletePost(req, res) {
  try {
    const { params } = req;
    const { id } = params;
    if (!id) {
      res.status(400).json(ERR_MSG)
    }
    const deletedPost = await deletePost(id);
    return res.json(deletedPost);
  } catch (e) {
    res.status(500).json(e);
  }
}
