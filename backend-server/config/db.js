const mysql = require('mysql');

//configurar conexión
const mc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'criticoon-db'
});


connection.connect((err) => {
    if (err) {
        console.error('Error conexión a la base de datos:', err);
        return;
    }
    console.log('Conectado a la base de datos');
});

module.exports = mc;