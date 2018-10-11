const PORT = process.env.PORT || 5000,
express = require('express');
path = require('path')
app = express();

app.use(express.static(path.join(__dirname, 'dist')))


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


app.listen(PORT)
console.log("Listening on PORT.."+PORT)
