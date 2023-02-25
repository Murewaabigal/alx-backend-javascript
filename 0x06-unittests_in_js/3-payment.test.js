const assert = require('assert');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  const spy = sinon.spy(Utils, 'calculateNumber');

  sendPaymentRequestToApi(100, 20);
  assert(spy.calledOnce);
  assert.equal(spy.getCall(0).args[0], 'SUM')
  assert.equal(spy.getCall(0).args[1], 100)
  assert.equal(spy.getCall(0).args[2], 20)
 
  spy.restore();
})
