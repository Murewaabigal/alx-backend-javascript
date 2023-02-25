const assert = require('assert');
const request = require('request');

const url = "http://127.0.0.1:7865/";

describe('api', function() {
  it('should respond with Welcome to the payment system', function(done) {
    request(url, function(err, response, body) {
      assert.equal(response.statusCode, 200)
      assert.equal(body, 'Welcome to the payment system')
    })
    done()
  })

  it('should respond with Payment methods for cart 12', function(done) {
    request(url + 'cart/12', function(err, response, body) {
      assert.equal(response.statusCode, 200)
      assert.equal(body, 'Payment methods for cart 12')
    })
    done()
  })

  it('should respond with 404', function(done) {
    request(url + 'cart/hello', function(err, response, body) {
      assert.equal(response.statusCode, 404)
    })
    done()
  })

})
