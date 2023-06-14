# Merge Sort # 

## 1. Splitting the input array ## 
This algorithm recursively splits the input array until each element is in its own array. 

## 2. Merging sorted arrays ## 
This algorithm compares and combines the elements of arrays until the input array is sorted. 


### Review ###

Nice work building your own mergeSort() function. 
An important point to remember about merge sort is that the algorithm is broken into two parts: splitting and merging.

Regardless of the order or length (including odd or even lengths) of an input array, 
the merge sort algorithm will always split the elements into their own arrays first, 
and then combine them into a sorted array. The fact that the same steps are taken regardless of 
the input (order and length) results in an average, best, and worst case complexity all equal to the same value, O(n log n).

This time complexity makes merge sort one of the most efficient and popular sorting algorithms. 
Take a look at merge sort compared to a few others on toptal.com.


### QUIZZZ ### 

1Q: Which of the following best describes the purpose of the calls to the .concat() method at the bottom of the merge() function?
A: The .concat() method concatenates an input array to the end of another array. Because one of the arrays will be empty, 
the line with two calls to .concat() will only add the elements from the non-empty array.
Either leftArray or rightArray will still have elements in it after the while loop.
The .concat() method will add the remaining elements from this array to the sortedArray.

2Q: What is the purpose of the call to .shift() in the merge() function?
A: The .shift() method removes the `first element` of the array with the smallest number. 
If we did not include this line, the while loop will continue infinitely.
