const express = require('express');
const app = express();
const port = 3000;

let bodyParser = require('body-parser');
app.use(bodyParser.json());

let products = [];

app.get('/products', (req, res) => {
  res.json(products);
});

app.post('/products', function (req, res) {
  const newProduct = { ...req.body, id: products.length + 1 };
  products = [...products, newProduct];
  res.json(newProduct);
});

app.put('/products', function (req, res) {
  let updatedProduct;
  products = products.map(p => {
    if (p.id === req.params.id) {
      updatedProduct = { ...p, ...req.body };
      return updatedProduct;
    }
    return p;
  })
  res.json(updatedProduct);
});

app.delete('/products/:id', function (req, res) {
  // implement
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

