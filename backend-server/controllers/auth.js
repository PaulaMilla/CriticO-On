// controllers/auth.controller.js
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const bcrypt = require('bcryptjs');

const SECRET_KEY = 'clave_super_secreta_criticoon';

exports.register = async (req, res) => {
    const { nombre, alias, correo, password } = req.body;
    
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) return res.status(500).json({ mensaje: 'Error al encriptar password' });
        
        User.crear({
            nombre,
            alias,
            correo,
            password: hash
        }, (err, resultado) => {
            if (err) {
                if (err.code === 'ER_DUP_ENTRY') {
                    return res.status(400).json({ mensaje: 'El correo ya está registrado' });
                }
                return res.status(500).json({ mensaje: 'Error al registrar usuario', error: err });
            }
            
            res.status(201).json({ mensaje: 'Usuario registrado exitosamente' });
        });
    });
};

exports.login = async (req, res) => {
    const { correo, password } = req.body;
    
    User.buscarPorMail(correo, (err, resultados) => {
        if (err || resultados.length === 0) {
            return res.status(401).json({ mensaje: 'Correo no encontrado' });
        }
        
        const user = resultados[0];
        
        bcrypt.compare(password, user.password, (err, coincide) => {
            if (!coincide) {
                return res.status(401).json({ mensaje: 'password incorrecta' });
            }
            
            const token = jwt.sign(
                { 
                    id_usuario: user.id_usuario, 
                    correo: user.correo,
                    rol: user.rol 
                },
                SECRET_KEY,
                { expiresIn: '2h' }
            );
            
            res.json({
                mensaje: 'Login exitoso',
                token,
                user: {
                    id_usuario: user.id_usuario,
                    nombre: user.nombre,
                    alias: user.alias,
                    correo: user.correo,
                    rol: user.rol, // ← AGREGAMOS EL ROL A LA RESPUESTA
                    url_avatar: user.url_avatar
                }
            });
        });
    });
};