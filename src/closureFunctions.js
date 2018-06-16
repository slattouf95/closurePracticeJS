// greetingFactory takes in an initial string that is stored and returns a function.
// The returned function should take in the name of the person to greet and return
// a complete greeting in the form of "{greeting}, {person}"

// EXAMPLE
// var helloGreeting = greeting('Hello');
// helloGreeting('Sam'); // 'Hello, Sam'
// var holaGreeting = greeting('Hola');
// holaGreeting('Shi-Hao'); // 'Hola, Shi-Hao'

var greetingFactory = function(greeting) {

  /* SOLUTION */
  return function(name) {
    return greeting + ', ' + name;
  }
}

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

  /* SOLUTION */ 
  var sum = initialValue || 0;

  return function() {
    var args = Array.from(arguments);

    sum = args.reduce(function(accumulator, currentVal) {
      return accumulator + currentVal;
    }, sum);

    return sum;
  }
}

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

  /* SOLUTION */
  var tally = {
    heads: 0,
    tails: 0
  };

  var coinFlipMethods = {
    makeCoinFlip: function() {
      if (Math.random() < 0.50) {
        tally.heads++;
        return 'heads';
      } else {
        tally.tails++;
        return 'tails';
      }
    },

    checkTally: function() {
      return tally;
    }
  };

  return coinFlipMethods;
}

module.exports = {
  greetingFactory: greetingFactory,
  sumCalculator: sumCalculator,
  coinFlipTally: coinFlipTally
}