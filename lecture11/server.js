const express = require("express");
const app = express();
const port = 3000
app.get("/students/:name",(req,res)=>{
    console.log(req.url)
    console.log(req.method)
    // console.log(req.body)
    console.log(req.params.name)
    req.send("hello google")
})
app.get("/students",(req,res)=>{    
    console.log(req.url)

    res.send("hello students")

})
app.listen(port,()=>console.log("server is running"));