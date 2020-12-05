class Pet {
    constructor(owner, name){
        this.owner = owner;
        this.name = name;
    }
    walk(){
        console.log('walka walka');
    }
}
​
const pet = new Pet('Sawyer', 'Sawyer'); 
console.log(pet);
pet.walk();
​
class Dog extends Pet {
    constructor(owner, name){
        super(owner, name);
        this.price = 20;
    }
    bark(){
        console.log('bark');
    }
    chaseTail(){
        console.log('oh boy oh boy oh boy');
    }
    getPrice(){
        return this.price; 
    }
}
const dog = new Dog();
console.log(dog);
dog.walk();
dog.bark();
dog.chaseTail();
dog.getPrice();
​
class Cat extends Pet {
    constructor(owner, name){
        super(owner, name);
        this.price = 10;
    }
    purr(){
        console.log('purrrr');
    }
    clean(){
        console.log('cleaning');
    }
    getPrice(){
        return this.price;
    }
    walk(){
        console.log('strut strut');
    }
}
​
const cat = new Cat();
console.log(cat);
cat.purr();
cat.clean();
cat.getPrice();
cat.walk();
​
​
dog.name = "Saucey";
console.log(dog);
cat.name = "soy sauce";
console.log(cat);








