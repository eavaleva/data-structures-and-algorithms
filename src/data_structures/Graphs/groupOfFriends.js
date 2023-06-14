const Graph = require('./Graph.js');

const isWeighted = true;
const isDirected = false;

const friendGroup = new Graph (isWeighted, isDirected);
const jimmy = friendGroup.addVertex('Jimmy');
const sally = friendGroup.addVertex('Sally');
const michael = friendGroup.addVertex('Michael');
const sonny = friendGroup.addVertex('Sonny');

friendGroup.addEdge(sonny, jimmy, 15);
friendGroup.addEdge(sonny, michael, 2);

friendGroup.addEdge(jimmy, michael, 8);
friendGroup.addEdge(jimmy, sally, 1);

friendGroup.addEdge(sally, michael, 4);

console.log(friendGroup);
