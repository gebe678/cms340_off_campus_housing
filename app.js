// Variables reqired for running the express server
const express = require("express");
const bodyParser = require("body-parser");

const path = require("path");
const app = express();

app.use(bodyParser.json());
const port = 8080;

// Variables required for the mysql database
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test"
});

connection.connect(function(err){
    if(err)
    {
        console.error("error connecting: " + err.stack);
        return;
    }

    console.log("Database connected as id " + connection.threadId);
});



app.use(express.static(__dirname + "/assets"));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/index.html')));

app.listen(port, () => console.log(`Server is listening on port ${port}!`));