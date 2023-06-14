# Algorithm Analysis #

Given a moderately unsorted data-set, bubble sort requires multiple passes through the input before producing a sorted list. 
Each pass through the list will place the next largest value in its proper place.

We are performing n-1 comparisons for our inner loop. 
Then, we must go through the list n times in order to ensure that each item in our list has been placed in its proper order.

The n signifies the number of elements in the list. In a worst case scenario, 
the inner loop does n-1 comparisons for each n element in the list.

Therefore we calculate the algorithm’s efficiency as:

#### O(n(n−1))=O(n(n))=O(n2)O(n(n−1))=O(n(n))=O(n2) ###

The diagram analyzes the pseudocode implementation of bubble sort to show how we draw this conclusion.

When calculating the run-time efficiency of an algorithm, we drop the constant (-1), which simplifies our inner loop comparisons to n.

This is how we arrive at the algorithm’s runtime:
O(n^2).
For example a nested (i.e. double) for loop iterating over an array of an array.


## Bubble Sort Review

Bubble sort is an algorithm to sort a list through repeated swaps of adjacent elements. It has a runtime of O(n^2).

For nearly sorted lists, bubble sort performs relatively few operations since it only performs a swap when elements are out of order.

Bubble sort is a good introductory algorithm which opens the door to learning more complex algorithms. 
It answers the question, “How can we algorithmically sort a list?” and encourages us to ask, 
“How can we improve this sorting algorithm?”

### QUESTIONS 

Q: Does bubble sort have to sort in ascending order?
A: The basic idea behind the bubble sort is to compare the elements of an 
array one by one until they are sorted in ascending order, which is called bubble bursting

Q: If no copy is made of the input list then bubble sort will alter the original array to produce the sorted data-set.
A: True.

Q: What is the big o runtime of bubble sort?
A: Quadratic - O(n^2)

Q: Bubble sort orders an input array through a series of comparisons and swaps. 
A: True.

Q: Can you think of an input array that would result in an O(n^2) runtime? What input array would result in an O(n) runtime?
A: An array with the elements already sorted from smallest to greatest would only need to be looped over one time since it requires no sorting.

An array with the elements reverse-sorted where the elements sorted from largest to smallest.


## Intro to Bubble sort 

The bubble sort algorithm takes an array of elements and reorders the elements of the input from smallest to largest. 
To achieve this, bubble sort works by comparing a pair of neighboring elements and swapping their positions in 
the array so that the larger of the two elements is always on the right. 
Doing this continuously results in the largest element “bubbling” up to the end of the array, giving this sort its name. 
The algorithm only stops when there are no more values that need to be swapped.


Below is a quick pseudocode example of what we will create in this lesson:


`
while array is not sorted
for each value in array
if current value > next value
swap current value and next value
return array
`
Bubble sort is not the most efficient sorting algorithm. 
Bubble sort’s worst-case runtime is Quadratic O(n^2). 
This is because we have to compare the current element we are looking at, 
to each element in the array after it and repeat this check for every single element in the array. 
Its best-case runtime is O(n) for an already-sorted list.

### PRACTICE BUBBLE SORT LINKS 

https://visualgo.net/en/sorting?slide=7
https://www.codecademy.com/code-challenges/code-challenge-top-score-sorter-javascript
https://www.codecademy.com/code-challenges/code-challenge-find-xth-number-in-order-javascript
