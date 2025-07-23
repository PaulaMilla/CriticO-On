// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'clave_super_secreta_criticoon';

// Verificar token
exports.verificarToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Bearer TOKEN
    
    if (!token) {
        return res.status(401).json({ mensaje: 'Token no proporcionado' });
    }
    
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({ mensaje: 'Token inválido' });
        }
        
        req.usuario = decoded;
        next();
    });
};

// Verificar si es admin
exports.verificarAdmin = (req, res, next) => {
    if (req.usuario.rol !== 'admin') {
        return res.status(403).json({ mensaje: 'Acceso denegado. Se requieren permisos de administrador.' });
    }
    next();
};

// Verificar múltiples roles
exports.verificarRoles = (rolesPermitidos) => {
    return (req, res, next) => {
        if (!rolesPermitidos.includes(req.usuario.rol)) {
            return res.status(403).json({ mensaje: 'Acceso denegado. Rol insuficiente.' });
        }
        next();
    };
};