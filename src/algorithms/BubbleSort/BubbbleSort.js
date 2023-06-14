/***
 * Loops
 *
 * In order to sort an array, we’ll need to visit pairs of elements and check if they should be moved or kept at their current index.
 * To accomplish this we’ll use two loops:
 *
 *     One loop that will execute an inner loop depending on the state of a variable representing whether the input array might be sorted or not
 *     An inner loop to compare and swap pairs of elements in the array
 */

/** PART TWO COMPARE
 *
 * We have a loop to run our algorithm, and another that visits each element in the input array
 * but if we were to run this as is, it would only iterate through the array once.
 *
 * Let’s add some additional logic to our code in the bubbleSort.js file that will compare neighboring elements and
 * swap them if necessary.
 * For this exercise, you’ll only be adding code inside of the for loop of bubbleSort().
 * */
const swap = require('./swap');

const bubbleSort = input => {
    let swapCount = 0;
    let swapping = true;

    while (swapping) {
        swapping = false;
        for (let i = 0; i < input.length - 1; i++) {
            if(input[i] > input[i + 1]) {
                console.log(`Swapping pair ${input[i]}, ${input[i+1]} in [${input}]`);
                swap(input, i, i + 1);
                swapCount++;
                swapping = true;
            }
        }
    }
    console.log(`Swapped ${swapCount} times`);
    return input;
};

module.exports = bubbleSort;


// TEST YOUR WORK

const arr1 = [9, 8, 7, 6, 5, 4, 3, 2, 1,9, 8, 7, 6, 5, 4, 3, 2, 1,9, 8, 7, 6, 5, 4, 3, 2, 1,9, 8, 7, 6, 5, 4, 3, 2, 1];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr3 = [4, 3, 2, 1];
const arr4 = [10, 8, 11, 34, 52, 42, 20, 4];
// bubbleSort(arr1);
// bubbleSort(arr2);
// bubbleSort(arr3);
bubbleSort(arr4);

