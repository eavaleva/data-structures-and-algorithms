
function scoreSorter(array, topScore) {
    const reverseRange = n => {
        const a = [];
        let i = 0;
        while (a.length < n) {
            a.push(n - ++i);
        }
        return a;
    }
    const r = reverseRange(array.length)
    for (let i = 0; i < array.length - 1; i++) {
        r.pop();
        for (let j of r) {
            if (array[i] < array[j]) {
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
    }
    return array;
}

console.log(scoreSorter([1, 2, 3, 9999, 13], 10000))
// Leave this so we can test your code:
module.exports = scoreSorter;

// Another example here under

const scoreSorter = (array, _, currentIndex = 0) => {
    //Edge cases
    if (array.length === currentIndex) return array;

    for (let i = 0; i < array.length; i++) {
        if (array[i] < array[i + 1])
            [array[i], array[i + 1]] = [array[i + 1], array[i]];
    }
    return scoreSorter(array, _, currentIndex + 1);
};

console.log(scoreSorter([1, 2, 3, 999], 1000));

// Leave this so we can test your code:
module.exports = scoreSorter;


function scoreSorter(array, topScore) {
    array.sort((a,b) => b - a);
    return array;
}

console.log(scoreSorter([1, 2, 3, 9999, 13], 10000))
// Leave this so we can test your code:
module.exports = scoreSorter;
