const express = require('express');
const connectDB = require("./config/db.js");
const studentRoutes = require("./routes/students.routes.js");

const dotenv = require("dotenv");
dotenv.config();
////also you can use this instead of above two lines
// require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

//middleware 
app.use(express.json());

//call the routes
app.use("/api/students",studentRoutes);


//connect database
connectDB();

//start the server
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
});