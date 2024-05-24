const {MongoClient} =require('mongodb');
const url ='mongodb://localhost:27017' 
const client= new MongoClient(url);
const database='e-comm';
async function dbConnection(){

    let result= await client.connect();
     db=result.db(database);
    
    return collection=db.collection('products');
// find k brqcket k andr kuch ek particular set ko find krne k liyea rakha h
    console.log("connected");
} 
module.exports=dbConnection;
