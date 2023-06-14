/**
 * Create an effect hook that triggers when the value of unit changes. 
 * The effect hook should check the value of unit and set the amount value of 
 * the recipe state to the converted values using the new unit:
 * If the unit is 'g', the value of amount should be converted using the ozToG() function.
 * If the unit is 'oz', the value of amount should be converted using the gToOz() function.

Hint
You can use the .map() method to map the current list of states to a new list of states. Take a look at the example code snippet below:
setExampleState(oldExampleState => {
  return oldExampleState.map((item) => ({...item, ['exampleKey']: newValue}));
});
 */import React, { useState, useEffect } from 'react';

export default function Recipe(props) {
    const { unit } = props;
    const [recipe, setRecipe] = useState([
        { name: 'Salted Butter', amount: 250 },
        { name: 'Granulated Sugar', amount: 200 },
        { name: 'Milk', amount: 100 },
        { name: 'All-Purpose Flour', amount: 360 },
        { name: 'Chocolate Chips', amount: 350 }
    ]);

    const gToOz = (value) => {
        return (value / 28.35).toFixed(2);
    };

    const ozToG = (value) => {
        return (value * 28.35).toFixed(0);
    };

    useEffect(() => {
        // Check if the unit has changed
        const newRecipe = recipe.map((item) => {
            if (unit === 'g') {
                return { ...item, amount: ozToG(item.amount) };
            } else if (unit === 'oz') {
                return { ...item, amount: gToOz(item.amount) };
            } else {
                return item;
            }
        });
        // Set the new recipe state with the converted values
        setRecipe(newRecipe);
    }, [unit]);

    return (
        <div className='ingredient-list'>
            {recipe.map((item, i) => (
                (<p key={i}><span className='name'>{item.name}</span>: {item.amount}{unit}</p>)
            ))}
        </div>
    );
}

/**
 * This effect hook will run every time the unit prop changes.
 *  It uses the map() method to create a new array of recipe objects with the amount values converted based on the new unit. 
 * Finally, it sets the state of recipe with the new array.
 */