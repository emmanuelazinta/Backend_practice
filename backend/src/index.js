const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const dbConnect = require('./confiq/dbconnect');

const app = express();

// Middleware
app.use(express.json());

dbConnect();
// Route

// Start Server
const port = process.env.PORT || 8080;

app.listen(port, ()=> {
    console.log(`Server is Running at Port ${port}`);
    
});