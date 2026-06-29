const express = require("express");
const session = require("express-session");

const app = express();
const PORT = 3000;

// Permite leer datos enviados desde formularios
app.use(express.urlencoded({ extended: true }));

// Configuración de sesiones
app.use(
  session({
    secret: "mi_clave_secreta_12345",
    resave: false,
    saveUninitialized: true,
  })
);

// Formulario
app.get("/", (req, res) => {
  res.send(`
    <h2>Actividad 4 - Sesiones</h2>
    <form action="/guardar" method="POST">
      <label>Ingrese su nombre:</label><br><br>
      <input type="text" name="nombre" required>
      <button type="submit">Guardar</button>
    </form>
  `);
});

// Guarda el dato en la sesión
app.post("/guardar", (req, res) => {
  req.session.nombre = req.body.nombre;

  res.send(`
    <h2>¡Nombre guardado correctamente!</h2>
    <p>Hola ${req.session.nombre}</p>
    <a href="/perfil">Ir al perfil</a>
  `);
});

// Muestra el dato guardado
app.get("/perfil", (req, res) => {
  if (req.session.nombre) {
    res.send(`<h2>Bienvenido ${req.session.nombre}</h2>`);
  } else {
    res.send("No hay ningún nombre guardado en la sesión.");
  }
});

app.listen(PORT, () => {
  console.log(`Servidor funcionando en http://localhost:${PORT}`);
});