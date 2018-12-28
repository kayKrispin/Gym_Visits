const express =  require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');



const app =  express();

mongoose.connect('mongodb://localhost:27017/gymvisitors');
mongoose.Promise = global.Promise;

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());

app.use('/api', routes);


app.get('/',function(req, res){
    res.end();
});

app.get('/api', function(req, res){
    res.send({name: 'Kaec'})
});

app.use(function (err,req,res,next) {
    res.status(404).send({error:err.message});
});

app.listen(4000, function(){
    console.log('Now listening on ports 239');
});