const express = require("express");
const app = express();
const port = 3000;

const logMiddleware = (req, res, next) => {
    console.log("Request Method: ", req.method);
    console.log("Request URL: ", req.url);
    next();
}

const apiCheckMiddleware=(req,res,next)=>{
    if(req.query.API_KEY=="1234"){
        console.log("Authorized: Valid API Key");
        next();
    }else{
        console.log("Unauthorized: Invalid API Key");
        res.status(401).send("Unauthorized: Invalid API Key");
        
    }
}

// app.use(logMiddleware);                ////global middleware
// app.use(apiCheckMiddleware);

app.get("/", (req, res) => {
    console.log("Hello World");
    res.send("Hello World")
})
// app.get("/students", (req, res) => {
//     console.log("Hello Students");
//     res.send("Hello Students")
// })

//specific middleware
app.get("/students", logMiddleware, apiCheckMiddleware, (req, res) => {
    console.log("Hello students");
    res.send("Hello students")
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})