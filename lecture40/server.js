const express=require("express");
const webSocket=require("socket.io")
const app=express();
const http=require("http")
const port=3000;

const server=http.createServer(app);
const io=new webSocket.Server(server,{
    cors:{
        origin:"*",
        method:["Get","POST"]
    }
})

io.on("connection",(socket)=>{
    console.log("User Connected: ",socket.id);

    socket.on("message",(msg)=>{
        // socket.emit("message",msg)        //means send to the same user
        
        // io.emit("message",msg)              //send to all user
        
        //socket.broadcast.emit("message",msg)       //send to all user except sender

        io.to(y2paV1fY3IvYfONSAAAA).emit("message",msg)
    })
    socket.on("disconnected",()=>{
        console.log("User disconnected",socket.id)
    })
})

server.listen(port,()=>{
    console.log("Server Connectd")
})