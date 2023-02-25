const assert = require('assert');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function() {
  it('should wait for getPaymentTokenFromAPI to resolve', function(done) {
    getPaymentTokenFromAPI(true)
    .then((data) => assert.equal(data.data, 'Successful response from the API'))
    done()
  })

  it('should not return a promise', function() {
    assert.equal(getPaymentTokenFromAPI(false), undefined)
  })

})
