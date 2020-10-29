// Variables reqired for running the express server
const express = require("express");
const path = require("path");
const app = express();
const port = 8080;

// Variables required for the mysql database
const mysql = require("mysql");



app.use(express.static(__dirname + "/assets"));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/index.html')));

app.listen(port, () => console.log(`Server is listening on port ${port}!`));