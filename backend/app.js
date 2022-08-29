const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const  cors = require('cors');

// Middleware
app.use(express.urlencoded({extended: true})); 
app.use(express.json());

app.use(cors());

// Import Routes
const student = require("./routes/student-route")


app.use("/student",student);


const port=process.env.PORT||3000;
// Connect to db
mongoose.connect(process.env.dbUrl, {useNewUrlParser: true}, () =>
    console.log('Connected to DB!')
);
// Server
app.listen(port,() => {
    console.log('Server starts at :'+port);  
});


