class Car {
    constructor(make, serialNumber){
        this.serialNumber = serialNumber;
        this.maker = make;
    }

    drive(){
            console.log('vroooom')
    }
}

const newCar = new Car('Mazda', 12345);


class Factory {
    constructor(company){
            this.company = company;
            this.cars = [];
    }

    generateCar (){
        const newCar = new Car(this.company, this.cars.length);
        this.cars.push(newCar);
    }

    findCar (index) {
        return this.cars[index];
    }
}

const tesla = new Factory('Tesla');

console.log(tesla);

tesla.generateCar();
tesla.generateCar();
tesla.generateCar();
tesla.generateCar();
tesla.generateCar();

console.log(tesla.cars);
console.log(tesla.findCar(1));