# Quicksort # 

Quicksort is an efficient recursive algorithm for sorting arrays or lists of values. 
The algorithm is a comparison sort, where values are ordered by a comparison operation such as > or <.

Quicksort uses a divide and conquer strategy, 
breaking the problem into smaller sub-problems until the solution is so clear there’s nothing to solve. 

The problem: many values in the array which are out of order.

The solution: break the array into sub-arrays containing at most one element. One element is sorted by default!

We choose a single pivot element from the list. Every other element is compared with the pivot, which partitions the array into three groups.

    A sub-array of elements smaller than the pivot.
    The pivot itself.
    A sub-array of elements greater than the pivot.

The process is repeated on the sub-arrays until they contain zero or one element. 
Elements in the “smaller than” group are never compared with elements in the “greater than” group. 
If the smaller and greater groupings are roughly equal, this cuts the problem in half with each partition step!

Depending on the implementation, the sub-arrays of one element each are recombined into a new array with sorted ordering, 
or values within the original array are swapped in-place, producing a sorted mutation of the original array.


Quicksort Runtime

The key to Quicksort’s runtime efficiency is the division of the array. 
The array is partitioned according to comparisons with the pivot element, 
so which pivot is the optimal choice to produce sub-arrays of roughly equal length?

The graphic displays two data sets which always use the first element as the pivot. 
Notice how many more steps are required when the quicksort algorithm is run on an already sorted input. 
The partition step of the algorithm hardly divides the array at all!

The worst case occurs when we have an imbalanced partition like when the first element is continually chosen in a sorted data-set.

One popular strategy is to select a random element as the pivot for each step. 
The benefit is that no particular data set can be chosen ahead of time to make the algorithm perform poorly.

Another popular strategy is to take the first, middle, and last elements of the array and choose the median element as the pivot. 
The benefit is that the division of the array tends to be more uniform.

Quicksort is an unusual algorithm in that the worst case runtime is O(N^2), but the average case is O(N * logN).

We typically only discuss the worst case when talking about an algorithm’s runtime, 
but for Quicksort it’s so uncommon that we generally refer to it as O(N * logN).


#### Quicksort Review ####
 
Quicksort is an efficient algorithm for sorting values in a list. A single element, the pivot, is chosen from the list. All the remaining values are partitioned into two sub-lists containing the values smaller than and greater than the pivot element.

Ideally, this process of dividing the array will produce sub-lists of nearly equal length, otherwise, the runtime of the algorithm suffers.

When the dividing step returns sub-lists that have one or less elements, each sub-list is sorted. The sub-lists are recombined, or swaps are made in the original array, to produce a sorted list of values.


Quicksort is a classic sorting algorithm with an excellent average runtime. 
Understanding the strategy behind quicksort will improve your ability to reason about sorting algorithms.


### Quizzz ## 

1: For quicksort to achieve the average case runtime of O(n*logn), what must be true during the partition step? 
A: The partition step must devide the array into two halves of roughly equal length.

2: In the _____ step of the quicksort algorithm, the list of values is broken into sub-lists based on comparisons with a pivot value.
A: Partition

3: For a recursive version of quicksort, what would be the base case when the algorithm stops recursing? 
A:  When the array passed in as an argument is no larger than one element.

4: Quicksort is a comparison sort.
A: True

5: What role does the “pivot” element play in the quicksort algorithm?
A: The pivot element is compared with other elements during the partition step.

6: What is the benefit of randomly selecting a pivot element in quicksort?
A: A random pivot element removes the possibility that any one data set will result in a poor Big O time.
If the first element is always chosen as the pivot and the data-set is sorted, 
this would result in a O(n^2) runtime because the partition step only reduces the problem by a single element.

7: If we always chose the first element as the pivot, what type of data-set would cause quicksort to have a O(n^2) runtime?
A: A sorted data-set


Introduction

Quicksort is an efficient sorting algorithm that is based on the divide and conquer strategy. Like merge sort, the input array is partitioned into smaller parts and then combined after the elements have been rearranged. Unlike merge sort, which requires additional memory for auxiliary arrays, quicksort is space-saving because it deploys in-place sorting.

