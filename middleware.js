var express = require('express');
var app = express();

var middleware=((req,res,next)=>{
    console.log("Middleware para todas las rutas");
    next();
});

module.exports = middleware;