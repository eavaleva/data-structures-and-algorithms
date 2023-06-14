const TreeNode = require('./TreeNode');
const tree = new TreeNode(1);

tree.addChild(15);
const node = new TreeNode(30);
tree.addChild(node);
console.log(tree);

tree.removeChild(15);
console.log(tree);

tree.removeChild(node);
console.log(tree);


// sample tree to visualize the tree structure of a TreeNode.

const sampleTree = new TreeNode(1);
const randomize = () => Math.floor(Math.random() * 20);


// add first-level children
for (let i = 0; i < 3; i++){
    sampleTree.addChild(randomize());
}

// add second-level children
for (let i = 0; i < 3; i++){
    for (let j = 0; j < 2; j++){
        sampleTree.children[i].addChild(randomize());
    }
}

// // add third-level children
for (let i = 0; i < 3; i++){
    for (let j = 0; j < 2; j++) {
        for (let k = 0; k < 2; k++) {
            sampleTree.children[i].children[j].addChild(randomize());
        }
    }
}

// // add fourth-level children
for (let i = 0; i < 3; i++){
    for (let j = 0; j < 2; j++) {
        for (let k = 0; k < 2; k++) {
            for (let l = 0; l < 2; l++) {
                sampleTree.children[i].children[j].children[k].addChild(randomize());
            }
        }
    }
}


sampleTree.print();
console.log('DEPTH-FIRST TRAVERSAL!')
sampleTree.depthFirstTraversal();
console.log('BREADTH-FIRST TRAVERSAL!')
sampleTree.breadthFirstTraversal();
