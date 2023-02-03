import { Router } from 'express';
import PostController from '../controller/PostController.js';
import { create } from '../utils/simple-experiment.js';
const router = new Router();
router.post('/posts', create);
// router.post('/posts', PostController.create);
router.get('/posts', PostController.getAll);
router.get('/posts/:id', PostController.getOne);
router.put('/posts/:id', PostController.update);
router.delete('/posts/:id', PostController.delete);

export default router;
