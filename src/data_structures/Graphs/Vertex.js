/**
 * A Vertex can store any data.
 * A Vertex maintains a list of connections to other vertices, represented by a list of Edge instances.
 * A Vertex can add and remove edges going to another Vertex.
*/
const Edge = require('./Edge.js');

class Vertex {
    constructor(data) {
        this.data = data;
        this.edges = [];
    }

    addEdge(vertex) {
        if (vertex instanceof Vertex) {
            this.edges.push(new Edge(this, vertex));
        } else {
            throw new Error('Edge start and end must both be Vertex');
        }
    }

    /**
     * In order to remove the edge that leads to the given vertex, iterate through its list of edges and
     * filter out the Edge whose end property is strictly equal to the ending vertex.*/
    removeEdge(vertex) {
        this.edges = this.edges.filter(edge => edge.end!== vertex);
    }


    print() {
        const edgeList = this.edges.map(edge =>
            edge.weight !== null ? `${edge.end.data} (${edge.weight})` : edge.end.data);

        const output = `${this.data} --> ${edgeList.join(', ')}`;
        console.log(output);
    }
}

module.exports = Vertex;
