const mysql = require('mysql');

//configurar conexión
const mc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'criticoon-db'
});


module.exports = mc;