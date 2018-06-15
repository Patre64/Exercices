class mouvRobot extends robot {
    constructor() {
        super();
        this.brasgauche = "levés";
        this.brasdroit = "levés";
    }
    marcher() {
        return "Je marche";
    };


    manger() {

    };


    sauter() {

    };


    grimper() {

    };


    tomber() {

    };

}

var bot = new mouvRobot();
console.log(bot);
console.log(bot.marcher());