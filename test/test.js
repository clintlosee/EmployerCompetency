var expect = require('expect');
var math = require('./math.js');
var request = require('supertest');
var express = require('express');

var app = require('../app.js');

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

});

describe('GET /api', function() {
    it('respond with HTMl', function(done) {
        request(app)
        .get('/api')
        .send({username: 'Clint Losee', email: 'email@email.com'})
        .set('Accept', 'text/html')
        .expect('Content-Type', /text/)
        .expect(200, done);
    })
});

describe('POST /api JSON structure', function() {
    it('should expect JSON structure', function(done) {
        request(app)
        .post('/api')
        .send({username: 'Clint Losee', email: 'email@email.com'})
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect({username: 'Clint Losee', email: 'email@email.com'})
        .expect(200, done);
    })
})
