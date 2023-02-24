import RaceData from "../scheme/race-data.js";
import { getAverageMistakes, getAverageSpeed } from "../utils/utils.js";

class RaceDataService {
  async createRaceData(raceData) {
    try {
      return await RaceData.create(raceData);
    } catch (err) {
      return err.toString();
    }
  }
  async getAverageValues(params, name) {
    const allRaces = await RaceData.find(params).sort({ date: 1 });
    const speed = allRaces.map(({ speed }) => speed);
    const mistakes = allRaces.map(({ mistakes }) => mistakes);
    const maxSpeed = Math.max(...speed);
    const minSpeed = Math.min(...speed);
    const maxMistakes = Math.max(...mistakes);
    const minMistakes = Math.min(...mistakes);
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
      maxSpeed,
      minSpeed,
      maxMistakes,
      minMistakes,
    };
  }
}

export default new RaceDataService();
