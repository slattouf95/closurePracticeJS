// greetingFactory takes in an initial string that is stored and returns a function.
// The returned function should take in the name of the person to greet and return
// a complete greeting in the form of "{greeting}, {person}"

// EXAMPLE
// var helloGreeting = greeting('Hello');
// helloGreeting('Sam'); // 'Hello, Sam'
// var holaGreeting = greeting('Hola');
// holaGreeting('Shi-Hao'); // 'Hola, Shi-Hao'

var greetingFactory = function(greeting) {
	var greet = greeting;
	return function(string){
		return greet + ' ' + string

	}
  
}

var helloGreeting = greetingFactory('Hello');
 

// sumCalculator takes in an initial number that is stored and returns a function
// that continues adding to the stored value. The function returned by
// sumCalculator should take as many numbers as passed in, sum them to the
// stored value, and return the new total

// EXAMPLE
// var calculatorOne = sumCalculator(25);
// var calculatorTwo = sumCalculator(10);

// calculatorOne(1, 3) // 29
// calculatorTwo() // 10
// calculatorOne(1, 1, 4, 5) // 40
// calculatorTwo() // 10



var sumCalculator = function(initialValue) {
  var value = initialValue;
 

  return function(){
  	
  	if(arguments.length === 0){
  		return value;
  	}
  	for( var i = 0; i < arguments.length; i ++){
  		value += arguments[i]
  	}  
  	return value;	
  };
}
var calculatorOne = sumCalculator(25);
var calculatorTwo = sumCalculator(10);

calculatorTwo();


// coinFlipTally should generate a storage object, take no arguments, and 
// return another object with two methods, makeCoinFlip and checkTally. The returned 
// object should contain no other properties

// makeCoinFlip should make a 50/50 coin flip, adding to a tally, and returning 
// 'heads' or 'tails'.
// checkTally should return a storage object containing the coin flips.

// example storage object format:
// {
//   heads: 4,
//   tails: 2
// }

// EXAMPLE

// var gameTally = coinFlipTally();
// gameTally.makeCoinFlip(); // returns 'heads' or 'tails'
// gameTally.checkTally(); // should have updated count with heads added or tails added
// gameTally.makeCoinFlip();
// gameTally.checkTally(); // should have updated count with heads added or tails added
// gameTally.makeCoinFlip();
// gameTally.checkTally(); // should have updated count with heads added or tails added
// gameTally.makeCoinFlip();
// gameTally.checkTally(); // should have updated count with heads added or tails added

var coinFlipTally = function() {
	var storage = {
		heads: 0,
		tails: 0
	};
  // INSERT CODE HERE

  return {
  	makeCoinFlip : function(){
  		var fitty =  Math.floor(Math.random() * Math.floor(2));
  		console.log(fitty);
  		
  		if( fitty === 0){
  			storage.heads ++;
  			return 'heads';
  		}else if( fitty === 1){
  			storage.tails ++;
  			return 'tails';
  		}
  	},
  	checkTally : function(){
  		return storage;
  	}
  }
}
 var gameTally = coinFlipTally();
gameTally.makeCoinFlip();
gameTally.makeCoinFlip();
console.log(gameTally.checkTally());
gameTally.makeCoinFlip();
console.log(gameTally.checkTally());
module.exports = {
  greetingFactory: greetingFactory,
  sumCalculator: sumCalculator,
  coinFlipTally: coinFlipTally
}