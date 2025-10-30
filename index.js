const FIGURES = {
    YAMS: 50,
    GRANDE_SUITE: 40,
    CARRE: 35,
    FULL: 30,
    BRELAN: 28,
};
function countOccurrences(des) {
    return des.reduce((occurence, value) => {
        occurence[value] = (occurence[value] || 0) + 1;
        return occurence;
    }, {});
}

function isGrandeSuite(dices) {
    const sortedDices = dices.sort((a, b) => a - b);
    for (let i = 0; i < sortedDices.length - 1; i++) {
        if (sortedDices[i + 1] !== sortedDices[i] + 1) return false;
    }
    return true;
}

function analyzeDices(dices) {
    const occurrences = countOccurrences(dices);
    const values = Object.values(occurrences);
    const max = Math.max(...Object.values(occurrences));
    if (max === 5) return FIGURES.YAMS
    if (max === 4) return FIGURES.CARRE;
    if (isGrandeSuite(dices)) return FIGURES.GRANDE_SUITE;
    if (values.includes(3) && values.includes(2)) return FIGURES.FULL;
    if (max === 3) return FIGURES.BRELAN;

    const sumDices = dices.reduce((total, dice) => total + dice, 0);
    return sumDices;
}

export const test = (dices) => {
    let finalResult = 0;
    dices.forEach(dice => {
        finalResult += analyzeDices(dice);
    })
    return finalResult;
}