const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('test calculateNumber sum', () => {
  for (let i = 0; i <= 140; i++) {
    let rem = i % 10;
    if (rem) {
      rem /= 10;
    } else {
      rem = 1;
    }
    if (i === 0) {
      rem = 0;
    }
    if (rem >= 0.5) {
      it(`should return ${i + 1}`, () => {
        assert.equal(calculateNumber('SUM', i, rem), i + 1);
      });
    } else {
      it(`should return ${i}`, () => {
        assert.equal(calculateNumber('SUM', i, rem), i);
      });
    }
  }
});

describe('test calculateNumber subtract', () => {
  for (let i = 0; i <= 140; i++) {
    let rem = i % 10;
    if (rem) {
      rem /= 10;
    } else {
      rem = 1;
    }
    if (i === 0) {
      rem = 0;
    }
    if (rem >= 0.5) {
      it(`should return ${i - 1}`, () => {
        assert.equal(calculateNumber('SUBTRACT', i, rem), i - 1);
      });
    } else {
      it(`should return ${i}`, () => {
        assert.equal(calculateNumber('SUBTRACT', i, rem), i);
      });
    }
  }
});

describe('test calculateNumber divide', () => {
  for (let i = 0; i <= 140; i++) {
    let rem = i % 10;
    if (rem) {
      rem /= 10;
    } else {
      rem = 1;
    }
    if (i === 0) {
      rem = 0;
    }
    if (rem >= 0.5) {
      it(`should return ${i}`, () => {
        assert.equal(calculateNumber('DIVIDE', i, rem), i);
      });
    } else {
      it(`should return Error`, () => {
        assert.equal(calculateNumber('DIVIDE', i, rem), 'Error');
      });
    }
  }
});

