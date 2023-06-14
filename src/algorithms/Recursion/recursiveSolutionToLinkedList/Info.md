### Refactor a linkedList ###

## Base Case

Before we consider the base and recursive cases, let’s think about the two parameters required to 
traverse a linked list recursively:

    data – the first parameter. This is the value of the Node that is being searched for in the linked list.
    currentNode – the second parameter. This is the current node in the linked list. During each recursive call, 
    the function will pass the next node as this argument.

class LinkedList {
    findNodeRecursively(data, currentNode = this.head) {
// Some code
    }
}

    Notice, we added this.head as the default argument for currentNode. This is useful because,
    if you call findNodeRecursively() with only a data argument, the method will traverse the entire 
    linked list beginning from its head.

    Now let’s consider the base case for our linked list. We should return a value under the following two cases:

    If the method finds a node with the matching value, it should return the node.
    If the method reaches the end of the list, it should return null.

## Recursive Case

Now it’s time to add a recursive case. The recursive case should execute when the node has not been found and 
the end of the list has not been reached.

Because you’ve covered both of the base cases, you can use an else statement to call your recursive case.


## Review

   In this lesson, you learned how to implement a recursive solution to a linked list search. 
   The solution includes the following cases:

       Base case 1 – return the current node if it matches the data argument.
       Base case 2 – return null if the end of the linked list is reached.
       Recursive Case – return a call to .findNodeRecursively() with the next node as an argument.

   The recursive approach laid out in this lesson is similar to implementations for traversing other data structures, 
   like trees and directories. 
   This is an important insight to keep in mind as you encounter more recursive implementations.
