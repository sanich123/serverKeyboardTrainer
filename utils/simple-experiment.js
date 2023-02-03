import PostService from "../service/PostService.js";

export async function create(req, res) {
    try {
        const { body } = req;
        const post = await PostService.createPost(body);
        return res.json(post);
    } catch (e) {
        res.status(500).json(e);
    }
}