As runtime performance goes, quicksort requires more comparisons for sorting a larger input than mergesort. Like bubble sort, quicksort has a worst case runtime of O(N^2). This can happen when quicksort’s input data set comprises:

    pre-sorted numbers,
    backward-sorted numbers, or
    all similar elements along with a poorly chosen pivot element that produces a partition of zero or one element.

On average, like merge sort, the runtime of quicksort is O(N * log N) if partition sizes are roughly equal.

The basic idea of the quicksort algorithm is to:

    split the initial unsorted data set into a left partition and a right partition
    sort each partition recursively until there is only one element left
    return the sorted array

We use a pivot element to divide our unsorted array into two parts. The elements in these parts must meet these conditions after partitioning:

    all elements in the left partition must be less than or equal to the pivot element
    all elements in the right partition must be greater than or equal to the pivot element

Determining the pivot index is done through a procedure called partitioning. Our algorithm uses an array to store the data set and stipulates the boundary of the data set with left and right pointers. The pseudocode for our quicksort algorithm is as follows:

`If there is more than one element left in the array:`
`Find the pivot index through partitioning`

`If the left pointer is less than the pivot index:`
`Call quicksort() on the portion of the array between the left pointer and the pivot.
`
`If the pivot index is less than the right pointer:`
`Call quicksort() on the portion of the array between the pivot index and the right pointer.`

`Return the sorted array
`

## Review ##
Review

Congratulations on implementing the quicksort algorithm in JavaScript. To review:

    Quicksort is a divide-and-conquer algorithm that splits an unsorted data set into two partitions recursively and sorts the partitioned arrays in-place until there is only one element left in a partition.
    To determine the elements that belong in a partition, we need a pivot element, pivot, that is sandwiched between the two partitions and its location called the pivotIndex.
    We implemented the partition() function which groups and swaps the elements either to the left or right of the pivot element and returns the leftIndex that is the same as the pivotIndex.
    We implemented the quicksort() function that first calls partition() to determine the pivotIndex then recursively calls itself to sort the smaller partitions until there is only one element left in the partition.

Instructions
1.

Open up script.js and run it. The size of the input array is 1,000,000 pre-sorted backwards. You should find the results sorted correctly. The results of running the script should look like this:

Before  quicksort number @ index      0 = 1000000
Before  quicksort number @ index 250000 = 750000
Before  quicksort number @ index 500000 = 500000
Before  quicksort number @ index 750000 = 250000
Before  quicksort number @ index 999999 = 1
---
After   quicksort number @ index      0 = 1
After   quicksort number @ index 249999 = 250000
After   quicksort number @ index 499999 = 500000
After   quicksort number @ index 749999 = 750000
After   quicksort number @ index 999999 = 1000000

### Quizzz ###

1: If we have the array, [ 26, 18, 10, 11, 35 ], as input, 10 as the pivot element, 0 as leftIndex, and 4 as rightIndex, what would the resulting array be after calling partition()?
A: [10, 18, 26, 11, 35 ]
________

2: Pick the statement that is NOT true about the Quicksort algorithm.
A: Quicksort's worst runtime is O(N * log N)
The Big-O runtime would be O(N^2), not O(2^N), hence, this is the correct answer.
________

3: Pick the statement that is NOT true when the pivot element chosen is either the biggest or smallest element of the input array.
A: The Big-O runtime of the quicksort becomes O(2^N).
________

4: The following input array:

[ 20, 22, 3, 20, 25, 12 ]

returns the sorted result as:

[ 20, 3, 20, 22, 25, 12 ]

What do you call quicksort() with to produce such a result?

A: Only sort everything except the first and last elements.
not 0, 5
not 0,3
_________

5: In our recursive implementation of quicksort(), we use a base case to determine when recursion should stop. 
Fill in the code with the correct evaluation. 

A: if(array.length > 1){...}
__________

6: The following input array:

[ 5, 4, 3, 2, 1]

returns the sorted result as:

[ 2, 3, 4, 5, 1]

What do you call quicksort() with to produce such a result?

A: quicksort(numbers, 0, 3);
_________

7: Which condition would NOT lead to a quicksort algorithm running in its worst case of O(N^2)?
A: When a random element in the input array is chose to be the pivot element.
________

9: The function partition() is called with input array [ 11, 0, 22, 34, 33 ], 0 as leftIndex, and 2 as rightIndex. What would the content of the array be after swapping? 
A: [0, 11, 22, 34, 33]
