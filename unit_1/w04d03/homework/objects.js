class Hamster {
    constructor(owner = '', name, price = 15){
        this.owner = owner;
        this.name = name;
        this.price = price;
    }

    wheelRun(){
        console.log('squeal squeak')
    } 
    eatFood(){ 
        console.log "nibble nibble"}

    getPrice(){
        return this.price;
    }

}