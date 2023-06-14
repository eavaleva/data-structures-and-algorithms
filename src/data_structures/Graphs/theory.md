Reviewing Key Terms

Graphs are an essential data structure in computer science for modeling networks. Let’s review some key terms:

    vertex: A node in a graph.
    edge: A connection between two vertices.
    adjacent: When an edge exists between vertices.
    path: A sequence of one or more edges between vertices.
    disconnected: Graph where at least two vertices have no path connecting them.
    weighted: Graph where edges have an associated cost.
    directed: Graph where travel between vertices can be restricted to a single direction.
    cycle: A path which begins and ends at the same vertex.
    adjacency matrix: Graph representation where vertices are both the rows and the columns. Each cell represents a possible edge.
    adjacency list: Graph representation where each vertex has a list of all the vertices it shares an edge with.


Questions: 

Q: In a directed graph, you can always move between two vertices as long as an edge exists between them.
A: False

Q: In an undirected graph, an edge connecting two vertices is bi-directional.
A: True

Q: A connection between two vertices is called what?
A: An Edge

Q: What is a path?
A: A sequence of edges connecting a sequence of vertices.

Q: What does it mean for two vertices, or nodes, to be adjacent?
A: The vertices are directly connected by an edge.

Q: In a weighted graph, edges have a _____ associated with them.
A: Cost

Q: How is a graph represented in an adjacency matrix?
A: As a table with vertices as the rows and the columns. The cells of the spreadsheet mark whether an edge exists.

Q: What is the node in a graph called?
A: A Vertex.

Q: How is a graph represented in an adjacency list? 
A: Each vertex contains a list of vertices where an edge exists between them.


Create a graph data structure
With this in mind, we will create our Graph with the following requirements:

    A Vertex can store any data.

    A Vertex maintains a list of connections to other vertices, represented by a list of Edge instances.

    A Vertex can add and remove edges going to another Vertex.

    A Graph stores all of its vertices, represented by a list of Vertex instances.

    A Graph knows if it is directed or undirected.

    A Graph knows if it is weighted or unweighted.

    A Graph can add and remove its own vertices.

    A Graph can add and remove edges between stored vertices.

Q: Given that an edge cannot exist between the same vertex, what is the maximum number of edges a directed graph with 4 vertices can have?
A: 12 


The following code constructs a graph with the given output. What best describes the resulting type of graph?

const graph = new Graph(true, true);

const v1 = graph.addVertex('v1');
const v2 = graph.addVertex('v2');
const v3 = graph.addVertex('v3');

graph.addEdge(v1, v2, 10);
graph.addEdge(v1, v3, 10);
graph.addEdge(v2, v3, 10);

graph.print();

Output:

v1 --> v2 (10), v3 (10)
v2 --> v3 (10)

A: Directed, weighted, and acyclic


Fill in the code so that the graph is disconnected.

Remember a graph is disconnected if vertex exists that does not have any edges leading to or from it.

const graph = new Graph(false, false);

const v1 = graph.addVertex('v1');
const v2 = graph.addVertex('v2');
const v3 = graph.addVertex('v3');
const v4 = graph.addVertex('v4');

graph.addEdge(v1, v2);
graph.addEdge(v2, v3);
graph.addEdge(v1, v4);
graph.addEdge(v4, v2);
 
A: graph.removeEdge(v2, v3);
