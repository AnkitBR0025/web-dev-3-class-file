const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    // email:{
    //     type:String,
    //     required:true,
    //     match:/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
    //     validate:{
    //         validator:function(value){
    //             return value.endsWith("@gmail.com");
    //         }
    //     }
    // },
    age:{
        type:Number,
        required:true,
        min:18
    },
    city:{
        type:String,
        required:true
    },
    semester:{
        type:Number,
        required:true
    },
    marks:{
        type:Number,
        required:true,
        max:100
    },
    course:{
        type:String,
        required:true,
        // enum:["B.Tech","M.Tech","BBA","MBA","BCA","MCA"]
    },
    fees:{
        type:Number,
        required:true
    },
    // cantact:{
    //     type:Number,
    //     unique:true,
    //     minlength:10,
    //     maxlength:10
    // }
})
module.exports = mongoose.model("students",studentSchema);