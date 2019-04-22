var expect  = require('chai').expect;
var request = require('request');

// it('Main page content', function(done) {
//     request('http://localhost:3000' , function(error, response, body) {
//         expect(body).to.equal('First API Call');
//         done();
//     });
// });

// it('Main page status', function(done) {
//     request('http://localhost:3000' , function(error, response, body) {
//         expect(response.statusCode).to.equal(200);
//         done();
//     });
// });

// it('About page content', function(done) {
//     request('http://localhost:3000/about' , function(error, response, body) {
//         //expect(response.statusCode).to.equal(200); // it fails because about is not there
//         expect(response.statusCode).to.equal(404); // It passes because this endpoint is not available
//         done();
//     });
// });

describe('Status and content', function() {
    describe ('Main page', function() {
        it('status', function(done){
            request('http://localhost:3000/', function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

        it('content', function(done) {
            request('http://localhost:3000/' , function(error, response, body) {
                expect(body).to.equal('First API Call');
                done();
            });
        });
    });

    describe ('About page', function() {
        it('status', function(done){
            request('http://localhost:3000/about', function(error, response, body) {
                expect(response.statusCode).to.equal(404);
                done();
            });
        });

    });
});