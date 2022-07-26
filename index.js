const express = require('express');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (_req, res) => {
  res.send(`<h1> Está online na porta: ${PORT} </h1>`);
});

app.listen(PORT, () => console.log(`Online in ${PORT}`));
