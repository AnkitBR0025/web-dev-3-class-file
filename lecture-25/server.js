const express = require('express');
const mongoose = require("mongoose");
const Student = require("./model/student.model");
const app = express();
const port = 3000;
app.use(express.json());
app.get("/api/students",async(req,res)=>{
    try{
        const students = await Student.find();
        res.status(200).json(students);
    }catch(err){
        res.status(500).json({message:err.message});
    }
});
//get student by their id
app.get("/api/students/:id",async(req,res)=>{
    try{
        const student = await Student.findById(req.params.id);
        if(!student){
            return res.status(404).json({message:"Student not found"});
        }
        res.status(200).json(student);
    }catch(err){
            res.status(500).json({message:err.message});
        }
    }
)

app.post("/api/students",async(req,res)=>{
    try{
        const student = await Student.create(req.body);
        res.status(200).json(student);
    }catch(err){
        res.status(500).json({success:false,message:err.message});
    }
})

app.put("/api/students/:id",async(req,res)=>{
    try{
        const student = await Student.findByIdAndUpdate(req.params.id,req.body,{new:true});     //new true give new response in postman 
        if(!student){
            return res.status(404).json({message:"Student not found"});
        }
        res.status(200).json(student);
    }catch(err){
        res.status(500).json({success:false,message:err.message});
    }
});

app.delete("/api/students/:id",async(req,res)=>{
    try{
        const student = await Student.findByIdAndDelete(req.params.id);
        if(!student){
            return res.status(404).json({message:"Student not found"});
        }
        res.status(200).json({message:"Student deleted successfully"});
    }catch(err){
        res.status(500).json({success:false,message:err.message});
    }
});


mongoose.connect('mongodb://localhost:27017/CollegeDB').then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=>{
    console.log("Error connecting to MongoDB", err);
});

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})