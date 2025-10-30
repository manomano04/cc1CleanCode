const FIGURES = {
    YAMS: { name: "Yams", points: 50 },
    GRANDE_SUITE: { name: "Grande suite", points: 40 },
    CARRE: { name: "Carré", points: 35 },
    FULL: { name: "Full", points: 30 },
    BRELAN: { name: "Brelan", points: 28 },
};
function compterOccurrences(des) {
    return des.reduce((occurence, value) => {
        occurence[value] = (occurence[value] || 0) + 1;
        return occurence;
    }, {});
}

function analyzeDices(dice) {
    const occurrence = compterOccurrences(dice);
    const values = Object.values(occurrence);
    const max = Math.max(...Object.values(occurrence));
    if (max === 5) return 50
    if (max === 4) return 35;
    if (values.includes(3) && values.includes(2)) return 30;
    if (max === 3) return 28;

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


