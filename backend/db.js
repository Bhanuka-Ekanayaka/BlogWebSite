const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

dotenv.config({
    path:'./.env'
})

const db = mysql.createPool({
    host:process.env.DATABASE_HOST,
    user:process.env.DATABASE_USER,
    database:process.env.DATABASE_NAME,
    waitForConnections:true,
    connectionLimit:10,
    queueLimit:0
});

db.getConnection()
    .then(connection =>{
        console.log('Connected to the database');
        connection.release();
    })
    .catch(error =>{
        console.error('Error While Connecting to the Databse');
    });

module.exports = db;