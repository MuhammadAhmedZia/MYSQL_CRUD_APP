// const pool = require('../config/database')
import pool from '../config/db.js'

export const createUser = async (name, email, hashedPassword) => {
    const [result] = await pool.query(
    'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
    [name, email, hashedPassword]
  );
  return { id: result.insertId, name, email };
}

export const getAllUsers = async () => {
    const [rows] = await pool.query('SELECT * FROM users');
    return rows;
}

export const findByEmail = async (email) => {
  const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
  return rows[0];
};
// export const UpdateUser = async (id, name, email) => {
//     const [result] = await pool.query('UPDATE users  SET   name  = ?, email = ?  WHERE id =?', [id, name, email]);
//     return result;
// }
export const UpdateUser = async (id, name, email) => {
  const [result] = await pool.query(
    'UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?',
    [name, email, password, id]
  );
  return result;
};
export const deleteUser = async (id) => {
    await pool.query('DELETE FROM users WHERE id = ?', [id]);
}
// export const deleteUser = async (id) => {
//   await pool.query('DELETE FROM users WHERE id = ?', [id]);
// };

