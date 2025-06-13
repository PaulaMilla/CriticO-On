const mc = require('../config/db')

const User = {
    crear: (user, callback) => {
        const query = `INSERT INTO usuario_registrado 
        (rol, url_avatar, nombre, alias, correo, password, fecha_registro)
        VALUES (?, ?, ?, ?, ?, ?, ?)`;
        
        mc.query(query, [
            'usuario',
            'https://cdn-icons-png.flaticon.com/512/12965/12965377.png',
            user.nombre,
            user.alias,
            user.correo,
            user.password,
            new Date()
        ], callback);
    },

    buscarPorMail: (correo, callback) => {
        const query = `SELECT * FROM usuario_registrado WHERE correo = ?`;
        
        mc.query(query, [correo], callback);
    }
};

module.exports = User;