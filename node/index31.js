const dbConnection=require('./mongodb');
// const {MongoClient} =require('mongodb');
// const url ='mongodb://localhost:27017' 
// const client= new MongoClient(url);
// const database='e-comm';
// async function getData(){

//     let result= await client.connect();
//     let db=result.db(database);
    
//     let collection=db.collection('products');
// // find k brqcket k andr kuch ek particular set ko find krne k
//     let response = await collection.find({name:'s-20'}).toArray();
//     console.log(response);
// }
// getData();
// promise :1
// //console.warn(dbConnection());//after this we get promise output 
// //therefore to handle promise we have 2 methonds:
// dbConnection().then((resp)=>{
//     //console.warn(resp.find({}).toArray());
//     //toArray bhi promise return karta hai
//     // find k andr name rakhna zauri ni h 
//     resp.find({name:"nokia 1100"}).toArray().then((data)=>{
// console.warn(data)
//     })
// })

//promise 2: modern and should use
 const main=async()=>{
    console.log("main function called");
    let data= await dbConnection();
    data= await data.find().toArray();
    console.warn(data);
}
main();