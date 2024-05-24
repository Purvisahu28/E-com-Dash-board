//basic syntax:
const {MongoClient} =require('mongodb');
//const MongoClient =require('mongodb').MongoClient;
//path of MongoDB:as nodejs dont know were ismongo db:
const url ='mongodb://localhost:27017' //for local data,same for all desktop
const client= new MongoClient(url);
const database='e-comm';//not req if direct used it within vrna needed
async function getdata(){

    let result= await client.connect();
    // let database=result.db('e-comm');
    let db=result.db(database);
    
    let collection=db.collection('products');

    //not e-comm can have many collection so which collection to use 
    let response = await collection.find({}).toArray();
    console.log(response);
    // console.log(collection.find({}).toArray());
    //   .toArray sab kuch ek structured ormate mei return kr deta hai
}
//promise used as data ko fetch krne mei time lag jata h then we use this promise as we did in java script too
//await is used to solve above problem ,await is only used with the function which is async so there it is
getData();