const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
    it('should return fizz for numbers divisible by 3 and not 5', () => {
        const normalCases = [3,27,63];
        normalCases.map(function(input) {
            let result = fizzBuzzer(input);
            result.should.equal('fizz')
        })
    })
    it('should return buzz for numbers divisible by 5 and not 3', () => {
        const normalCases = [5,25,110];
        normalCases.map(function(input) {
            let result = fizzBuzzer(input);
            result.should.equal('buzz')
        })
    })
    it('should return fizz-buzz for numbers divisible by 3 and 5', () => {
        const normalCases = [15,90,150];
        normalCases.map(function(input) {
            let result = fizzBuzzer(input);
            result.should.equal('fizz-buzz')
        })
    })
    it('should throw an error if the input is not a number', () => {
        const badCases = ['a', 'fizz', true];
        badCases.map(function(input) {
            (function() {
                fizzBuzzer(input)})
                .should.throw(Error);
        })
    })
})
