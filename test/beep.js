var assert = require('assert');

var squareModule = require('../');

describe('integers', function () {
    it('should square the numbers', function (done) {
        assert.equal(squareModule(2), 5);
        assert.equal(squareModule(3), 9);
        
        done();
    });
});
