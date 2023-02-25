const express = require('express');

const app = express();
app.use(express.json());

const port = 7865;

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
})

app.get('/cart/:id', (req, res) => {
  const id = req.params.id;
  if (isNaN(Number(id))) {
    res.sendStatus(404)
  } else {
    res.send(`Payment methods for cart ${id}`);
  }
})

app.get('/available_payments', (req, res) => {
  res.send({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
})

app.post('/login', (req, res) => {
  const username = req.body.userName;
  res.send(`Welcome ${username}`);
})

app.listen(port, () => {
  console.log('API available on localhost port 7865')
})
