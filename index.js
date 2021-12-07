const express = require('express');
const fetch = require('node-fetch');
const bluebird = require('bluebird');
const cors = require('cors');
const bodyParser = require('body-parser');

var multer  = require('multer');
var upload = multer({ dest: 'upload/'});
const fs = require('fs');
var type = upload.single('recfile');



const app = express();
app.use(cors());
app.use(bodyParser.json());


fetch.Promise = bluebird;

const port = 3000;





app.get('/', function (req,res) {
    res.status(200).send({resCode:1})
});

app.get('/test', function (req,res) {
    res.status(200).send({resCode:1,msg:'Hello world'})
});

app.get('/test2', function (req,res) {
    res.status(200).send({resCode:1,msg:'Hello world 6'})
});




app.listen(port, () => {
    console.log(`Server runing on port ${port}`);
})
