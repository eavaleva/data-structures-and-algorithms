Dijkstra’s Algorithm is used for evaluating the shortest paths between vertices in a graph. 
The general strategy is to iterate through the vertices in such a way that will always allow us to only consider 
the shorter path at each vertex and maintain every possible shortest path as we go.

We will first implement the algorithm to find the shortest distance to every vertex. 
Our implementation will take the following steps:

    1. Evaluate the distances between the starting vertex and its neighbors
    2. If the new distance to the neighbor is lower than the previous distance, record it, and queue up the neighbor
    3. Dequeue the next vertex to evaluate
    4. Repeat steps 2 - 3 until there are no more vertices left in the queue.

In this exercise, we will set up the objects that will keep track of the shortest distances between 
the starting vertex and each other vertex, and the shortest paths.

We will be using a priority queue, which is a specialized heap data structure, 
to maintain the vertices we need to evaluate next. We’ll explain in a later exercise exactly what it is and 
the reason for using it instead of a regular queue.

We have also set up a test graph for you in testGraph.js to test the output of the function as you complete the exercises.

### Evaluate Paths to Starting Vertex’s Neighbors

We have all of our records set up, so we can start traversing through the graph and evaluating 
the distances from the starting vertex to its neighbors.

In the evaluation of each neighbor, we compare the distance of the new path to the distance of the previous path. 
If the distance of the new path is shorter, we will update our records of distances and previous vertices with the new path.

Every time we evaluate an edge between a vertex and its neighbor, 
the if condition ensures that the record will always maintain the shortest path among the evaluations so far. 
This is why we can use the previously recorded distance for comparison in our evaluation.

### Evaluate All Paths

Currently, we’re evaluating the distances to the neighbors of the starting vertex, but we want to expand this to every connected vertex in the graph. Every time we discover a shorter path to a neighbor, we should queue up the neighbor to explore its connections and evaluate them.

This will accomplish two things:

    Any paths that have not yet been explored will be explored
    For vertices that already have a path found, we will re-evaluate if the alternate path through the neighbor will result in a shorter distance.

We are guaranteed that every vertex is evaluated because whenever a path is found to a vertex, then it will be queued up and its neighbors will be evaluated. The only way for a vertex to escape evaluation is if there are no connections to the vertex.

For our queue, we will use a priority queue. A priority queue is a specialized form of a min-heap, where the priority of a piece of data is stored alongside data, and elements are popped based on the priority value. We have provided the MinHeap.js file for you in case you want a refresher on a basic heap data structure. In the meantime, take a look through PriorityQueue.js to familiarize yourself with the data structure. We mainly need the .add() method to queue up elements with a priority, and the .popMin() method to grab the element with the lowest priority.

This priority queue is better than a regular queue since it allows us to evaluate the vertices with the shortest distances first. This way we can avoid unnecessarily re-evaluating paths later in the queue since it is less likely that a longer path will result in a shorter distance.

