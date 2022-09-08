const fs = require("fs");
const Product=require('../models/product')


exports.getAllProducts = async(req, res) => {

  const products=await Product.find();
  res.status(200).json({
    status: "success",
    timeOfRequest: req.requestTime,
    results: products.length,
    data: {
      products,
    },
  });
};

exports.addProduct = async(req, res) => {

  const newProduct=await Product.create(req.body);
  
  res.status(200).json({
    status: "success",
    data: {
      product:newProduct,
    },
  });
};

exports.getProductById = async(req, res) => {
  
  
  const foundProduct = await Product.findById(req.params.id)
  if (foundProduct) {
    res.status(200).json({
      status: "success",
      data: {
        product: foundProduct,
      },
    });
  } else {
    res.status(404).json({
      status: "not found",
    });
  }
};

exports.putProducts = async(req,res)=>{
  const {id}=req.params;
  const {_id, ...resto}=req.body
   const foundProduct= await Product.findByIdAndUpdate(id,resto);
  res.json({
    status:"ok",
  })
}

exports.deleteProducts=async(req,res)=>{
  const {id}=req.params;
  const {_id, ...resto}=req.body
   const foundProduct= await Product.findByIdAndDelete(id);
  res.status(200).json({
    status:"ok"
  })
}
