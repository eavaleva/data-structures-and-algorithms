/**
 * Find Xth Number In Order
 * GetX
 *
 * Write a function, getX, that given an int x and a integer array num, returns the Xth number if the list was in sorted order.
 * In other words, the Xth smallest number.
 *
 * Function Name: getX
 *
 * Input: An integer, x, and an unsorted list of integers nums that aren’t necessarily distinct
 *
 * Output: The integer corresponding to the Xth number in the sorted list
 * */

function getX(x, nums) {
    // Write your code here
    let tempArray = nums.sort((a, b) => a - b);
    return tempArray[x - 1];
}

console.log(getX(2, [5, 10, -3, -3, 7, 9]));
console.log(getX(4, [5, 10, -3 ,-3, 7, 9]));

// Leave this so we can test your code:
module.exports = getX;
