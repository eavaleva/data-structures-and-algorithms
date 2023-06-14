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
    removeChild(childToRemove) {
        // If target child is an instance of TreeNode,
        // Compare target child with each child in the
        // children array
        // Update the children array if target child is found
        // Define a variable called length
        const length = this.children.length;
        this.children = this.children.filter(child => {
            if (childToRemove instanceof TreeNode) {
                return childToRemove !== child;
            } else {
                /* Else
            Compare target child with each child's data in the children array
            Update the children array if target child is found */
                return child.data !== childToRemove;
            }
        });
        // Compare length with the updated children's length after filtering. If they are the same, recursivley call removeChild() for each child in the children array.
        if (length === this.children.length) {
            this.children.forEach((child) => child.removeChild(childToRemove));
        }
    }
    // Pretty Print
    print(level = 0) {
        let result = '';
        for (let i = 0; i < level; i++) {
            result += '-- ';
        }
        console.log(`${result}${this.data}`);
        this.children.forEach(child => child.print(level + 1));
    }
    /*DEPTH-FIRST TREE TRAVERSAL visits the first child in the children array and that node's children recursively
    * before visiting its siblings and their children recursively.  */
    depthFirstTraversal() {
        console.log(this.data);
        this.children.forEach(child => child.depthFirstTraversal());
    }

    /* Breadth-first Tree Traversal
    * Breadth-first traversal visits each child in the children array starting from the first child before
    * visiting their children and further layers until the bottom level is visited.
    * The algorithm is as follows:
    * */
    breadthFirstTraversal() {
        let queue = [ this ];
        while (queue.length > 0) {
            const current = queue.shift();
            console.log(current.data);
            queue = queue.concat(current.children);
        }
    }
};

module.exports = TreeNode;
