### Learn how to use dynamic programming to solve complex recursive problems.

Dynamic Programming is a programming technique used to solve recursive problems more efficiently. 
Let’s take a look at a simple algorithm that can get computationally complex very quickly, 
and then let’s use dynamic programming to increase its efficiency.

## Fibonacci

The Fibonacci series is a classic mathematical series in which the next number is calculated as the sum of the previous two numbers:

0, 1, 1, 2, 3, 5, 8, 13, 21, etc.

It can be calculated iteratively but summing the two previous numbers, or the nth Fibonacci number can be calculated recursively:


## Memoization

Memoization is a specialized form of caching used to store the result of a function call. The next time that function is called, 
instead of running the function itself, the result is used directly. 
Memoization can result in much faster overall execution times (although it can increase memory requirements as function 
results are stored in memory).

Memoization is a great technique to use alongside recursion. The memo can even be saved between function calls if it’s being used for common calculations in a program.

## Memoizing Fibonacci

In the previous example, many function calls to fib() were redundant. Let’s memoize it in order to speed up execution.

To begin, we’ll use a plain JavaScript object to store the memoized values. We’ll set keys using n and values to store the result of that Fibonacci number. Then, whenever we need to calculate a number, if it’s already been calculated, we can retrieve the value from the object in O(1) time.


## Conclusion

Dynamic programming and memoization are great techniques breaking up complex recursive problems into smaller chunks.
They are especially useful when tackling problems that involve combinations. For example, if I asked you to calculate the total number of ways to get four dice rolls to sum to 13, you could imagine breaking that into multiple parts. You could split 13 into 6 and 7 and then find all the combinations of two rolls that would match each one of these. As you went down each path, you’d probably start seeing a lot of similar calculations, 
and memoization would help you reduce the number of overall function calls by storing intermediate values.
