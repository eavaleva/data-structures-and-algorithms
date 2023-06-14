/**
 * The following application is the start of an application that renders a restaurant menu item and allows users to select the item quantity and add it to their cart. Complete the application by doing the following:

    At the top of the file, import useSelector() and useDispatch() hooks from react-redux.

    At the top of the Counter component, create a variable called count and set it to a userSelector() hook for selectCount. Next, create a variable called dispatch and set it to a useDispatch() hook.

    Dispatch appropriate actions when the “+” and “-“ buttons are clicked:
        The “+” button with .add-btn class should dispatch increment() on click.
        The “-“ button with .remove-btn class should dispatch decrement() on click.

If the application works correctly, you should be able to add and remove an item quantity. When you click the “Add To Cart” button, you should see an alert window telling you how many items were added to the cart.

 */

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, selectCount } from './counterSlice';

export function Counter() {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment());
    };

    const handleDecrement = () => {
        dispatch(decrement());
    };

    return (
        <div>
            <div className='item-counter'>
                <button
                    className='remove-btn'
                    aria-label='Decrement value'
                    onClick={handleDecrement}
                >
                    -
                </button>
                <span className='counter-text'>{count}</span>
                <button
                    className='add-btn'
                    aria-label='Increment value'
                    onClick={handleIncrement}
                >
                    +
                </button>
            </div>
            <div className='add-to-cart'>
                <button
                    className='add-to-cart-btn'
                    onClick={() => alert(`Added ${count} items to the cart!`)}
                >
                    Add To Cart
                </button>
            </div>
        </div>
    );
}