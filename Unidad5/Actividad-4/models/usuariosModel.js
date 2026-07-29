const pool = require('../bd');

async function getUserAndPassword(usuario, password) {
    const query = 'SELECT * FROM usuarios WHERE usuario = ? AND password = ?';
    const [rows] = await pool.query(query, [usuario, password]);
    return rows;
}

module.exports = { getUserAndPassword };