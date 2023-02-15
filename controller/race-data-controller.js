const RaceDataService = require("../service/race-data-service.js");
const ERR_MSG = require('../utils/const.js');
const FileService = require('../service/file-service.js');
const Image = require('../scheme/image.js');

class RaceDataController {
  async create(req, res) {
    try {
      const { body } = req;
      const raceData = await RaceDataService.createRaceData(body);
      res.json(raceData);
    } catch (error) {
      res.status(500).json(e);
    }
  }
  async getAllRaces(req, res) {
    try {
      const { params } = req;
      const { name } = params;
      const statisticData = await RaceDataService.getAverageValues(params, name);
      res.json(statisticData);
    } catch (error) {
      res.status(500).json(ERR_MSG);
    }
  }
  async createPicture(req, res) {
    try {
      console.log(req.body, req.files)
      const { files } = req;
      const { picture } = files;
      
      const fileName = FileService.saveFile(picture);
      const image = await Image.create({ picture: fileName });
      res.json(image);
    } catch (error) {
      res.status(500).json(ERR_MSG);
    }
  }
  async getPictures(req, res) {
    try {
      const images = await Image.find();
      res.json(images);
    } catch (error) {
      res.status(500).json(ERR_MSG);
    }
  }
  async deletePictures(req, res) {
    try {
      await Image.deleteMany({});
      const images = await Image.find();
      res.json(images);
    } catch (error) {
      res.status(500).json(ERR_MSG);
    }
  }
}

module.exports = new RaceDataController();
