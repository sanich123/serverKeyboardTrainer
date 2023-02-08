import RaceData from "../scheme/RaceData";

class RaceDataService {
    async createRaceData(raceData) {
        return await RaceData.create(raceData);
    }
}

export default new RaceDataService();