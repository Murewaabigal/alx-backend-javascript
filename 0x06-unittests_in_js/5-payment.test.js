const assert = require('assert');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

// const sandbox = sinon.createSandbox();

let spy;

beforeEach(function () {
  // runs before each test in this block
  // sandbox.spy(console, 'log')
  spy = sinon.spy(console, 'log');
});

afterEach(function () {
  // runs after each test in this block
  // sandbox.restore()
  spy.restore()
});


describe('sendPaymentRequestToApi', function() {

  it('sendPaymentRequestToApi with 100 and 20', function () {
    sendPaymentRequestToApi(100, 20);
    assert.equal(spy.getCall(0).args[0], 'The total is: 120')
    assert(spy.calledOnce);
  }) 
})

describe('sendPaymentRequestToApi', function() {

  it('sendPaymentRequestToApi with 10 and 10', function () {
    sendPaymentRequestToApi(10, 10);
    assert.equal(spy.getCall(0).args[0], 'The total is: 20')
    assert(spy.calledOnce);
  }) 
})

