
const sieveOfEratosthenes = (limit) => {
    // Step 1: Create the Array
    const output = new Array(limit + 1).fill(true)
    output[0] = false;
    output[1] = false;

    // Step 2: Interate
    for (let i = 2; i <= limit; i++) {
        if (output[i] === true){
            for (let j = i * 2; j <= limit; j = j + i) {
                output[j] = false;
            }
        }
    }
}


// Step 3: Return Values

const findTrueIndices = (arr) => {
    /**
     * Complete the findTrueIndices() function.
     * It should have a single parameter (an array), and return a new array of all indices in the input that are true.
     * For instance,
     * [false, false, true, true, false, true, false, true]
     * should return [2, 3, 5, 7].
     * You can assume that all array elements will be either true or false.
     */
    const result = [];
    arr.forEach((value, index) => {
        if (value === true) {
            result.push(index);
        }
    });
    return result;

}


const test = findTrueIndices([false, false, true, true, false, true, false, true]);
// should return [2, 3, 5, 7]
console.log(test);

// Leave this line for testing:
module.exports = findTrueIndices;
