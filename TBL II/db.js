const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres', 
    host: 'localhost', 
    database: 'tbl_II', 
    password: 'Esamc123',
    port: 5432,

module.exports = pool;