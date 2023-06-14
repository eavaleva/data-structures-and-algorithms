 // Sorting with Custom Comparator Functions

 const myComparatorFunction = (a, b) => {

 }
 const array1 = [10, 43, 5, 0, 4, 3, 2, 1, 11];
 console.log(array1.sort());

 const array2 = ['f', 'e', 'd', 'a', 'h', 'b', 'actual', 'aardvark'];
 console.log(array2.sort());


/**
 * Sorted in Ascending Order
 *
 * We’re going to start with one of the most intuitive orderings: ascending.
 * This sort will yield the same results as using a sorting algorithm like quicksort or merge sort.
 * The first step is to create the comparator function. Given inputs a and b, the pseudocode is as follows:
 *
 * if a is less than b
 *   return negative number
 * if a is greater than b
 *   return positive number
 * if a is equal to b
 *   return 0
 *   */


const ascendingOrder = (a, b) => {
    if ( a < b ) {
        return -1;
    } else if ( a > b ){
        return 1;
    } else {
        return 0;
    }
}
 // Use this array to test your code:
 const testArray = [10, 43, 5, 0, -2, -20, 4, 3, 2, 1, 11];
 testArray.sort(ascendingOrder);
 console.log(testArray);

 module.exports = ascendingOrder;


 /**
  * While you could create the ascendingOrder() function using three if statements,
  * you could optimize it by simply returning a - b.
  * This will return a negative number if a is smaller, a positive number if b is smaller, and zero if they are equal.
  * Likewise, if you wanted to sort an array in descending order, the function could simply return b - a.
  * */


 /**
  * Sorting by Length
  *
  * Let’s try sorting elements by their length, from the shortest element to the longest.
  * */


 /** Create the sortByLength() comparator function.
  * (Remember that you can use someVariable.length to access an array or string’s length!)*/

 const sortByLength = (a, b) => {
     if (a.length < b.length) {
         return -1;
     } else if (a.length > b.length) {
         return 1;
     } else {
         return ascendingOrder(a, b);
     }
 }


 const ascendingOrder = (a, b) => {
     if (a < b) {
         return -1;
     } else if (a > b) {
         return 1;
     } else {
         return 0;
     }
 }

 // Use this array to test your code:
 const testArray = ['car', 'train', 'plane', 'bike', 'skateboard', 'jet'];
 testArray.sort(sortByLength);
 console.log(testArray);

 module.exports = sortByLength;

