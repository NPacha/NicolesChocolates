class Hamster {
    constructor(name, owner = '', price = 15){
        this.name = name;
        this.owner = owner;
        this.price = price;
    }

    wheelRun(){
        console.log('squeal squeak')
    } 
    eatFood(){ 
        console.log("nibble nibble")}

    getPrice(){
        return this.price;
    }

}

class Person {
    constructor(name, age = 0, height = 0, weight = 0, mood = 0, hamsters = [], bankAccount= 0){
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight= weight;
        this.mood = mood;
        this.hamsters = hamsters;
        this.bankAccount = bankAccount;
    }

    getName(){
        return name;
    }
    getAge(){
        return this.age;
    }
    getWeight(){
        return this.weight;
    }
    greet(){
        console.log(`Hello! I am ${this.name}.`)
    }
    eat(num){
        this.weight+= num;
        this.mood+= num;
    }
    exercise(num){
        this.weight-= num;
    }
    ageUp(num){
        this.age += num;
        this.height+= num;
        this.weight+= num;
        this.mood-= num;
        this.bankAccount += 10;
    }
    buyHamster(hamObj){
        this.hamsters.push(hamObj);
        this.mood+= 10;
        this.bankAccount -= hamObj.getPrice();
    }
}

//1.
const newPerson = new Person('Timmy');
console.log(newPerson);
//2.
newPerson.ageUp(5);
console.log(newPerson);
//3. 
newPerson.eat(5);
console.log(newPerson);
//4. 
newPerson.exercise(5);
console.log(newPerson);
//5.
newPerson.ageUp(9);
console.log(newPerson)
//6.
const newHamster = new Hamster('Gus');
console.log(newHamster);
//7.
newHamster.owner = newPerson.name;
console.log(newHamster);
//8.
newPerson.buyHamster(newHamster);
console.log(newPerson);
//9. 
newPerson.ageUp(15);
console.log(newPerson);
//10.
newPerson.eat(2);
console.log(newPerson);
//11.
newPerson.exercise(2);
console.log(newPerson);

