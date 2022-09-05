const fs = require("fs");

exports.getAllProducts = (req, res) => {
  const products = JSON.parse(
    fs.readFileSync(`${__dirname}/../data/products.json`)
  );

  res.status(200).json({
    status: "success",
    timeOfRequest: req.requestTime,
    results: products.length,
    data: {
      products,
    },
  });
};

exports.addProduct = (req, res) => {
  const products = JSON.parse(
    fs.readFileSync(`${__dirname}/../data/products.json`)
  );
  products.push(req.body);
  fs.writeFileSync(`${__dirname}/../data/products.json`, JSON.stringify(products));

  res.status(200).json({
    status: "success",
    data: {
      products,
    },
  });
};

exports.getProductById = (req, res) => {
  const products = JSON.parse(
    fs.readFileSync(`${__dirname}/../data/products.json`)
  );
  
  const foundProduct = products.find((p) => p.id == req.params.id);
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

exports.putProducts = (req,res)=>{
  const products = JSON.parse(
    fs.readFileSync(`${__dirname}/../data/products.json`)
  );
  const foundProduct = products.findIndex((p) => p.id == req.params.id);
  products.splice(foundProduct,1,{
    id:Number(req.params.id),
    name:req.body.name,
    price:req.body.price,
    category:req.body.category
  })
  

  fs.writeFileSync(`${__dirname}/../data/products.json`, JSON.stringify(products));
    console.log(products)
  res.json({
    status:"success"
  })
}

exports.deleteProducts=(req,res)=>{
  const products = JSON.parse(
    fs.readFileSync(`${__dirname}/../data/products.json`)
  );
  const id= +req.params.id;
  const foundProduct = products.findIndex(p=>p.id==id);
  products.splice(foundProduct,1)
  console.log(products)
  fs.writeFileSync(`${__dirname}/../data/products.json`, JSON.stringify(products));
  res.status(200).json({
    status:"ok"
  })
}
