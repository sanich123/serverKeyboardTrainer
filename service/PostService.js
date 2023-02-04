import Post from "../scheme/Post.js";

export async function createPost(post) {
  return await Post.create(post);
}
export async function getAllPosts() {
  return await Post.find();
}
export async function getOnePost(id) {
  return await Post.findById(id);
}
export async function updatePost(id, body) {
  return await Post.findByIdAndUpdate(id, body, { new: true });
}
export async function deletePost(id) {
  return await Post.findByIdAndDelete(id);
}
