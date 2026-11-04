const Student = require("../model/student.model");
const getStudents = async(req,res)=>{
    try{
        const students = await Student.find();
        res.status(200).json(students);
    }catch(err){
        res.status(500).json({message:err.message});
    }
};

const getStudentById =async(req,res)=>{
    try{
        const student = await Student.findById(req.params.id);
        if(!student){
            return res.status(404).json({message:"Student not found"});
        }
        res.status(200).json(student);
    }catch(err){
            res.status(500).json({message:err.message});
        }
    };

const createStudent = async(req,res)=>{
    try{
        const student = await Student.create(req.body);
        res.status(200).json(student);
    }catch(err){
        res.status(500).json({success:false,message:err.message});
    }
};

const updateStudent =async(req,res)=>{
    try{
        const student = await Student.findByIdAndUpdate(req.params.id,req.body,{new:true});     //new true give new response in postman 
        if(!student){
            return res.status(404).json({message:"Student not found"});
        }
        res.status(200).json(student);
    }catch(err){
        res.status(500).json({success:false,message:err.message});
    }
};

const deleteStudent =async(req,res)=>{
    try{
        const student = await Student.findByIdAndDelete(req.params.id);
        if(!student){
            return res.status(404).json({message:"Student not found"});
        }
        res.status(200).json({message:"Student deleted successfully"});
    }catch(err){
        res.status(500).json({success:false,message:err.message});
    }
};

module.exports = {
    getStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent
}