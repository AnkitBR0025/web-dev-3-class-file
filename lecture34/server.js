const jwt=require("jsonwebtoken");
const data={
    _id:'shjbsjdahg866tashjh'
}
const token=jwt.sign(data,"akp@krmu",{expiresIn:"2d"});
console.log("Token:",token);


const decoded=jwt.verify(token,"akp@krmu");
console.log("Decoded:",decoded);