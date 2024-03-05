const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
const port = 5002;

app.use(cors());

app.listen(port,()=>{
    console.log(`Server is Running on http://localhost:${port}`);
})