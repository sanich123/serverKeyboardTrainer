import { Router } from 'express';
import RaceDataController from '../controller/race-data-controller.js';

const router = new Router();
router.post('/race', RaceDataController.create);
router.get('/races/:name', RaceDataController.getAllRaces);
router.post('/picture', RaceDataController.createPicture);
router.get('/pictures', RaceDataController.getPictures);
router.delete('/pictures', RaceDataController.deletePictures);

export default router;
