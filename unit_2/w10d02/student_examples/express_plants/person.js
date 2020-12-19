class Person {
    constructor(name){
        this.name = name
    }
    sayHi(){
        console.log(`Hi from ${this.name}`)
    }
}

module.exports = Person;