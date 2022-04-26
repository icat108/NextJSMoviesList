const mysql = require('mysql');
const koneksi = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'dbmovie',
  multipleStatements: true,
});

koneksi.connect((err) => {
  if (err) throw err;
  console.log("MySQL Sudah Terkoneksi dengan baik dan benar....");
});
module.exports = koneksi;
