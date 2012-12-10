var assert = require('assert');
require('should');

var squareModule = require('../');

describe('integers', function () {
    it('should square the numbers', function (done) {
        // you can use asserts
        assert.equal(squareModule(2), 4);
        assert.equal(squareModule(3), 9);
        
        // or should-style assertions work too
        squareModule(5).should.eql(25);
        
        done();
    });
});
