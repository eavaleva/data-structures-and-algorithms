function statsFinder(array) {
    const add = (a, b) => a + b
    const mean = array.reduce(add) / array.length
    const hist = {}
    for (let x of array) {
        hist[x] = 1 + (hist[x] || 0)
    }
    let mode = ''
    let count = 0
    for (let x of array.reverse()) {
        if (hist[x] >= count) {
            mode = x
            count = hist[x]
        }
    }
    return [mean, mode]
}

console.log(statsFinder([500, 400, 400, 375, 300, 350, 325, 300]))

// Leave this so we can test your code:
module.exports = statsFinder;
