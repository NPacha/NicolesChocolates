

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

    const fireButton = document.getElementById('fire');
    const retreat = document.getElementById('retreat');
    const theRing = document.getElementById('thering');
    

    class Alien{
        constructor(name){
            this.name = name;
            this.hull = randomNum(3,6);
            this.firepower = randomNum(2, 4);
            this.accuracy = parseFloat(randomDecimal(.6, .8));
        }
        fight(spaceship){
            if (Math.random() <= this.accuracy){
                spaceship.hull -= this.firepower;
                console.log(`The USS-Ruth has been hit! USSRuth Hull left: ${spaceship.hull}`)
                
            } else {
                console.log(`Better luck next time alien! You missed!`)
            }
        }
        checkWin(){
                if (this.hull <= 0){
                    console.log(`*********${this.name}'s ship is down!*********`)
                    Aliens.shift(this);
                    
                } 
               
                
            }
        
        
        
}


 const alien1 = new Alien('Marlin');
 const alien2 = new Alien('Joey');
 const alien3 = new Alien('Luna');
 const alien4 = new Alien('Crazy');
 const alien5 = new Alien('Greeny');
 const alien6 = new Alien('Slimey'); 

const Aliens = [];
 Aliens.push(alien1) 
 Aliens.push(alien2)
 Aliens.push(alien3)
 Aliens.push(alien4)
 Aliens.push(alien5) 
 Aliens.push(alien6)     
 console.log(Aliens);     
  


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
    constructor(name = 'USSR Ruth', hull = 20, firepower = 5, accuracy = .7){
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
    fight(alien){
        if (Math.random() <= this.accuracy){
        alien.hull -= this.firepower;
        let newHit = document.createElement('p');
        newHit.innerHTML = `${alien.name} was hit! Hull Left for ${alien.name}: ${alien.hull}`;
        theRing.appendChild(newHit);
        } else {
            console.log(`Dangit Captain! We missed!`)
        }
    }
    checkWin(){
        if (this.hull <= 0){
            console.log('*********************The Earth Ship has been destroyed! Game over!**************************************');
            
            }
            return;
        }
    }


const USSRuth = new EarthShip();



const earthShipFires = () => {
    if (Math.random() <= USSRuth.accuracy){
        Aliens[0].hull -= USSRuth.firepower;
        let newHit = document.createElement('p');
        newHit.innerHTML = `${Aliens[0].name} was hit! Hull Left for ${Aliens[0].name}: ${Aliens[0].hull}`;
        theRing.appendChild(newHit);
        Aliens[0].checkWin();
        } else {
            let miss = document.createElement('p');
            miss.innerHTML = `Dangit Captain! We missed!`;
            theRing.appendChild(miss);
        }


    }



// const playGame = () => {
//    for (let i = 0; i <= Aliens.length; i++){
//        while (USSRuth.hull > 0){
//            USSRuth.fight(Aliens[i]);
//            Aliens[i].checkWin();
//            if (Aliens.length === 0){
//                return;
//            }
//            Aliens[i].fight(USSRuth);
//            USSRuth.checkWin(); }
              
//    }
// }

// playGame();