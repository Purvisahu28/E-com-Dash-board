const express= require("express");
require('./db/config');
const cors=require('cors');
const User=require("./db/User");
const product=require("./db/Product");
const Product = require("./db/Product");
const app=express();
//const cors=require("cors");
app.use(express.json());
//used as middles ware cors
app.use(cors());
app.post("/register",async(req,resp)=>{
    // ab data db mei put karna hai
    let user=new User(req.body);
    let result=await user.save();//ho gaya data db mei put
    //resp.send("api in progress......")
    //resp.send(req.body);//ab postman mei jo send krynge vo milga
    //isme select ni karva sakte jaise lign mei kara the as data dat rhe h isme 
    result= result.toObject();
    delete result.password;
    resp.send(result);
})
//to fetch data:
app.post("/login", async (req, resp) => {
    console.log(req.body);
    if(req.body.password && req.body.email){
        let user = await User.findOne(req.body).select("-password");
       
        if(user){
            resp.send(user);
        }
       else
       {
        resp.send({result:'No User Found'})
       }
        
    }
    else
       {
        resp.send({result:'No User Found'})
       }
    
});
app.post("/add-product",async(req,resp)=>{
let product =new Product(req.body);
let result=await product.save();
resp.send(result)
})
//postman pr now canlist all products
app.get("/products",async(req,resp)=>{
    let products =await product.find();
    if(products.length>0){
        resp.send(products)
    }
    else{
        resp.send({result:"No Products Found"})
    }
});
app.delete("/product/:id",async(req,resp)=>{
    const result=await Product.deleteOne({_id:req.params.id});
    resp.send(result);
});
// dono k url same h pr method alag h therefore problem nahi hogi at all
app.get("/product/:id",async(req,resp)=>{
let result=await Product.findOne({_id:req.params.id});
if(result){
    resp.send(result);
}
else{
    resp.send({result:"No Record Found"})
}
})
app.put("/product/:id",async(req,resp)=>{
let result =await Product.updateOne(
    {_id:req.params.id},{
        $set:req.body
    }
)
resp.send(result);
});
app.get("/search/:key",async(req,resp)=>{
let result=await Product.find({
    "$or":[
{name:{$regex:req.params.key}},
{price:{$regex:req.params.key}},
{company:{$regex:req.params.key}},
{category:{$regex:req.params.key}},
    ]
});
resp.send(result);
})
app.listen(5000);