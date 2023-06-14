/**You are trying to store data efficiently so you can search it faster. The elements in your data set can be compared to each other. It appears that a Binary Search Tree is exactly what you need!

Implement the sprouts of your Binary Search Tree below by adding a constructor to the class. It should contain the following:

    A value.
    A depth value with the default value of 1.
    A left child pointer.
    A right child pointer.

 */

class BinaryTree {
    constructor(value, depth = 1, left = null, right = null) {
        this.value = value;
        this.depth = depth;
        this.left = left;
        this.right = right;
    }
}

module.exports = BinaryTree;
