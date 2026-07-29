const express = require('express');
const md5 = require('md5');

const router = express.Router();

const usuariosModel = require('../../models/usuariosModel');

// Mostrar formulario
router.get('/', (req, res) => {
    res.render('admin/login');
});

// Procesar login
router.post('/', async (req, res) => {

    const usuario = req.body.usuario;
    const password = md5(req.body.password);

    const data = await usuariosModel.getUserAndPassword(usuario, password);

    if (data.length > 0) {

        req.session.usuario = usuario;

        res.redirect('/admin/novedades');

    } else {

        res.render('admin/login', {
            error: 'Usuario o contraseña incorrectos'
        });

    }

});

module.exports = router;