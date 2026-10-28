import knex from 'knex';

if (!process.env.DB_HOST) {
  throw new Error('missing env DB_HOST');
}
if (!process.env.DB_PORT) {
  throw new Error('missing env DB_PORT');
}
if (!process.env.DB_NAME) {
  throw new Error('missing env DB_NAME');
}
if (!process.env.DB_USER) {
  throw new Error('missing env DB_USER');
}
if (!process.env.DB_PASSWORD) {
  throw new Error('missing env DB_PASSWORD');
}

const db = knex({
  client: 'mysql2',
  connection: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
  pool: {
    min: 0,
    max: 10,
  },
});

export default db;
