
/**
 * Complete the program below to create a getter called price that returns the value of the ._price property.
 * Then, using an appropriate method of the Artwork class, set the price of starryNight to 1300.
 */

class Artwork {
    constructor(title, artist) {
        this._title = title;
        this._artist = artist;
        this._price = 1000;
    }

    get title() {
        return this._title;
    }

    get artist() {
        return this._artist;
    }

    setPrice(price) {
        this._price = price;
    }

    // Add a getter for price
    get price() {
        return this._price;
    }
}

const starryNight = new Artwork('The Starry Night', 'Vincent van Gogh');
// Set the price for starryNight
starryNight.setPrice(1300);

console.log(`${starryNight.title} by ${starryNight.artist} is on sale for $${starryNight.price}!`);