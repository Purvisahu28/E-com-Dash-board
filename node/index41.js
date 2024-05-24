const express=require('express');
require('./config');
const Product=require('./product');
const app=express();
app.use(express.json());//jo bhi data aayega usko req.body mei json mei convert kr dega.
app.post("/create",async (req,resp)=>{
    let data=new Product(req.body);
    let result=await data.save();//data ko databasse mei save karega and promise return karega
    console.log(req.body)
    resp.send(result);
});
app.get("/list",async (req,resp)=>{
    //find methond mei schema passn i kro toh bhi chalega
    let data=await Product.find();
    
    resp.send(data);
});
app.delete("/delete/:_id",async (req,resp)=>{
    console.log(req.params);
    //http://localhost:5000/delete/samsung plus ----in postman +delete option
    let data = await Product.deleteOne(req.params);
    resp.send(data);
});
app.put("/update/:_id",async (req,resp)=>{
    console.log(req.params);
    //http://localhost:5000/delete/samsung plus ----in postman +delete option
    let data = await Product.updateOne({});
    resp.send(data);
});

app.listen(5000);
//poatman mei post pr jakr http://localhost:5000/create and send we will get Done