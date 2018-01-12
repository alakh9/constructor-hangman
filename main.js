var Word = require('./word.js');
var prompt = require('prompt');

console.log("This Hang-Man game is based on IceCream Flavors!");
console.log("Guess a Flavor!");

prompt.start();

game = {
 	iceCreams: ["vanilla", "chocolate", "strawberry", "hazelnut","mint","cookiedough"],
 	flavorsRight: 0,
 	guesses: 10,
	thisFlavor: null,
	 
	Guesses : function(){
		this.guesses= 10;
	},
 	
 	gameStarts : function (wrd) {
        this.thisFlavor = new Word(this.iceCreams[Math.floor(Math.random()* this.iceCreams.length)]);
        this.thisFlavor.letter();
        this.Guesses();
 		this.User();
 	},


 	User : function(){
 		var user = this;
 		prompt.get(['letterGuessed'], function(err, result){
 			var lettersPicked = user.thisFlavor.checkLetter(result.letterGuessed);
 			if(lettersPicked === 0) {
 				console.log("NAHHH!");
 				user.guesses--;
 				
 			} else {
 				console.log("YASSS");
 					if(user.thisFlavor.findWord()){
                         console.log("Your Right! the flavor was -", user.thisFlavor.words, "!");
                        // flavorsRight++;
                        // console.log(flavorsRight);
 						return;
 					}
 			}

 			console.log("Guesses remaining: " + user.guesses);
 			
 			if(user.guesses > 0){
 				user.User();
 			}
 			else if(user.guesses === 0){
 				console.log("Go to Baskin Robbins & study the flavors then try again! :( It was - ", user.thisFlavor.words, "!");
 			} else {
 				console.log(user.thisFlavor.wordMix());
 			}
 		});

 	}


};

game.gameStarts();
// flavorsRight;