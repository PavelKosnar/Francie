const path = require('path');
const http = require('http');
const express = require('express');
const fsPromises = require("fs").promises;

async function readJSON(path) {
  const data = await fsPromises
    .readFile(path, 'utf-8')
    .catch(err => console.error("Failed to read file", err));
  return JSON.parse(data.toString());
}

async function writeJSON(path, data) {
    data = JSON.stringify(data);
    await fsPromises
      .writeFile(path, data, 'utf-8')
      .catch(err => console.error("Failed to write file", err));
    return data;
}

const app = express();
const server = http.createServer(app);

app.use(express.static(path.join(__dirname, 'public')));

app.get("/api/udalosti", (req, res) => {
    readJSON('public/data/udalosti.json')
    .then(data => res.send(data))
    .catch(err => res.send('Soubor nebylo možné načíst', err));       
});

app.get("/api/osobnosti", (req, res) => {
    readJSON('public/data/osobnosti.json')
    .then(data => res.send(data))
    .catch(err => res.send('Soubor nebylo možné načíst', err));       
});

app.get("/api/mesta", (req, res) => {
    readJSON('public/data/mesta.json')
    .then(data => res.send(data))
    .catch(err => res.send('Soubor nebylo možné načíst', err));       
});

app.get("/api/pamatky", (req, res) => {
    readJSON('public/data/pamatky.json')
    .then(data => res.send(data))
    .catch(err => res.send('Soubor nebylo možné načíst', err));       
});


const PORT = process.env.PORT || 8080;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));