require('dotenv').config();
const { argv } = require('node:process');
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ),
  message VARCHAR ( 255 )
);

INSERT INTO messages (username, message) 
VALUES
  ('Bryan', 'Hello!'),
  ('Odin', 'This is so fun!'),
  ('Damon', 'Backend is so cool!');
`;

async function main() {
  const dbUrl = argv[2] || process.env.CONNECTION_URI;
  console.log("seeding...");
  const client = new Client({
    connectionString: dbUrl,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
