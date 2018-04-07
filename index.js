const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const csv = require("fast-csv")

app.use(bodyParser.text())

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/readCSV', (req, res) => {
    var csvData = {};
    var CSV_STRING = req.body;
    csv
    .fromString(CSV_STRING, {
        headers: ["count", "value"],
        ignoreEmpty: true
    })
    .on("data", function(data){
        csvData[data.value] = data
    })
    .on("end", function(){
        console.log(csvData);
        res.send('Done');
        //make call to database
    })
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))