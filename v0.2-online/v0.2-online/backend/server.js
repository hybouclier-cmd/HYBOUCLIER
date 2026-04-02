const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('../frontend'));

app.get('/', (req, res) => {
  res.send('HYBOUCLIER backend en ligne');
});

app.listen(port, () => {
  console.log(`Serveur HYBOUCLIER en ligne sur http://localhost:${port}`);
});
