const express = require('express');
const connectDB = require("./config/db");
const studentRoutes = require("./routes/students.routes");
const app = express();
const port = 3000;
app.use(express.json());

app.use("/api/students",studentRoutes);
connectDB();
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})