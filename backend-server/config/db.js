const mysql = require('mysql');

const mc = mysql.createConnection({
    host: process.env.DB_HOST || 'db',       // nombre del servicio docker-compose
    user: process.env.DB_USER || 'criticuser',   // usuario definido en docker-compose
    password: process.env.DB_PASSWORD || 'criticpass', // contraseña definida
    database: process.env.DB_NAME || 'criticoon-db' // base de datos definida
});

module.exports = mc;