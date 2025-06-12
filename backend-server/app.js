//Requires
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

//RUTAS
const authRoutes = require('./routes/authRoutes')
app.use('/api/auth', authRoutes)

const mainRoutes = require('./routes/mainRoutes');
const contentRoutes = require('./routes/contentRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

const categoriaRoutes = require('./routes/categoriaRoutes');
app.use('/api/categorias', categoriaRoutes);

app.use('/api/review', reviewRoutes);
app.use('/api', mainRoutes);
app.use('/api/content', contentRoutes);

app.listen(3000, ()=>{
    console.log("Express server - puerto 3000 online");
});




