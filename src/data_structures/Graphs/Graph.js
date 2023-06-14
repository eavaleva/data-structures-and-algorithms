const Edge = require("./Edge.js");
const Vertex = require("./Vertex.js");

class Graph {
    constructor(isWeighted = false) {
        this.vertices = [];
        this.isWeighted = isWeighted;
    }

    addVertex(data) {
        const newVertex = new Vertex(data);
        this.vertices.push(newVertex);

        return newVertex;
    }

    removeVertex(vertex) {
        this.vertices = this.vertices.filter((v) => v !== vertex);
    }

    removeEdge(vertexOne, vertexTwo) {
        if (vertexOne instanceof Vertex && vertexTwo instanceof Vertex) {
            vertexOne.removeEdge(vertexTwo);

            if (!this.isDirected) {
                vertexTwo.removeEdge(vertexOne);
            }
        } else {
            throw new Error('Expected Vertex arguments.');
        }
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

const trainNetwork = new Graph();
const atlantaStation = trainNetwork.addVertex("Atlanta");
const newYorkStation = trainNetwork.addVertex("New York");
trainNetwork.addEdge(atlantaStation, newYorkStation, 800);
trainNetwork.removeEdge(atlantaStation, newYorkStation);
trainNetwork.print();

module.exports = Graph;


/**
 * A Graph stores all of its vertices, represented by a list of Vertex instances.
 * A Graph knows if it is directed or undirected.
 * A Graph knows if it is weighted or unweighted.
 * A Graph can add and remove its own vertices.
 * A Graph can add and remove edges between stored vertices.
 * */
