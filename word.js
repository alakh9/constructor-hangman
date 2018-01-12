var letter = require('./letter.js');

function Word(words) {
	this.words = words;
	this.wordArray = [];
	this.found = false;

	this.findWord = function() {
		this.found = this.wordArray.every(function(currLett) {
			return currLett.appear;
		});
		return this.found;
	};

	this.wordMix = function() {
		var string = '';
		for (var i=0; i < this.wordArray.length; i++){
			string += this.wordArray[i].letterMix();
		}
		return string;
	};

	this.letter = function() {
		for (var i=0; i < this.words.length; i++) {
			this.wordArray.push( new letter(this.words[i]));
		}
	};

	this.checkLetter = function(letterGuessed) {
		var toReturn = 0;

		for (var i = 0; i < this.wordArray.length; i++) {
			if (this.wordArray[i].charac == letterGuessed){
				this.wordArray[i].appear = true;
				toReturn++;
			}
		}
		return toReturn;
	};

}

module.exports = Word;