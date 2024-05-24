const express = require('express');
const dbConnection = require('./mongodb');
const api = express();
const mongodb = require('mongodb');

api.get('/',async (req,resp)=>{
    let data = await dbConnection();
    data= await data.find().toArray();
    resp.send(data);
});
//req se body get krne k lliyea what do we use --
api.use(express.json());
//here post and get both have same url vo to wil depend k call kosa kr rhe h ap postman pr
api.post('/',async(req,resp)=>{
    console.log(req.body);
    let data = await dbConnection();
    let result= await data.insertOne(req.body)
resp.send(result);
});
api.put('/name',async (req,resp)=>{

resp.send({result:"updated"});
let data = await dbConnection();
let result=data.updateOne(
    {name:"samsung 10"},
{ $set:{price:1777}})
resp.send({result:"updated"})
});
api.delete("./:id",async(req,resp)=>{
    console.log(req.params.id)
    let data = await dbConnection();
    const result=await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)})
resp.send(result)
})
api.listen(5000);