
/***
 * Complete the depthFirstTraversal method of the TreeNode class so that it uses 
 * console.log() to print the data in each tree node in a depth-first motion.

We’ve included a function treeTraversalExample() to help you test your code. 
This function will create a tree with 15 as the value of the root Node, values between 0-9 as children of the Root, 
and values between 10-90 as the next generation, and then call your depthFirstTraversal method.

 */
class TreeNode {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    addChild(child) {
        if (child instanceof TreeNode) {
            this.children.push(child);
        } else {
            this.children.push(new TreeNode(child));
        }
    }

    depthFirstTraversal() {
        console.log(this.data);
        this.children.forEach(child => child.depthFirstTraversal());
    }
};

const treeTraversalExample = () => {
    const tree = new TreeNode(15);
    const randomize = () => Math.floor(Math.random() * 10);

    tree.addChild(randomize());
    tree.addChild(randomize());

    tree.children.forEach(child => {
        child.addChild(randomize() * 10);
        child.addChild(randomize() * 10);
    });

    tree.depthFirstTraversal();
}

// uncomment to call example function
// treeTraversalExample();

module.exports = TreeNode;


