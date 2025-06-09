//Requires
var express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

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

app.use(cors());
app.use(bodyParser.json());

//Conectar a la base de datos
mc.connect((err) => {
    if (err) {
        console.error('Error conexión a la base de datos:', err);
        return;
    }
    console.log('Conectado a la base de datos');
});

app.get('/', (req, res, next) => {
    res.status(200).json({
        ok: true,
        mensaje: 'Petición realizada correctamente'
    });
});

app.get('/serie_pelicula', function (req, res) {
    mc.query('SELECT * FROM serie_pelicula', function (error, results, fields) {
        if (error) throw error;
        return res.send({
            error: false,
            data: results,
            message: 'Series y películas.'
        });
    });
});

app.get('/review', function (req, res) {
    mc.query('SELECT * FROM review', function (error, results, fields) {
        if (error) throw error;
        return res.send({
            error: false,
            data: results,
            message: 'Reseñas.'
        });
    });
});

app.get('/populares',(req, res) => {
    const sql =`
    SELECT sp.id_sp, sp.url_foto,
           r.id_review, r.comentario, r.rating, r.cantidad_likes
    FROM serie_pelicula sp
    JOIN review_sp rsp ON sp.id_sp = rsp.fk_sp
    JOIN review r ON r.id_review = rsp.fk_review
  `;

    mc.query(sql, (err, results) => {
        if (err) {
            console.error('Error al ejecutar la consulta:', err);
            res.status(500).json({ error: 'Error al obtener datos' });
            return;
        }

        const mapa = new Map();

        results.forEach(row => {
            const spId = row.id_sp;
            if (!mapa.has(spId)) {
                mapa.set(spId, {
                    seriePelicula: {
                        id: spId,
                        url_foto: row.url_foto,
                    },
                    reviews: [],
                });
            }

            mapa.get(spId).reviews.push({
                id: row.id_review,
                comentario: row.comentario,
                rating: row.rating,
                cantidad_likes: row.cantidad_likes,
            });
        });

        const populares = Array.from(mapa.values());
        res.json(populares);
    });
});



