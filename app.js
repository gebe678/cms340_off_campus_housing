// Variables reqired for running the express server
const express = require("express");
const bodyParser = require("body-parser");

const path = require("path");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.raw());
const port = 8080;

// Variables required for the mysql database
const mysql = require("mysql");
const { info } = require("console");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "housing_information",
    port: 3306
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

//app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/index.html')));
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.post("/housingForm", function(req, res){
    let city = req.body.city;
    let zipCode = req.body.zipCode;
    let sqFootage = req.body.sqrFootage;
    let numBeds = req.body.numBeds;
    let numBaths = req.body.numBaths;
    let monthlyPrice = req.body.monthlyPrice;
    let parking = req.body.parking;
    let distanceFromRollins = req.body.distanceFromRollins;

    let hasParking = "N";

    if(parking === "on")
    {
        hasParking = "Y";
    }

    let startQuery = "SELECT * FROM property";
    let sqFootageQuery = "WHERE SqFootage LIKE " + sqFootage;
    let numBedsQuery = "AND NumOfBeds LIKE " + numBeds;
    let numBathsQuery = "AND NumOfBaths LIKE " + numBaths;
    let monthlyPriceQuery = "AND Monthlyprice LIKE " + monthlyPrice;
    let parkingQuery = "AND Parking LIKE " + hasParking;
    let distanceFromRollinsQuery = "AND DistanceToRollins LIKE " + distanceFromRollins;

    let query = startQuery.concat(" ", sqFootageQuery, " ", numBedsQuery, " ", numBathsQuery, " ", monthlyPriceQuery, " ", distanceFromRollinsQuery);

    // arrays that hold successful housing informaiton
    let streetInfo = [];
    let cityInfo = [];
    let zipCodeInfo = [];
    let apartmentComplexInfo = [];
   
    //info = JSON.stringify(req.body);

    connection.query(query, function(err, rows, fields){
        if(err)
        {
            throw err;
        }
        
        for(let i = 0; i < rows.length; i++)
        {
            //console.log(rows[i].Street + " " + rows[i].City + " " + rows[i].Zipcode + " " + rows[i].ApartmentComplex);
            streetInfo.push(rows[i].Street);
            cityInfo.push(rows[i].City);
            zipCodeInfo.push(rows[i].Zipcode);
            apartmentComplexInfo.push(rows[i].ApartmentComplex);
        }

        let info = {
            "street": streetInfo,
            "city": cityInfo,
            "zipCode": zipCodeInfo,
            "apartmentComplex": apartmentComplexInfo
        }

        //console.log(JSON.stringify(info));
        res.send(info);
     });
    
    // console.log(info);

    // console.log(city);
    // console.log(zipCode);
    // console.log(sqrFootage);
    // console.log(numBeds);
    // console.log(numBaths);
    //res.redirect('/');
});

app.listen(port, () => console.log(`Server is listening on port ${port}!`));