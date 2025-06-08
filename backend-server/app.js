//Requires
var express = require('express');
const mysql = require('mysql');

//Iniciar variables
var app=express();

//configurar conexión
const mc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'criticoon-db'
});

app.listen(3000, ()=>{
    console.log("Express server - puerto 3000 online");
});

//Conectar a la base de datos
mc.connect((err) => {
    if (err) {
        console.error('Error conexión a la base de datos:', err);
        return;
    }
    console.log('Conectado a la base de datos');
});

