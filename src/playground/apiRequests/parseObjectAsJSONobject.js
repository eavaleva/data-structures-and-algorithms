
/**
 * Complete the application by doing the following:
 * Create a variable called menuObject and set it to the result of parsing menu as a JSON object.
 * Using template literals, log menuObject‘s appetizer, main, and dessert to the console.
 * The console should output the following:
 */

const menu = '{"appetizer":"Shrimp Shumai","main":"Aloo Gobi","dessert":"Key Lime Pie"}';

// Parse menu as a JSON object
const menuObject = JSON.parse(menu);

console.log('Today\'s Menu:');
// Log appetizer, main, and dessert by referencing properties
console.log(`Appetizer: ${menuObject.appetizer}`);
console.log(`Main Course: ${menuObject.main}`);
console.log(`Dessert: ${menuObject.dessert}`);


import React from 'react';

// Create a class component called App that renders Hello World! as an H1 element

class App extends React.Component {
    render() {
        return <h1>Hello World!</h1>;
    }
}
export default App;