const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length;

    while (right > left) {
        const indexToCheck = Math.floor((left + right) / 2);
        const checking = arr[indexToCheck];
        console.log(indexToCheck);

        if (checking === target) {
            return indexToCheck;
        } else if (checking < target) {
            left = indexToCheck + 1;
        } else {
            right = indexToCheck;
        }
    }

    return null;
}

const searchable = [1, 2, 7, 8, 22, 28, 41, 58, 67, 71, 94];
const target = 41;

targetIndex = binarySearch(searchable, target);

console.log(`The target index is ${targetIndex}.`);

module.exports = binarySearch;

/**
 * Review
 *
 * In this lesson, you learned how to implement an iterative binary search solution.
 * The function returns the index of the target value from a sorted list.
 * If the target value is not found, the function returns null. You used the following steps to create this function:
 *
 *     Initialize the left and right indices as 0 and the length of the array.
 *     Create a while loop that continues to execute until the left index equals the right index.
 *     Get the value at the index that falls in the middle of left and right.
 *     Return the index if the value is equal to target.
 *     Set left equal to the current index plus one if the target is greater than the value.
 *     Set right equal to the current index if the target is less than the value.
 *
 * While the benefits of binary search are significant compared to linear search,
 * it’s important to remember that the function will only work on sorted lists.
 * Instructions
 *
 * The gif below is a visual representation of the binary search solution that you implemented.
 * Compare this gif to the code in index.js.
 * You should see that indexToCheck is equal to the same numbers checked in the gif: 5, 8, 7, 6.
 * */
