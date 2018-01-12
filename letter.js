var letter = function(let){
	this.charac = let;
	this.appear = false;
	this.letterMix = function(){
		return !(this.appear) ? "_" : this.charac;
	};
};

module.exports = letter;