var expect = require('expect');
var math = require('./math.js');

describe('adder', function () {
    it('should add two arguments', function () {
        expect(math.adder(2,2)).toEqual(4);//something to add up here);
    });

    it('should be a number', function () {
        expect(math.adder(3,10)).toBeA('number');//something to be something here);
    });

});

describe('multiplyer', function () {
    it('should multiply two arguments', function () {
        expect(math.multiplyer(2,2)).toEqual(4);//something to add up here);
    });

    it('should be a number', function () {
        expect(math.multiplyer(3,7)).toBeA('number');//something to be something here);
    });

})
