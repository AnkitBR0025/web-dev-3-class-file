const products = require("../data/data.js")

const getProducts = (req,res)=>{
    res.json(products)
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

const addProducts = (res,req)=>{
    
    const project = req.body;
    products.push({id:products.length+1,...product});
    res.json({success:true,products})
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

module.exports = {
    getProducts,
    getProductById,
    addProducts,
    updateProducts,
    deleteProducts
}