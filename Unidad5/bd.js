const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config();

const conexion = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB_NAME,
    port: process.env.MYSQL_PORT
});

conexion.connect((error) => {
    if (error) {
        console.log("Error al conectar con MySQL:", error);
        return;
    }

    console.log("Conexión exitosa con la base de datos");
});

module.exports = conexion;