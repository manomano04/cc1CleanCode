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

function analyzeDices(dice) {
    const occurrence = countOccurrences(dice);
    const values = Object.values(occurrence);
    const max = Math.max(...Object.values(occurrence));
    if (max === 5) return FIGURES.YAMS
    if (max === 4) return FIGURES.CARRE;
    if (values.includes(3) && values.includes(2)) return FIGURES.FULL;
    if (max === 3) return FIGURES.BRELAN;

    const sumDice = dice.reduce((total, dice) => total + dice, 0);
    return sumDice;
}

export const test = (dices) => {
    let finalResult = 0;
    dices.forEach(dice => {
        finalResult += analyzeDices(dice);
    })
    return finalResult;
}


