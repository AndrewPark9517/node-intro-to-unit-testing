const expect = require('chai').expect;
const fizzBuzzer = require('../fizzBuzzer.js');

describe ('fizzBuzzer', function () {

    it('Should return string based on divisibility by 3, 5, or 15', 
        function() {
            const normalCases = [
                {arg: 3, expected: 'fizz'},
                {arg: 5, expected: 'buzz'},
                {arg: 15, expected: 'fizz-buzz'}
            ];

            normalCases.forEach(function(testInstance) {
                const answer = fizzBuzzer(testInstance.arg);
                expect(answer).to.equal(testInstance.expected);
            });
        });

    it('Should throw error for non-numerals', function() {
        const badCases = [
            {arg: 'd'},
            {arg: "54"},
            {arg: true}
        ];

        badCases.forEach(function(testInstance) {
            expect(function() {
                fizzBuzzer(testInstance.arg).to.throw(Error);
            });
        });
    });
});