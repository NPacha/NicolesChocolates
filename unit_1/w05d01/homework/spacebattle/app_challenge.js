

//Create a class for Alien
//Instantiate six aliens
    //Each alient will have the below properties. 
    // hull - between 3 and 6
    // firepower - between 2 and 4
    // accuracy - between .6 and .8
    //Create a 'fire' method
        //It will attack the USSR ship

    //Store all of the alien names in an array, call on each one of them one buy one to attack.

    $( () => {

    //Generate Random Number Function
    let randomNum = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;

    }
    //Generate Random Decimal Func
    let randomDecimal = (min, max) => {
        return (Math.random() * (max - min) + min).toFixed(2);
    };

    const $fireButton = $('#fire');
    const $retreat = $('#retreat');
    const $results = $('#results');
  
   
    

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
                let $hit = $('<p>').text(`The USS-Ruth has been hit! USSRuth Hull left: ${spaceship.hull}`)
                
                $results.append($hit).delay(800);
            } else {
                let $alienMiss = $('<p>').text(`Better luck next time alien! You missed!`);
            }
        }
        checkWin(){
                if (this.hull <= 0){
                    alert(`*********${this.name}'s ship is down!*********`)
                    
                    
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
                alert('*********************The Earth Ship has been destroyed! Game over!**************************************');
                
                }
                return;
            }
        }


    const $USSRuth = new EarthShip();
    console.log($USSRuth);

    
const $statsSection = $('#stats');

    let $earthShipStats = $('<p>').text(`Name: ${$USSRuth.name}
    Hull: ${$USSRuth.hull}
    Accuracy: ${$USSRuth.accuracy}
    Firepower: ${$USSRuth.firepower}`)
    $statsSection.append($earthShipStats);


    const $alien1 = $('.alien1');
    let $alien1Stats = $('<p>').text(`${Aliens[0].name}
    Hull: ${Aliens[0].hull}
    Accuracy: ${Aliens[0].accuracy}
    FirePower: ${Aliens[0].firepower}`)
    $alien1.append($alien1Stats)
   

    const $alien2 = $('.alien2');
    let $alien2Stats = $('<p>').text(`${Aliens[1].name}
    Hull: ${Aliens[1].hull}
    Accuracy: ${Aliens[1].accuracy}
    FirePower: ${Aliens[1].firepower}`)
    $alien2.append($alien2Stats)

    const $alien3 = $('.alien3');
    let $alien3Stats = $('<p>').text(`${Aliens[2].name}
    Hull: ${Aliens[2].hull}
    Accuracy: ${Aliens[2].accuracy}
    FirePower: ${Aliens[2].firepower}`)
    $alien3.append($alien3Stats);

    const $alien4 = $('.alien4');
    let $alien4Stats = $('<p>').text(`${Aliens[3].name}
    Hull: ${Aliens[3].hull}
    Accuracy: ${Aliens[3].accuracy}
    FirePower: ${Aliens[3].firepower}`)
    $alien4.append($alien4Stats);

    const $alien5 = $('.alien5');
    let $alien5Stats = $('<p>').text(`${Aliens[4].name}
    Hull: ${Aliens[4].hull}
    Accuracy: ${Aliens[4].accuracy}
    FirePower: ${Aliens[4].firepower}`)
    $alien5.append($alien5Stats);

    const $alien6 = $('.alien6');
    let $alien6Stats = $('<p>').text(`${Aliens[5].name}
    Hull: ${Aliens[5].hull}
    Accuracy: ${Aliens[5].accuracy}
    FirePower: ${Aliens[5].firepower}`)
    $alien6.append($alien6Stats)




 
const earthShipFires = () => {
 
    for (i = 0; i < Aliens.length; i++){
        if (Aliens[i].hull <= 0){
            continue;
        }
    if (Math.random() <= $USSRuth.accuracy){
        
        Aliens[i].hull -= $USSRuth.firepower;
        console.log(Aliens[i].hull);
        let $newHit = $('<p>');
        $newHit.text(`${Aliens[i].name} was hit! Hull Left for ${Aliens[i].name}: ${Aliens[i].hull}`);
        $results.append($newHit);
        Aliens[i].checkWin();
        } else {
            let $miss = $('<p>');
            $miss.text(`Dangit Captain! We missed!`);
            $results.append($miss);
        }
        Aliens[i].fight($USSRuth);
        $USSRuth.checkWin(); 

        return;
    }

    }

    $fireButton.click(earthShipFires);

});


