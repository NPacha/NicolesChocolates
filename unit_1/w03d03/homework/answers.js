//////DATATYPES REFRESHER/////
// // 1. A light switch that can be either on or off.
// => datatype: boolean 
// => data structure example: const lightOn = true; 
// // 2. A user's email address.
// => datatype: string 
// => data structure example: const emailaddress = 'nicolekpacha@gmail.com'; 
// // 3. A spaceship with a hull, laser blasters, tractor beam, and warp drive.
// => datatype: object 
// => data structure example: const spaceship = {
//     parts: ['hull', 'laser blaseter', 'tractor beam', 'warp drive']
// }
// // 4. A list of student names from our class.
// => datatype: array
// => data structure example: const studentNames = ['Nicole', 'Sawyer', 'James'] 
// // 5. A list of student names from our class, each with a location.
// => datatype: array of objects
// => data structure example: const students = [
//     {
//         name: 'Nicole',
//         location: 'Denver',
//     },
//     {
//         name: 'Sawyer',
//         location: 'NY'
//     },
//     {
//         name: 'James',
//         location: 'Chicago'
//     }
// ]
// // 6. A list of student names from our class, each with a location and each with a list of favorite tv shows.
// => datatype: array of objects
// => data structure example: => const students = [
//     {
//         name: 'Nicole',
//         location: 'Denver',
            // favMovies: ['ameri', 'sfda']
//     },
//     {
//         name: 'Sawyer',
//         location: 'NY',
            // favMovies: ['asf','asdf']
//     },
//     {
//         name: 'James',
//         location: 'Chicago'
            // favMovies: ['asf','asdf']
//     }
// ]

/////////////////TAKE IT EASY/////////////////
//1.
const rainbow = ['red', 'green', 'orange', 'yellow', 'purple', 'blue']

//2.
for (let i = 0; i < rainbow.length; i++){
if(rainbow[i] === 'blue'){
    console.log(rainbow[i]);
}
}

//3.
const Nicole = {
    favFood: 'Italian',
    hobbies: ['guitar', 'hiking', 'spending time with family'],
    hometown: 'Denver',
    favDataType: 'Objects of course'
}
//4.
console.log(Nicole.hobbies)

//////////////////////CRAZY OBJECT//////////////////
const crazyObject = {
    taco: [{meat: 'steak',
           cheese: ['panela', 'queso', 'chihuahua']},
           {meat: 'chicken',
            salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
          ],
    larry: {
      nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
      quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
      characters: [{
        name: "Jeff",
        occupation: "manager"
      },
      {
        name: "funkhauser",
        occupation: "tv dude"
      },
      {
        name: "susie",
        occupation: "jeffs wife",
        favourtieHobby: "Swearing at Larry and Jeff"
      },
      ]
    }
  }
  //1.
  console.log(crazyObject.taco[1].salsa[5]);
  //2.
  console.log(crazyObject.larry.quotes[0])
  //3.
  console.log(crazyObject.larry.characters[2].favourtieHobby)
  //4.
  console.log(crazyObject.larry.nicknames[1])
  //5.
  console.log(crazyObject.larry.characters[1])
  //6.
  crazyObject.larry.quotes.push('I\'m trying to elevate small talk to medium talk');
  console.log(crazyObject.larry.quotes);

  /////////////Object-ception//////////////

  const inception = {
    reality: {
        dreamLayer1: {
            dreamLayer2: {
                dreamLayer3: {
                    dreamLayer4: {
                        dreamLayer5: {
                            dreamLayer6: {
                                limbo: "Joseph Gordon Levitt"
                           }
                        }
                    }
                }
            }
        }
    }
 }

 inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo= null;
 console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo)

/////////////////BOND FILMS/////////////////
const bondFilms = [
    { "title" : "Skyfall", "year" : 2012, "actor" : "Daniel Craig", "gross" : "$1,108,561,008" },
    { "title" : "Thunderball", "year" : 1965, "actor" : "Sean Connery", "gross" : "$1,014,941,117" },
    { "title" : "Goldfinger", "year" : 1964, "actor" : "Sean Connery", "gross" : "$912,257,512" },
    { "title" : "Live and Let Die", "year" : 1973, "actor" : "Roger Moore", "gross" : "$825,110,761" },
    { "title" : "You Only Live Twice", "year" : 1967, "actor" : "Sean Connery", "gross" : "$756,544,419" },
    { "title" : "The Spy Who Loved Me", "year" : 1977, "actor" : "Roger Moore", "gross" : "$692,713,752" },
    { "title" : "Casino Royale", "year" : 2006, "actor" : "Daniel Craig", "gross" : "$669,789,482" },
    { "title" : "Moonraker", "year" : 1979, "actor" : "Roger Moore", "gross" : "$655,872,400" },
    { "title" : "Diamonds Are Forever", "year" : 1971, "actor" : "Sean Connery", "gross" : "$648,514,469" },
    { "title" : "Quantum of Solace", "year" : 2008, "actor" : "Daniel Craig", "gross" : "$622,246,378" },
    { "title" : "From Russia with Love", "year" : 1963, "actor" : "Sean Connery", "gross" : "$576,277,964" },
    { "title" : "Die Another Day", "year" : 2002, "actor" : "Pierce Brosnan", "gross" : "$543,639,638" },
    { "title" : "Goldeneye", "year" : 1995, "actor" : "Pierce Brosnan", "gross" : "$529,548,711" },
    { "title" : "On Her Majesty's Secret Service", "year" : 1969, "actor" : "George Lazenby", "gross" : "$505,899,782" },
    { "title" : "The World is Not Enough", "year" : 1999, "actor" : "Pierce Brosnan", "gross" : "$491,617,153" },
    { "title" : "For Your Eyes Only", "year" : 1981, "actor" : "Roger Moore", "gross" : "$486,468,881" },
    { "title" : "Tomorrow Never Dies", "year" : 1997, "actor" : "Pierce Brosnan", "gross" : "$478,946,402" },
    { "title" : "The Man with the Golden Gun", "year" : 1974, "actor" : "Roger Moore", "gross" : "$448,249,281" },
    { "title" : "Dr. No", "year" : 1962, "actor" : "Sean Connery", "gross" : "$440,759,072" },
    { "title" : "Octopussy", "year" : 1983, "actor" : "Roger Moore", "gross" : "$426,244,352" },
    { "title" : "The Living Daylights", "year" : 1987, "actor" : "Timothy Dalton", "gross" : "$381,088,866" },
    { "title" : "A View to a Kill", "year" : 1985, "actor" : "Roger Moore", "gross" : "$321,172,633" },
    { "title" : "License to Kill", "year" : 1989, "actor" : "Timothy Dalton", "gross" : "$285,157,191" }
  ];

  //1.
  const bondTitles = [];
  for (let i = 0; i < bondFilms.length; i++){
      bondTitles.push(bondFilms[i].title);
  }
  console.log(bondTitles)

  //2. 
  const oddBonds = [];
  for (let i= 0; i < bondFilms.length; i++){
      if (bondFilms[i].year % 2 !== 0){
          oddBonds.push(bondFilms[i].year)
      }
  }

  console.log(oddBonds)

  //3. 

//   const grossOfBond =sum[];
let currentFilm = 0;
  for (let i = 0; i < bondFilms.length; i++){
      currentFilm += (parseInt(bondFilms[i].gross.replace('$', '').replace(',','').replace(',','')));

  }

 console.log(currentFilm)
