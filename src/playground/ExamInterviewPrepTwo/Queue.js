const LinkedList = require("./LinkedList");

class Queue {
    constructor(maxSize = Infinity) {
        this.queue = new LinkedList();
        this.maxSize = maxSize;
        this.size = 0;
    }

    enqueue(data) {
        if (!this.hasRoom()) {
            throw new Error("Queue is full!");
        }
        this.queue.addToTail(data);
        this.size++;
        console.log(`Added ${data} to queue! Queue size is now ${this.size}.`);
    }

    hasRoom() {
        return this.size < this.maxSize;
    }
}

// const boundedQueue = new Queue(3);

// boundedQueue.enqueue('hat');
// boundedQueue.enqueue('pants');
// boundedQueue.enqueue('shirt');

module.exports = Queue;
