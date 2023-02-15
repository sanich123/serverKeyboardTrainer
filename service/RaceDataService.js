import RaceData from "../scheme/RaceData.js";
import { getAverageMistakes, getAverageSpeed } from "../utils/utils.js";

class RaceDataService {
  async createRaceData(raceData) {
    return await RaceData.create(raceData);
  }
  async getAverageValues(params, name) {
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
    return {
      name,
      averageSpeed,
      averageMistakes,
      amountOfRaces: allRaces.length,
      firstRace,
      lastTenRaces,
    };
  }
}

export default new RaceDataService();
