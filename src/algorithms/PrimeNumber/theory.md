Complexity

The complexity of the Sieve of Eratosthenes with optimizations is

O(nlog⁡(log⁡n))O(nlog(logn))

There are two operations to take into account: the creation of the array and the incrementing and multiple-marking loops.

Creation happens in O(n) time, since it creates an element for each number from 2 to n.

Multiple marking happens in O(n log log n) time. The reasons for this come down to some complex math, but briefly:

The number of times you mark a non-prime number is

n2+n3+...nn2

n+3

n+...n


n

It begins with n / 2 because initially all multiples of 2 are marked as non-prime (this will happen 50 times with a limit of 100, as each even number is marked). This process continues up until the square root of n. Through some fancy mathematical proofs, this works out to an overall time complexity of

O(nlog⁡(log⁡n))O(nlog(logn))

since this is larger than the O(n) array-creation time.
