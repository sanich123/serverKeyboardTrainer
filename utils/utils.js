export function getAverageMistakes(raceData) {
    return (
        raceData.reduce((total, { mistakes }) => total + mistakes, 0) /
        raceData.length
    ).toFixed(5);
}

export function getAverageSpeed(raceData) {
    return (
        raceData.reduce((total, { speed }) => total + speed, 0) /
        raceData.length
      ).toFixed(5);
}

