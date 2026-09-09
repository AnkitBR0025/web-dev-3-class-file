const products = require("../data/data.js")
const fs=require("fs");

const getProducts = (req,res)=>{
    res.json({total:products.length,products})
}
const getProductById = (req,res)=>{
    const id = req.params.id;
    console.log(id)
    const result = products.find((product)=>product.id==id);
    if(result==undefined){
        res.status(404).json({success:false,massage:"products Not Found"})
    }
    res.json({success:true,result})
}

const addProducts = (req,res)=>{
    
    const product = req.body;
    const data=fs.readFileSync("./data/data2.txt","utf-8");
    console.log(data)
    const getData = data.trim() ? JSON.parse(data) : [];
    getData.push({id:getData.length+1,...product});
    fs.writeFileSync("./data/data2.txt",JSON.stringify(getData));
    products.push({id:products.length+1,...product});
    res.json({success:true,product})

}
const updateProducts = (req,res)=>{
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
}
const deleteProducts = (req,res)=>{
    const id=req.params.id;
    const result = products.find((product)=>product.id==id);
    if(result==undefined){
        res.status(404).json({success:false,massage:"Produt Not Fount"});
    }
    const index = products.indexOf(result);
    products.splice(index,1);
    res.json({success:true,result});
}
const searchProducts = ((req,res)=>{
    const {name,category,price}=req.query;
    let result;
    if(name){
         result = products.filter((product)=>product.name===name);

    }
    if(category){
         result = products.filter((product)=>product.category===category);
    }
    if(price){
         result = products.filter((product)=>product.price===Number(price));
    }
    res.json({success:true,total:result.length,result})
})


module.exports = {
    getProducts,
    getProductById,
    addProducts,
    updateProducts,
    deleteProducts,
    searchProducts
}