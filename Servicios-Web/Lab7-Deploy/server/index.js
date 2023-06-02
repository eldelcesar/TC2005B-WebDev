// server/index.js
const express = require("express");
const bodyParser = require('body-parser');
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from server side!"});
});

app.get("/api/pet", (req, res) => {
  fs.readFile( __dirname + "/" + "pets.json", "utf8", (err, data) => {
    console.log( data );
    res.end( data );
  });
});

app.post("/api/pet", (req, res) => {
  console.log('El cuerpo de la peticion:', req.body);
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

