import RaceData from "../scheme/RaceData.js";
import { ERR_MSG } from "../utils/const.js";
import { getAverageMistakes, getAverageSpeed } from "../utils/utils.js";

class RaceDataController {
  async create(req, res) {
    try {
      const { body } = req;
      const raceData = await RaceData.create(body);
      res.json(raceData);
    } catch (error) {
      res.status(500).json(e);
    }
  }

  async getAllRaces(req, res) {
    try {
      const { params } = req;
      const { name } = params;
      const allRaces = await RaceData.find(params).sort({ date: 1 });
      const averageMistakes = getAverageMistakes(allRaces);
      const averageSpeed = getAverageSpeed(allRaces);
      let lastTenRaces;
      if (allRaces.length > 10) {
        lastTenRaces = allRaces.slice(allRaces.length - 10);
      } else {
        lastTenRaces = allRaces;
      }
      const firstRace = allRaces[0].date;

      res.json({
        name,
        averageSpeed,
        averageMistakes,
        amountOfRaces: allRaces.length,
        firstRace,
        lastTenRaces,
      });
    } catch (error) {
      res.status(500).json(ERR_MSG);
    }
  }
}

export default new RaceDataController();
