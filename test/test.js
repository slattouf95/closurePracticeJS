var assert = require('assert');
var { expect } = require('chai');
var { greetingFactory, sumCalculator, fastFoodRegisterFactory } = require('../src/closureFunctions.js');

describe('Closures', function() {
  describe('#greetingFactory()', function() {
    it('should return a function', function() {
      var greetingFactoryOutput = greetingFactory();
      expect(greetingFactoryOutput).to.be.a('function');
    });

    it('should return a function that returns a string', function() {
      var helloGreeting = greetingFactory('Hello');

      var result = helloGreeting('Sam');

      expect(result).to.be.a('string');
    })

    it('should take a string input and save it for different name calls', function() {
      var helloGreeting = greetingFactory('Hello');

      var firstGreeting = helloGreeting('Tim').includes('Hello'); 
      var secondGreeting = helloGreeting('Kenny').includes('Hello');

      expect(firstGreeting).to.be.true;
      expect(secondGreeting).to.be.true;
    });

    it('should return a function that takes in a string name argument and concatenates it to the greeting', function() {
      var japaneseGreeting = greetingFactory('お早う');

      var firstGreeting = japaneseGreeting('Steve');
      var secondGreeting = japaneseGreeting('Slothecca');

      var isNamePresentFirst = firstGreeting.includes('Steve');
      var isNamePresentSecond = secondGreeting.includes('Slothecca');

      expect(isNamePresentFirst).to.be.true;
      expect(isNamePresentSecond).to.be.true;
    });

    it('should return the greeting in the appropriate "{greeting}, {name}" format', function() {
      var holaGreeting = greetingFactory('Hola');

      var firstGreeting = holaGreeting('Danny');
      var secondGreeting = holaGreeting('Jonathan');

      expect(firstGreeting).to.equal('Hola, Danny');
      expect(secondGreeting).to.equal('Hola, Jonathan');

    });
  });

  describe('#sumCalculator()', function() {
    it('should return a function', function() {
      var sumCalculatorOutput = sumCalculator();
      expect(sumCalculatorOutput).to.be.a('function');
    });

    it('should return a function that returns a number', function() {
      var testCalculator = sumCalculator(10);

      expect(testCalculator()).to.be.a('number');
    });

    it('should account for the initialValue passed in', function() {
      var testCalculator = sumCalculator(10);

      expect(testCalculator()).to.equal(10);
      expect(testCalculator(5)).to.equal(15);
    });

    it('should set stored value to 0 if no initialValue is passed in', function() {
      var testCalculator = sumCalculator();

      expect(testCalculator()).to.equal(0);
    });

    it('should account for varying number of arguments', function() {
      var firstTestCalculator = sumCalculator(27);

      expect(firstTestCalculator(1)).to.equal(28);

      var secondTestCalculator = sumCalculator(20);

      expect(secondTestCalculator(1, 2, 3)).to.equal(26);
    });
  });

  describe('#')
});