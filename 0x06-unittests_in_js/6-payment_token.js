function getPaymentTokenFromAPI(success) {
  if (success === true) {
    return new Promise((res) => res({data: 'Successful response from the API'}))
  }
}

module.exports = getPaymentTokenFromAPI;
