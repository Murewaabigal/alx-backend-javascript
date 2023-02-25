function calculateNumber(type, a, b) {
  const firstNumber = Math.round(a);
  const secondNumber = Math.round(b);

  if (type === 'SUM') {
    return firstNumber + secondNumber;
  }

  if (type === 'SUBTRACT') {
    return firstNumber - secondNumber;
  }

  if (type === 'DIVIDE') {
    if (secondNumber === 0) {
      return 'Error';
    }
    return firstNumber / secondNumber;
  }
}

module.exports = calculateNumber;
