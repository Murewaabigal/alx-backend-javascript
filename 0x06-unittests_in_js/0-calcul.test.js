const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
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
        assert.equal(calculateNumber(i, rem), i + 1);
      });
    } else {
      it(`should return ${i}`, () => {
        assert.equal(calculateNumber(i, rem), i);
      });
    }
  }
});

/* describe('calculateNumber', function () {
  for(let i = 0; i < 140; i++){
    it(`should return ${i * 2}`, function () {
      assert.equal(calculateNumber(i, i), i * 2);
    });
  }
}); */
