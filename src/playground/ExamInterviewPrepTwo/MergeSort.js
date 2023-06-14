/**
 * The Merge Sort algorithm sorts data by splitting it into smaller components and re-combining them.
 * The code below is incomplete and does not sort data. Identify the missing portion of the code and complete the algorithm.
 */


const merge = require('./merge');
//To call merge: merge(leftArray, rightArray);

const mergeSort = (startArray) => {
    const length = startArray.length;
    if (length === 1) {
        return startArray;
    }

    const mid = Math.floor(length / 2);
    const leftArray = startArray.slice(0, mid);
    const rightArray = startArray.slice(mid, length);

    mergeSort(leftArray);
    mergeSort(rightArray);
    return merge(mergeSort(leftArray), mergeSort(rightArray));
};

const inputArr = [8, 9, 4, 5, 3];

console.log(mergeSort(inputArr));

module.exports = {
    mergeSort
};