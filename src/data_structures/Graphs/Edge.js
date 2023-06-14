class Edge {
    constructor(start, end, weight = null) {
        this.start = start;
        this.end = end;
        this.weight = weight;
    }
}

module.exports = Edge;


/**
 * We will create an .addEdge() method in the Vertex class that connects the vertices together
 * by creating an Edge and adding it to the vertices’ list of edges.
 * When the Edge is created, it expects the two Vertex instances,
 * which is how the Edge tracks the connection between the two vertices .
 *
 * Then, we will use this method in the Graph‘s .addEdge()
 * method to create edges going in both directions between the two given vertices.
 * Even though this graph is undirected, we want to create two edges going in both directions
 * so it is easier to traverse.
 * */
