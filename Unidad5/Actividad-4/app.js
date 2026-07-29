require('dotenv').config();

const express = require('express');
const session = require('express-session');
const hbs = require('hbs');
const path = require('path');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

// Configuración de Handlebars
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Rutas
const loginRouter = require('./routes/admin/login');
const novedadesRouter = require('./routes/admin/novedades');

app.use('/admin/login', loginRouter);
app.use('/admin/novedades', novedadesRouter);

app.get('/', (req, res) => {
    res.send('Actividad 4 funcionando correctamente');
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});