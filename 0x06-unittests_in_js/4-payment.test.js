const assert = require('assert');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
  const spy = sinon.spy(console, 'log')

  sendPaymentRequestToApi(100, 20);
  assert(stub.calledOnce);
  assert.equal(stub.getCall(0).args[0], 'SUM')
  assert.equal(stub.getCall(0).args[1], 100)
  assert.equal(stub.getCall(0).args[2], 20)
  assert.equal(spy.getCall(0).args[0], 'The total is: 10')
 
  stub.restore();
  spy.restore();
})
