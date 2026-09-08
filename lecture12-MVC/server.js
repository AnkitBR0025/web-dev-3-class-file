const express = require("express");
const productRoutes = require("./routes/productRoutes.js")
const app = express();
const port = 3000;

app.use(express.json())

app.use("/api/products",productRoutes);

app.listen(port,()=>console.log("server is running"));