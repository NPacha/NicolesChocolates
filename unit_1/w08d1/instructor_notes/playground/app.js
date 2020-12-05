

class Team {
    constructor(name, $el){
        this.name = name;
        this.score = 0;
        this.$el = $el; //el is short for elevant. covention that you use when you name a variable inside of a constructor.
    
    }

    increaseScore(pointValue){
        this.score += pointValue;
        this.$el.children().eq(0).text(this.score);
    }

    decreaseScore(pointValue){
        this.score -= pointValue;
        this.$el.children().eq(0).text(this.score);
    }
    setup(){
        this.$el.children().eq(1).on('click', (event) => {
            //current point value should be imported from another class
            this.increaseScore(100)

        })
        this.$el.children().eq(2).on('click', (event)=> {
            this.decreaseScore(100)

        })
        return this;
    }
}
$(()=>{
   
    const team1 = new Team('team1', $('#team1')).setup();
    const team2 = new Team('team2', $('#team2')).setup();
    const team3 = new Team('team3', $('#team3')).setup();
    

})












