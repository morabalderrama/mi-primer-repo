const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {

    if (!req.session.usuario) {
        return res.redirect('/admin/login');
    }

    res.render('admin/novedades', {
        usuario: req.session.usuario
    });

});

router.get('/logout', (req, res) => {

    req.session.destroy();

    res.redirect('/admin/login');

});

module.exports = router;