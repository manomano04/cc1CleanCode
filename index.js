function compterOccurrences(des) {
    return des.reduce((occurence, value) => {
        occurence[value] = (occurence[value] || 0) + 1;
        return occurence;
    }, {});
}

function analyzeDices(dice) {
    const occurrence = compterOccurrences(dice);
    const max = Math.max(...Object.values(occurrence));
    if (max === 5) return 50
    if (max === 4) return 35;
    if (max === 3) return 28;
}

export const test = (dices) => {
    let finalResult = 0;
    dices.forEach(dice => {
        finalResult += analyzeDices(dice);
    })
    return finalResult;
}


