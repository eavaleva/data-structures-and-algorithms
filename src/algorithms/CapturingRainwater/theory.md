## The Concept

The foundation to all the solutions for this problem is that the amount of rainwater at any given index is 
the difference between the lower of highest bars to its left and right and the height of the index itself:

waterAtIndex = Math.min(highestLeftBound, highestRightBound) - heightOfIndex;

The Naive Solution

The naive solution to the problem is to:

    Traverse every element in the array
    Find the highest left bound for that index
    Find the highest right bound for that index
    Take the lower of those two values
    Subtract the height of that index from that minimum
    Add the difference to the total amount of water

In JavaScript this looks like this: see solutionOne
While this is a functional solution, 
it requires nested for loops, which means it has a big O runtime of O(n^2). 
Let’s look at a solution with a more efficient runtime.


### The Optimized Solution

The previous solution had a quadratic runtime, but it’s possible to solve this problem in O(n) time by using two pointers. 
The pointers will start at each end of the array and move towards each other. 
The two-pointer approach is a common approach for problems that require working with arrays, 
as it allows you to go through the array in a single loop and without needing to create copy arrays.

We’ll start by creating the following variables:

totalWater = 0
leftPointer = 0
rightPointer = heights.length - 1
leftBound = 0
rightBound = 0

leftPointer and rightPointer will start at the beginning and end of the array, respectively, 
and move towards each other until they meet. The algorithm is as follows:

while leftPointer < rightPointer
if the element at leftPointer <= the element at rightPointer
if the element is larger than leftBound, set leftBound to the element
add the difference between leftBound and the element at leftPointer to totalWater
move leftPointer forward by one
else
if the element is larger than rightBound, set rightBound to the element
add the difference between rightBound and the element at rightPointer to totalWater
move rightPointer back by one

return totalWater
