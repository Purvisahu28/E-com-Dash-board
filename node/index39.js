const mongoose= require('mongoose');
const main=async ()=>{
    //this line will connect to schemas
    await mongoose.connect("mongodb://localhost:27017/e-comm");
    const ProductSch=new mongoose.Schema({
        name:String,
        price:Number
    });
    const ProductsModel=mongoose.model('products',ProductSch);
    let data= new ProductsModel({name:"m 10",price:1000});
    let result=await data.save();
    console.log(result);
}
main();