import RaceDataService from "../service/race-data-service.js";
import { DATA_BASE, DATE_ERR, ERR_MSG, MISTAKES_ERR, NAME_ERR, SPEED_ERR, VALID_REQUEST } from "../utils/const.js";
import FileService from "../service/file-service.js";
import Image from "../scheme/Image.js";

class RaceDataController {
  async create(req, res) {
    try {
      const { body } = req;
      const { name, date, mistakes, speed } = body;
      if (!name) return res.status(400).json(NAME_ERR);
      if (!speed) return res.status(400).json(SPEED_ERR);
      if (mistakes === '') return res.status(400).json(MISTAKES_ERR);
      if (isNaN(Date.parse(date))) return res.status(400).json(DATE_ERR); 
      const raceData = await RaceDataService.createRaceData(body);
      if (!raceData) {
        return res.status(500).json(DATA_BASE)
      }
      res.json(raceData);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getAllRaces(req, res) {
    try {
      const { params } = req;
      const { name } = params;
      const statisticData = await RaceDataService.getAverageValues(
        params,
        name
      );
      res.json(statisticData);
    } catch (error) {
      res.status(500).json(ERR_MSG);
    }
  }
  async createPicture(req, res) {
    try {
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

export default new RaceDataController();
