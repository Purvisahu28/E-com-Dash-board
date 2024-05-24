const express=require('express');
require('./config');
const Product=require('./product');
const app=express();
app.use(express.json());
  

app.get("/search/:key",async(req,resp)=>{
    console.log(req.params.key);
    //let data=await Product.find();
    let data=await Product.find({
        "$or":[
            //jitni bhi field mei search krna h isme put krdo utni fields
            {"name":{$regex:req.params.key}},
            { "brand":{$regex:req.params.key}},
            { "category":{$regex:req.params.key}}
        ]
});
    //console.log(data);
    //resp.send(data);
    resp.send(data);

})
app.listen(5000);