const BinaryTree = require('./BinaryTree');

// create a BinaryTree
const bt = new BinaryTree(100);

// insert values to the BinaryTree
bt.insert(50);
bt.insert(125);
bt.insert(75);
bt.insert(25);

console.log(bt.getNodeByValue(75));
console.log(bt.getNodeByValue(55));

const randomize = () => Math.floor(Math.random() * 40);
const bt2 = new BinaryTree(15);
let numbers = [];

for (let i = 0; i < 10; i++) {
    numbers.push(randomize());
    bt2.insert(numbers[i]);
}

console.log(`Inserted [ ${numbers} ] to binary tree`);

console.log('Depth First Traversal');
bt2.depthFirstTraversal();

