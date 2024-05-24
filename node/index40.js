const mongoose= require('mongoose');
// const saveInDB=async ()=>{
//     //this line will connect to schemas
//     await mongoose.connect("mongodb://localhost:27017/e-comm");
//     const ProductSchema=new mongoose.Schema({
//         //yaha jitni field define hogi utni he add hogi
//         name:String,
//         price:Number,
//         brand:String,
//         category:String
//     });
//     const ProductsModel=mongoose.model('products',ProductSchema);
//     let data= new ProductsModel({
//         name:"apple X",price:5000,
//         brand:"i phone",
//         category:"mobile"
//     });
//     let result=await data.save();
//     console.log(result);
// }
// saveInDB();


//  const updateInDB=async()=>{
//     await mongoose.connect("mongodb://localhost:27017/e-comm");
//     const ProductSchema=new mongoose.Schema({
//         //yaha jitni field define hogi utni he add hogi
//         name:String,
//         price:Number,
//         brand:String,
//         category:String
//     });
//     const Product=mongoose.model('products',ProductSchema);
//     let data= await Product.updateOne(
//         { name:"nokia 10"},{
//             $set:{price:70 } 
//         }
//     )
//     console.log(data);
//     }
// updateInDB();
// const deleteInDB= async()=>{
//         await mongoose.connect("mongodb://localhost:27017/e-comm");
//     const ProductSchema=new mongoose.Schema({
//         //yaha jitni field define hogi utni he add hogi
//         name:String,
//         price:Number,
//         brand:String,
//         category:String
//     });
//     const Product = mongoose.model('products',ProductSchema);
//     let data= await Product.deleteOne({name:"nokia 10"});
//     console.log(data);

// }
// deleteInDB();
//delete->find


// const findInDB= async()=>{
//             await mongoose.connect("mongodb://localhost:27017/e-comm");
//         const ProductSchema=new mongoose.Schema({
//             //yaha jitni field define hogi utni he add hogi
//             name:String,
//             price:Number,
//             brand:String,
//             category:String
//         });
//         const Product = mongoose.model('products',ProductSchema);
//         let data= await Product.find({name:"s-20"});
//         console.log(data);
    
//     }
// findInDB();