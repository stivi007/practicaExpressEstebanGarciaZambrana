const mongoose=require('mongoose');
const Product=require('./models/product');

require('dotenv').config();
const app = require("./app");
const port = process.env.PORT;

mongoose.connect(process.env.DATABASE,{}).then((con)=>{
  console.log("Connected to mongo");
  
})
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
