const express = require("express");
const router = express.Router();
const productController = require("../controller/productController.js")



router.get("/",productController.getProducts)
router.get("/:id",productController.getProductById)


//create
router.post("/",productController.addProducts)




//UPDATE
router.put("/:id",productController.updateProducts)
//delete
router.delete("/:id",productController.deleteProducts)

module.exports=router
