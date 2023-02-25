const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');

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
        expect(calculateNumber('SUM', i, rem)).to.equal(i + 1);
      });
    } else {
      it(`should return ${i}`, () => {
        expect(calculateNumber('SUM', i, rem)).to.equal(i);
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
        expect(calculateNumber('SUBTRACT', i, rem)).to.equal(i - 1);
      });
    } else {
      it(`should return ${i}`, () => {
        expect(calculateNumber('SUBTRACT', i, rem)).to.equal(i);
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
        expect(calculateNumber('DIVIDE', i, rem)).to.equal(i);
      });
    } else {
      it(`should return Error`, () => {
        expect(calculateNumber('DIVIDE', i, rem)).to.equal('Error');
      });
    }
  }
});

