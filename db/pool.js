const { Pool } = require("pg");
require('dotenv').config();
// module.exports = new Pool({
//   user: process.env.USER,
//   password: process.env.PASSWORD,
//   host: process.env.HOST,
//   port: process.env.PORT,
//   database: process.env.DATABASE,
//   ssl: {
//     require: true,
//   }
// });

    module.exports = new Pool({connectionString: process.env.CONNECTION_URI});