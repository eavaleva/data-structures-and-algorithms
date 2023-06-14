/**
 * ## Swap
 *
 * An essential part of bubble sort is the “swapping” of pairs of unsorted elements.
 * This animation illustrates how the swap() function of the bubble sort algorithm should work:
 * */
const swap = (arr, indexOne, indexTwo) => {
    // create a temporary variable that hold the value of th array index two
    const temp = arr[indexTwo];
    // assign the array index of on to array index two.
    arr[indexTwo] = arr[indexOne];
    // then assign the temporary variable to array index two
    arr[indexOne] = temp;
};

module.exports = swap;
