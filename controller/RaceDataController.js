import RaceData from "../scheme/RaceData.js";
import RaceDataService from "../service/RaceDataService.js";
import { ERR_MSG } from "../utils/const.js";
import FileService from "../service/FileService.js";
import Image from "../scheme/Image.js";

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
      const image = await Image.create({picture: fileName});
      return res.json(image);
    } catch (error) {
      res.status(500).json(ERR_MSG);
    }
  }
  async getPictures(req, res) {
    const images = await Image.find();
    res.json(images);
  }
}

export default new RaceDataController();
