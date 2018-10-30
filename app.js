const PORT = process.env.PORT || 5000,
express = require('express');
path = require('path')
app = express();
var request = require("request");
var blockchainurl = process.env.BLOCKCHAIN_GATEWAY_SERVICE_URL || 'http://localhost:8545';
app.use(express.static(path.join(__dirname, 'dist')))
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/item', function(req, res){
    var uid = req.params.uid,
        path = req.params[0] ? req.params[0] : 'index.html';
    res.sendFile(path, {root: './dist'});
});

app.get('/store', function(req, res){
    var uid = req.params.uid,
        path = req.params[0] ? req.params[0] : 'index.html';
    res.sendFile(path, {root: './dist'});
});

app.get('/itemtx', function(req, res){
    var uid = req.params.uid,
        path = req.params[0] ? req.params[0] : 'index.html';
    res.sendFile(path, {root: './dist'});
});

app.get('/formbuilder/:contractId/:key', function(req, res){
    var contractId = req.params.contractId;
    var key = req.params.key;
    console.log('blockchainurl ', blockchainurl);
    var resultData = request.get(blockchainurl + contractId + '/' + key ,
    async function(err, readResult) {
        console.log('resultData', readResult.body);
        res.send(readResult.body);
    });
    //console.log('resultData', resultData);
    //res.send(resultData);
});


app.listen(PORT)
console.log("Listening on PORT.."+PORT)
