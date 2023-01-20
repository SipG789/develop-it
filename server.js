const mysql = require('mysql2');
const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // mysql username
        user: 'root',
        password: '@q^5y28mTPdv2tTz',
        database: 'elections'
    },
    console.log('Connected to the elections database.')
);

db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
});

// default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});