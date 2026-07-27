const express = require("express");
const conexion = require("./bd");

const app = express();

app.use(express.json());

// Ruta de prueba
app.get("/", (req, res) => {
    res.send("Servidor funcionando correctamente");
});

// Obtener todos los empleados
app.get("/empleados", (req, res) => {

    const sql = "SELECT * FROM empleados";

    conexion.query(sql, (error, resultados) => {

        if (error) {
            console.log(error);
            res.status(500).send("Error al consultar empleados");
            return;
        }

        res.json(resultados);
    });

});

// Obtener un empleado por ID
app.get("/empleados/:id", (req, res) => {

    const id = req.params.id;

    const sql = "SELECT * FROM empleados WHERE id = ?";

    conexion.query(sql, [id], (error, resultado) => {

        if (error) {
            console.log(error);
            res.status(500).send("Error al buscar empleado");
            return;
        }

        if (resultado.length === 0) {
            res.status(404).send("Empleado no encontrado");
            return;
        }

        res.json(resultado[0]);
    });

});

// Agregar un empleado
app.post("/empleados", (req, res) => {

    const empleado = req.body;

    const sql = `
        INSERT INTO empleados
        (id, nombre, apellido, puesto, edad, salario, email)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    const valores = [
        empleado.id,
        empleado.nombre,
        empleado.apellido,
        empleado.puesto,
        empleado.edad,
        empleado.salario,
        empleado.email
    ];

    conexion.query(sql, valores, (error, resultado) => {

        if (error) {
            console.log(error);
            res.status(500).send("Error al agregar empleado");
            return;
        }

        res.send("Empleado agregado correctamente");
    });

});

// Modificar un empleado
app.put("/empleados/:id", (req, res) => {

    const id = req.params.id;
    const empleado = req.body;

    const sql = `
        UPDATE empleados
        SET nombre = ?,
            apellido = ?,
            puesto = ?,
            edad = ?,
            salario = ?,
            email = ?
        WHERE id = ?
    `;

    const valores = [
        empleado.nombre,
        empleado.apellido,
        empleado.puesto,
        empleado.edad,
        empleado.salario,
        empleado.email,
        id
    ];

    conexion.query(sql, valores, (error, resultado) => {

        if (error) {
            console.log(error);
            res.status(500).send("Error al modificar empleado");
            return;
        }

        if (resultado.affectedRows === 0) {
            res.status(404).send("Empleado no encontrado");
            return;
        }

        res.send("Empleado modificado correctamente");
    });

});

// Eliminar un empleado
app.delete("/empleados/:id", (req, res) => {

    const id = req.params.id;

    const sql = "DELETE FROM empleados WHERE id = ?";

    conexion.query(sql, [id], (error, resultado) => {

        if (error) {
            console.log(error);
            res.status(500).send("Error al eliminar empleado");
            return;
        }

        if (resultado.affectedRows === 0) {
            res.status(404).send("Empleado no encontrado");
            return;
        }

        res.send("Empleado eliminado correctamente");
    });

});

// Iniciar servidor
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});