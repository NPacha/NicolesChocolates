
//Six alien ships, attack one at a time. 
//Build an alien class to create each alien?
//Include fight method in class that checks outcome of battle
//If outcome of battle is successful do something, if not do something else. 
//Earth attacks first
//Earth can only attack aliens in order (store the alient objects somewhere, and iterate?)

//Create a class for Alien
//Instantiate six aliens
    //Each alient will have the below properties. 
    // hull - between 3 and 6
    // firepower - between 2 and 4
    // accuracy - between .6 and .8
    //Create a 'fire' method
        //It will attack the USSR ship

    //Store all of the alien names in an array, call on each one of them one buy one to attack.

    //Generate Random Number Function
    let randomNum = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;

    }
    //Generate Random Decimal Func
    let randomDecimal = (min, max) => {
        return (Math.random() * (max - min) + min).toFixed(2);
    };

    let randomHull = randomNum(3,6);
    let randomFirePower = randomNum(2, 4);
    let randomAccuracy = parseFloat(randomDecimal(.6, .8));
    console.log(randomAccuracy);


    class Alien{
        constructor(name, hull, firepower, accuracy){
            this.name = name;
            this.hull = hull;
            this.firepower = firepower;
            this.accuracy = accuracy;
        }
}








   




//Create a class for the Earth ship
//Instantiate the Earth ship called the USSR
    //The USSR will have the below properties:
    // hull - 20
    // firepower - 5
    // accuracy - .7
    //Create a 'fire' method, 
            // It will attack the first alien
            //if accuracy was within range
            //decduct from alien's hull
            // if hull is greater than 0, alien will attack

            //If the alient ship is hull on alient ship is equal to 0
            //the ship has been destroyed. 

class EarthShip {
    constructor(name, hull = 20, firepower = 5, accuracy = .7){
        this.name = 'USSR Ruth';
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
}



//User click fire, and then the fire method function is ran on the first alien. 
//

    


