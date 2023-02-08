import { Router } from 'express';
import PostController from '../controller/PostController.js';
import RaceDataController from '../controller/RaceDataController.js';

const router = new Router();
router.post('/race', RaceDataController.create);
router.get('/races/:name', RaceDataController.getAllRaces);
router.post('/picture', RaceDataController.createPicture);
router.get('/pictures', RaceDataController.getPictures);
router.post('/posts', PostController.create);
router.get('/posts', PostController.getAll);
router.get('/posts/:id', PostController.getOne);
router.put('/posts/:id', PostController.update);
router.delete('/posts/:id', PostController.delete);

export default router;
