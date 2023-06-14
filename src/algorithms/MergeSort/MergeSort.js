const mergeSort = (startArray) => {
    const length = startArray.length;
    if (length === 1) {
        console.log(startArray);
        return startArray;
    }
    // find the median of th array
    const mid = Math.floor(length / 2)
    // separate the left array to hold all elements up to the median
    const leftArray = startArray.slice(0, mid);
    // separate the right array to hold all elements from the mid until the end of ht length of the array.
    const rightArray = startArray.slice(mid, length)
    // Call the function recursevely until they are no more elements to split in two
    mergeSort(leftArray);
    mergeSort(rightArray);
    return merge(mergeSort(leftArray), mergeSort(rightArray));
}

// Call merge() from mergeSort() Merging
const merge = (leftArray, rightArray) => {
    const sortedArray = []
    while(leftArray.length > 0 && rightArray.length > 0){
        if(leftArray[0] < rightArray[0]){
            sortedArray.push(leftArray[0])
            leftArray.shift(rightArray[0]);
        }
        else {
            sortedArray.push(rightArray[0])
            rightArray.shift(rightArray[0])
        }
    }
    return sortedArray.concat(leftArray).concat(rightArray)
}


const inputArr = [3, 5, 2, 90, 4, 7];
const arr4 = [10, 8, 11, 34, 52, 42, 20, 4];

console.log(mergeSort(inputArr));


module.exports = {
    mergeSort
};
