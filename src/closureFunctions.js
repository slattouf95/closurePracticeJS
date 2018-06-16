// EXAMPLE

// greetingFactory takes in an initial string that is stored and returns a function.
// The returned function should take in the name of the person to greet and return
// a complete greeting in the form of "{greeting}, {person}"

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

// EXAMPLE

// sumCalculator takes in an initial number that is stored and returns a function
// that continues adding to the stored value. The function returned by
// sumCalculator should take as many numbers as passed in, sum them to the
// stored value, and return the new total

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



module.exports = {
  greetingFactory: greetingFactory,
  sumCalculator: sumCalculator,
}