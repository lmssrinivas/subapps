/**
 * Created by mlingolu on 1/24/17.
 */

var express = require('express');
var path = require('path');
var spawn = require('child_process').spawn;


var app = express();

var config = require('./config/config.json');

config.apps.forEach( (subapp) =>{

    let env = Object.create(process.env);
    let dir = path.join(__dirname,subapp.path);
    
    app.use(subapp.url,function (req,res,next) {

    });

    let childapp = spawn('node',['./index.js'],{cwd : dir, env : env});


})

app.get('/',function (req,res) {
    res.render('index');
});


app.listen(443);