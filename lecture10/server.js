const express = require("express");
const app = express();
const port = 3000;

app.use(express.json())



const products = [
    {
        id:1,
        name:"ASUS",
        category:"laptop",
        price:80000
    },
    {
        id:2,
        name:"realme 11x",
        category:"Mobile",
        price:18000
    },
    {
        id:3,
        name:"IPAD PRO",
        category:"Tablet",
        price:60000
    }

]
app.get("/api/products",(req,res)=>{
    res.json(products)
})
app.get("products/:id",(req,res)=>{
    const id = req.params.id;
    console.log(id)
    const result = products.find((product)=>product.id==id);
    if(result==undefined){
        res.status(404).json({success:false,massage:"products Not Found"})
    }
    res.json({success:true,result})
})


//create
app.post("/api/projects",(res,req)=>{
    
    const project = req.body;
    products.push({id:products.length+1,...product});
    res.json({success:true,products})
})




//UPDATE
app.put("/api/products/:id",(req,res)=>{
    const id=req.params.id;
    const product = req.body;
    const result = products.find((product)=>product.id==id);
    if(result==undefined){
        res.status(404).json({success:false,massage:"Produt Not Fount"});
    }
    result.name=product.name;
    result.category = product.category;
    result.price = product.price;
    res.json({success:true,result});
})
//delete
app.delete("/api/products/:id",(req,res)=>{
    const id=req.params.id;
    const result = products.find((product)=>product.id==id);
    if(result==undefined){
        res.status(404).json({success:false,massage:"Produt Not Fount"});
    }
    const index = products.indexOf(result);
    products.splice(index,1);
    res.json({success:true,result});
})




app.listen(port,()=>console.log("server is running"));