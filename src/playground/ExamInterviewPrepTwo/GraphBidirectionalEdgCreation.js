/**
 * Using your knowledge of the Graphs data structure, complete the addEdge() method to create bidirectional edges between two vertices.

Remember to verify that each argument is an instance of the Vertex class.

A simple Graph instance, friendNetwork, is provided so that you can check the behavior of the addEdge() method as you implement it.

 */

const Edge = require('./Edge.js');
const Vertex = require('./Vertex.js');

class Graph {
    constructor() {
        this.vertices = [];
    }

    addVertex(data) {
        const newVertex = new Vertex(data);
        this.vertices.push(newVertex);

        return newVertex;
    }

    addEdge(vertexOne, vertexTwo, weight) {
        const edgeWeight = this.isWeighted ? weight : null;

        if (vertexOne instanceof Vertex && vertexTwo instanceof Vertex) {
            vertexOne.addEdge(vertexTwo, edgeWeight);
            // only if the graph is not bi-directional add vertexTwo
            if (!this.isDirected) {
                vertexTwo.addEdge(vertexOne, edgeWeight);
            }
        } else {
            throw new Error('Expected Vertex arguments.');
        }
    }

    print() {
        this.vertices.forEach((vertex) => vertex.print());
    }
}

const friendNetwork = new Graph();
const friendSara = friendNetwork.addVertex('Sara');
const friendMeera = friendNetwork.addVertex('Meera');
friendNetwork.addEdge(friendSara, friendMeera);
friendNetwork.print();

module.exports = Graph;