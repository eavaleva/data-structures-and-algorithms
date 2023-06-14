const inventory = [
    {
        item: "scented candle",
        stock: 48
    },
    {
        item: "oil diffuser",
        stock: 80
    },
    {
        title: "tea kettle",
        stock: 16
    },
];

function getLowStockItems() {
    const lowStock = [];

    for(let i = 0; i < inventory.length; i++){
        if(inventory[i].stock < 50){
            lowStock.push(inventory[i])
        }
    }
    return inventory;
}

console.log(getLowStockItems());



// const assert = require("assert");
// const sinon = require('sinon');
// const Calculate = require('./Calculate')

// describe('Calculate', () => {
//     describe('.factorial', () => {
//         it('returns the factorial a number', () => {
//             sinon.spy

// (Calculate, 'factorial');

//             Calculate.factorial(5);

//             // Assertions to test functionality of Calculate.factorial()
//             assert(Calculate.factorial.calledOnce);
//             assert(Calculate.factorial.calledWith(5));
//             assert(Calculate.factorial.returned(120));

//             // Remove spy after testing
//             Calculate.factorial.();
//         });
//     });
// });


const offer = {
    title: 'Weeping Woman',
    artist: 'Pablo Picasso',
    year: '1937',
    currentLocation: 'Tate Gallery, London, UK',
    offerPrice: 23761
}


const makeOffer = ({ title, artist, offerPrice }) => {
    if (offerPrice > 20000) {
        console.log(`The ${title} by ${artist} is sold to the highest bidder at $${offerPrice}!`);
    }
}

makeOffer(offer);



const assert = require("assert");
const Calculate = require('./index.js')

describe('Calculate', () => {
    describe('.factorial', () => {
        it('returns the factorial of a number', () => {
            const expectedResult = 120;
            const inputNumber = 5;
            const result = Calculate.factorial(inputNumber);

            // Create an assertion for strict equality between result and expectedResult
            assert.strictEqual(result, expectedResult);
        });
    });
});



// Question 4 
const Convert = {
    kmToM(inputValue) {
        const result = inputValue / 1.609;
        const makeStrict = Number.parseFloat(result).toFixed(2);
        const backToNumber = Number(makeStrict)
        return backToNumber;

    }
}

module.exports = Convert;