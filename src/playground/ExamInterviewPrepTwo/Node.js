class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    setNextNode(node) {
        if (node instanceof Node || node === null) {
            this.next = node;
        } else {
            throw new Error('Next node must be a Node instance or null');
        }
    }

    getNextNode() {
        return this.next;
    }
}

module.exports = Node;
