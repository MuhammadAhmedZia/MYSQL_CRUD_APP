// const mysql = require('mysql2/promise');
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Create users table if not exists
    await pool.query(`CREATE DATABASE IF NOT EXISTS  mysql_crud_app`);
    await pool.query(`USE mysql_crud_app`);

    await pool.query(`   
        CREATE TABLE IF NOT EXISTS users (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL
      );
    `);
    

export default pool
