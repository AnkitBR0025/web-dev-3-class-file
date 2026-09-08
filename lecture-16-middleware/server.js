const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3000;

// const logMiddleware = (req, res, next) => {
//     console.log("\nRequest Method:", req.method,"Request URL:", req.url,"Date:", new Date().toLocaleString());
//     next();
// }
////jo logMiddleware hai usko humne morgan ke through replace kar diya hai, morgan ek popular middleware hai jo ki request aur response ke details ko log karta hai.
app.use(morgan());  ////global middleware
// app.use(morgan("dev"));  ////global middleware
// app.use(morgan("tiny"));  ////global middleware
// app.use(morgan("combined"));  ////global middleware

const apiCheckMiddleware=(req,res,next)=>{
    if(req.query.API_KEY=="1234"){
        console.log("Authorized: Valid API Key");
        next();
    }else{
        console.log("Unauthorized: Invalid API Key");
        res.status(401).send("Unauthorized: Invalid API Key");
        
    }
}

//app.use(logMiddleware);                ////global middleware
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
app.get("/students", apiCheckMiddleware, (req, res) => {
    console.log("Hello students");
    res.send("Hello students")
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})