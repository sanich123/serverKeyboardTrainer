const expressRouter = require('express');
const RaceDataController = require('../controller/race-data-controller.js');

const router = new expressRouter();
router.post('/race', RaceDataController.create);
router.get('/races/:name', RaceDataController.getAllRaces);
router.post('/picture', RaceDataController.createPicture);
router.get('/pictures', RaceDataController.getPictures);
router.delete('/pictures', RaceDataController.deletePictures);

module.exports = router;
