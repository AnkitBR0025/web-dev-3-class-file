const bcrypt = require("bcrypt");
const password = "John@1234";

const hashPassword = async(password)=>{
    const salt = await bcrypt.genSalt(10);    //salt makes the same password with diffrerent hash
    console.log("Salt: ",salt);                         
    const hashPassword=await bcrypt.hash(password,salt);
    console.log("Hashed Password: ",hashPassword);

    const isMatch = await bcrypt.compare(password,hashPassword);   //this checks the given password is correct or not 
    console.log("Is Match: ",isMatch);
}
hashPassword(password);
 