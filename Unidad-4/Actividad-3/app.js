const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Bienvenido a mi aplicación Express");
});

app.get("/nosotros", (req, res) => {
    res.send("Esta es la página Nosotros");
});

app.get("/contacto", (req, res) => {
    res.send("Esta es la página de Contacto");
});

app.listen(PORT, () => {
    console.log(`Servidor funcionando en http://localhost:${PORT}`);
});