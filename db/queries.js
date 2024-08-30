const pool = require("./pool.js");

exports.addMessage = async (username, message) => {
    await pool.query("INSERT INTO messages (username, message) VALUES ($1, $2)", [username, message]);
}